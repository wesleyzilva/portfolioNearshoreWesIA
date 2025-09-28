import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from './environment';
import { Comment, CommentRequest } from './comment.model';

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  // URL da API centralizada no arquivo de ambiente
  private apiUrl = `${environment.apiUrl}/facadeComments`;
  private persistenceApiUrl = 'http://localhost:8082/api/persistComments';

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

  /**
   * Verifica o status da API da facade.
   */
  checkApiStatus(): Observable<any> {
    return this.http.head(this.apiUrl, { observe: 'response' });
  }

  /**
   * Verifica o status da API de persistência.
   */
  checkPersistenceStatus(): Observable<any> {
    return this.http.head(this.persistenceApiUrl, { observe: 'response' });
  }
}