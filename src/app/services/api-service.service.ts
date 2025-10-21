import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const BASE_URL = 'https://jsonplaceholder.typicode.com/';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  constructor(private http: HttpClient) {}

  getPosts() {
    return this.http.get(`${BASE_URL}/posts`);
  }

  getUsers() {
    return this.http.get(`${BASE_URL}/users`);
  }

  getPostsById(Id:Number) {
    return this.http.get(`${BASE_URL}/posts/${Id}`);
  }
}
