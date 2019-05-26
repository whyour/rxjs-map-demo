import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AppService {
  constructor(
    private http: HttpClient
  ) { }

  getUsers() {
    return this.http.get(`https://jsonplaceholder.typicode.com/posts`);
  }

  searchUser(userId: string) {
    const params = new HttpParams().set('userId', userId);
    return this.http.get(`https://jsonplaceholder.typicode.com/posts`, { params });
  }
}
