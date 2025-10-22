import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        loadComponent: () => import('./components/table/table.component').then(m => m.TableComponent)
    },
    {
        path: 'users',
        pathMatch: 'full',
        loadComponent: () => import('./users/users.component').then(m => m.UsersComponent)
    },
    {
        path: 'posts',
        pathMatch: 'full',
        loadComponent: () => import('./posts/posts.component').then(m => m.PostsComponent)
    },
    {
        path: 'todos',
        pathMatch: 'full',
        loadComponent: () => import('./todos/todos.component').then(m => m.TodosComponent)
    },
    {
        path: 'sales',
        pathMatch: 'full',
        loadComponent: () => import('./sales/sales.component').then(m => m.SalesComponent)
    },
    
];
