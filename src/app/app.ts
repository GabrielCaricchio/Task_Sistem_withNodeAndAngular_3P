import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('todoApp');
  tarefas: string[] = [];

  adicionarTarefa(tarefa: string) {
    console.log('Nova tarefa adicionada:', tarefa);
    if (tarefa.trim()) {
      this.tarefas.push(tarefa);
    }
    console.log('Lista de tarefas atualizada:', this.tarefas);
  }

  removerTarefa(index: number) {
    this.tarefas.splice(index, 1);
  }
}
