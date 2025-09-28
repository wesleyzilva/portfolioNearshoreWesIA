import { AfterViewChecked, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Subject, timer, switchMap, takeUntil, EMPTY, tap } from 'rxjs';
import { Comment, CommentRequest } from './comment.model';
import { CommentService } from './comment.service';

@Component({
  selector: 'app-comentarios',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule], // O CommentService é injetável por ser 'providedIn: root'
  templateUrl: './comentarios.html',
  styleUrls: ['./comentarios.scss']
})
export class Comentarios implements OnInit, OnDestroy, AfterViewChecked {

  @ViewChild('commentListContainer') private commentListContainer!: ElementRef;

  comments: Comment[] = [];
  isLoading: boolean = true;
  isSubmitting: boolean = false;
  error: string | null = null;
  maxCommentLength: number = 100;
  maxAuthorLength: number = 20;
  private shouldScrollToBottom = false;
  isAutoScrollEnabled: boolean = true;
  isApiOnline: boolean | null = null;
  isPersistenceOnline: boolean | null = null;

  commentForm: FormGroup;
  autoReloadControl: FormGroup;

  private destroy$ = new Subject<void>();

  constructor(
    private commentService: CommentService,
    private fb: FormBuilder
  ) {
    this.commentForm = this.fb.group({
      author: ['', [Validators.required, Validators.maxLength(this.maxAuthorLength)]],
      content: ['', [Validators.required, Validators.maxLength(this.maxCommentLength)]],
    });

    this.autoReloadControl = this.fb.group({
      interval: [1000], // Inicia com 1s por padrão
    });
  }

  ngOnInit(): void {
    this.loadComments();
    this.setupAutoReload();
    this.setupApiStatusCheck();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  ngAfterViewChecked() {
    if (this.shouldScrollToBottom && this.isAutoScrollEnabled) {
      this.scrollToBottom();
      this.shouldScrollToBottom = false;
    }
  }

  loadComments(): void {
    const isManualLoad = this.autoReloadControl.get('interval')?.value === 0;
    if (isManualLoad || this.isLoading) { // Only show loading on first load or manual refresh
      this.isLoading = true;
    }

    this.commentService.getComments().subscribe({
      next: (data: Comment[]) => {
        this.comments = data;
        this.shouldScrollToBottom = true;
        this.isLoading = false;
        this.isApiOnline = true;
        this.error = null; // Limpa qualquer erro anterior
      },
      error: (err: any) => {
        console.error('Erro ao carregar comentários:', err);
        this.loadOfflineComments();
        this.isLoading = false;
      }
    });
  }

  submitComment(): void {
    if (this.commentForm.valid && !this.isSubmitting) {
      this.isSubmitting = true;
      const newCommentRequest: CommentRequest = this.commentForm.value;

      this.commentService.addComment(newCommentRequest).subscribe({
        next: (createdComment: Comment) => {
          this.comments.push(createdComment);
          this.commentForm.reset();
          this.shouldScrollToBottom = true;
          this.isSubmitting = false;
          this.isApiOnline = true;
        },
        error: (err: any) => {
          console.error('Erro ao enviar comentário:', err);
          this.isApiOnline = false;
          this.isSubmitting = false;
        }
      });
    }
  }

  private setupAutoReload(): void {
    this.autoReloadControl.get('interval')?.valueChanges.pipe(
      switchMap(interval => (interval > 0 ? timer(0, interval) : EMPTY)),
      takeUntil(this.destroy$)
    ).subscribe(() => this.loadComments());
  }

  private setupApiStatusCheck(): void {
    timer(0, 10000).pipe( // Check status every 10 seconds
      takeUntil(this.destroy$)
    ).subscribe(() => {
      this.checkApiStatus();
      this.checkPersistenceStatus();
    });
  }

  private checkApiStatus(): void {
    this.commentService.checkApiStatus().subscribe({
      next: () => {
        if (this.isApiOnline === false) { // If it was offline, trigger a reload
          this.loadComments();
        }
        this.isApiOnline = true;
      },
      error: () => this.isApiOnline = false
    });
  }

  private checkPersistenceStatus(): void {
    this.commentService.checkPersistenceStatus().subscribe({
      next: () => this.isPersistenceOnline = true,
      error: () => this.isPersistenceOnline = false
    });
  }

  private loadOfflineComments(): void {
    this.isApiOnline = false;
    this.error = 'The Java facade is offline. Displaying mock comments.';
    this.comments = [
      { id: 1, author: 'Offline User 1', content: 'This is a mock comment because the API is offline.', timestamp: new Date().toISOString() },
      { id: 2, author: 'Offline User 2', content: 'The data is not real, it is for demonstration purposes only.', timestamp: new Date(Date.now() - 1000 * 60 * 2).toISOString() },
      { id: 3, author: 'Offline User 3', content: 'When the API is back online, real comments will be displayed.', timestamp: new Date(Date.now() - 1000 * 60 * 5).toISOString() }
    ];
    this.shouldScrollToBottom = true;
  }

  private scrollToBottom(): void {
    try {
      if (this.commentListContainer?.nativeElement) {
        this.commentListContainer.nativeElement.scroll({
          top: this.commentListContainer.nativeElement.scrollHeight,
          behavior: 'smooth'
        });
      }
    } catch (err) { }
  }
}
