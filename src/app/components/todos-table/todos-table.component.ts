import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ApiServiceService } from '../../services/api-service.service';

@Component({
  selector: 'app-todos-table',
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './todos-table.component.html',
  styleUrl: './todos-table.component.scss',
})
export class TodosTableComponent {
  Todos: any[] = [];
  filteredTodos: any[] = [];
  todoSearch = '';
  userId: string | null = null;

  constructor(
    private apiService: ApiServiceService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.queryParamMap.subscribe((params) => {
      const id = params.get('id');
      this.userId = id;
      this.Todos = [];
    });
    this.apiService.getTodos(Number(this.userId)).subscribe((todos) => {
      console.log(todos);
      this.Todos = todos as any[];
      this.filteredTodos = [...this.Todos];
    });
  }

  search(searchItem: string = '') {
    console.log(this.todoSearch)
    const term = searchItem.toLowerCase().trim();
    console.log('Searching:', term);

    if (!term) {
      this.filteredTodos = [...this.Todos];
      return;
    }

    this.filteredTodos = this.Todos.filter(
      (todo) =>
        todo.title.toLowerCase().includes(term)
    );
  }
}
