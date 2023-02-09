import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class BookStoreService {
  constructor(private http: HttpClient) {}

  resetStore() {
    this.http.delete('http://localhost:3000/books');
  }
}
