import { AfterViewChecked, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
  newCommentAuthor: string = ''; // Renomeado de newCommentName
  newCommentContent: string = ''; // Renomeado de newCommentText
  isLoading: boolean = true;
  isSubmitting: boolean = false;
  error: string | null = null;
  maxCommentLength: number = 100;
  maxAuthorLength: number = 20;
  private shouldScrollToBottom = false;
  autoReloadIntervalValue: number = 1000; // Inicia com 1s por padrão
  isAutoScrollEnabled: boolean = true;
  isApiOnline: boolean | null = null;

  private autoReloadInterval: any = null;
  private apiStatusInterval: any = null;

  constructor(private commentService: CommentService) { }

  ngOnInit(): void {
    this.loadComments();
    this.onAutoReloadChange(); // Inicia o auto-reload com o valor padrão
    this.startApiStatusCheck();
  }

  ngOnDestroy(): void {
    this.stopAutoReload(); // Garante que o intervalo seja limpo ao destruir o componente
    this.stopApiStatusCheck();
  }

  ngAfterViewChecked() {
    if (this.shouldScrollToBottom) {
      this.scrollToBottom();
      this.shouldScrollToBottom = false;
    }
  }

  loadComments(): void {
    // Só mostra o indicador de "loading" na primeira carga ou em recargas manuais.
    // Evita que o indicador pisque durante a recarga automática.
    if (this.autoReloadIntervalValue === 0) {
      this.isLoading = true;
    }

    this.error = null;
    this.commentService.getComments().subscribe({
      next: (data: Comment[]) => {
        this.comments = data;
        this.shouldScrollToBottom = this.isAutoScrollEnabled;
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
    if (this.newCommentAuthor.trim() && this.newCommentAuthor.length <= this.maxAuthorLength && this.newCommentContent.trim() && this.newCommentContent.length <= this.maxCommentLength && !this.isSubmitting) {
      this.isSubmitting = true;
      const newCommentRequest: CommentRequest = {
        author: this.newCommentAuthor,
        content: this.newCommentContent
      };

      this.commentService.addComment(newCommentRequest).subscribe({
        next: (createdComment: Comment) => {
          this.comments.push(createdComment);
          this.newCommentAuthor = '';
          this.newCommentContent = '';
          this.shouldScrollToBottom = this.isAutoScrollEnabled;
          this.isSubmitting = false;
          this.isApiOnline = true;
        },
        error: (err: any) => {
          console.error('Erro ao enviar comentário:', err);
          this.isApiOnline = false;
          // Opcional: Adicionar uma mensagem de erro para o usuário na UI
          this.isSubmitting = false;
        }
      });
    }
  }

  onAutoReloadChange(): void {
    if (this.autoReloadIntervalValue > 0) {
      this.startAutoReload();
    } else {
      this.stopAutoReload();
    }
  }

  private startAutoReload(): void {
    // Garante que não haja múltiplos intervalos rodando
    this.stopAutoReload();

    // Recarrega os comentários com base no intervalo selecionado
    this.autoReloadInterval = setInterval(() => this.loadComments(), this.autoReloadIntervalValue);
  }

  private stopAutoReload(): void {
    clearInterval(this.autoReloadInterval);
  }

  private startApiStatusCheck(): void {
    this.checkApiStatus(); // Verifica imediatamente
    this.apiStatusInterval = setInterval(() => this.checkApiStatus(), 10000); // E depois a cada 10s
  }

  private stopApiStatusCheck(): void {
    clearInterval(this.apiStatusInterval);
  }

  private checkApiStatus(): void {
    this.commentService.checkApiStatus().subscribe({
      next: () => this.isApiOnline = true,
      error: () => this.isApiOnline = false
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
