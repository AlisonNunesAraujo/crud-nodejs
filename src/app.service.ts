import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  createPost(data: { title: string; content: string }): string {
    return 'Enviado com sucesso!';
  }
  deletePost(id: number): string {
    return 'Deletado com sucesso.';
  }

  updatePost(id: number, data: { title: string; content: string }): string {
    return 'Atualizado com sucesso.';
  }
}
