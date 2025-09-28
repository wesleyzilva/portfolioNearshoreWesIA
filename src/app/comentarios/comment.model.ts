// O objeto de comentário que a API retorna
export interface Comment {
  id: number;
  author: string;
  content: string;
  timestamp: string; // O 'Instant' do Java é serializado como uma string ISO 8601
}

// O objeto enviado para criar um novo comentário
export interface CommentRequest {
  author: string;
  content: string;
}