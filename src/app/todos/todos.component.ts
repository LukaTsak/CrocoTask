import { Component } from '@angular/core';
import { ApiServiceService } from '../services/api-service.service';
import { ActivatedRoute } from '@angular/router';
import { TodosTableComponent } from '../components/todos-table/todos-table.component';

@Component({
  selector: 'app-todos',
  imports: [TodosTableComponent],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.scss',
})
export class TodosComponent {
  constructor(
    private route: ActivatedRoute,
    private apiService: ApiServiceService
  ) {}

  userId: string | null = null;
  todos: any[] = [];

  ngOnInit() {
    this.route.queryParamMap.subscribe((params) => {
      const id = params.get('id');
      this.userId = id;
    this.apiService.getTodos(1).subscribe((todos) => {
      this.todos = todos as any[];
      console.log(this.todos);
    });
    });
  }
}
