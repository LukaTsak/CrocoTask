import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

@Injectable({
  providedIn: 'root',
})
export class ApiServiceService {
  constructor(private http: HttpClient) {}

  getPosts() {
    return this.http.get(`${BASE_URL}/posts`);
  }

  getUsers() {
    return this.http.get(`${BASE_URL}/users`);
  }

  getPostsById(id: number) {
    const params = new HttpParams().set('userId', id.toString());
    return this.http.get(`${BASE_URL}/posts`, { params });
  }

  getTodos(id: number){
    const params = new HttpParams().set('userId', id.toString());
    return this.http.get(`${BASE_URL}/todos`, { params });
  }
}