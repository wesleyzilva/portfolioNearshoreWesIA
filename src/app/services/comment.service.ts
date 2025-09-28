import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Comment, CommentRequest } from '../models/comment.model';

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  // A URL base da sua facade. Em um projeto real, isso viria dos arquivos de ambiente.
  private apiUrl = 'http://localhost:8081/api/facadeComments';

  constructor(private http: HttpClient) {}

  /**
   * Busca todos os comentários da API.
   */
  getComments(): Observable<Comment[]> {
    return this.http.get<Comment[]>(this.apiUrl);
  }

  /**
   * Envia um novo comentário para a API.
   * @param commentData Os dados do novo comentário.
   */
  addComment(commentData: CommentRequest): Observable<Comment> {
    return this.http.post<Comment>(this.apiUrl, commentData);
  }
}