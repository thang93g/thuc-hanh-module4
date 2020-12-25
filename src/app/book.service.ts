import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private baseUrl = "http://localhost:3000/books";

  constructor(private http: HttpClient) { }

  getBookList(): Observable<any>{
    return this.http.get(`${this.baseUrl}/`);
  }

  createBook(group: Object): Observable<object>{
    return this.http.post(`${this.baseUrl}/`,group);
  }

  deleteBook(id: number): Observable<object>{
    return this.http.delete(`${this.baseUrl}/${id}`)
  }

  updateBook(id: number , value: any): Observable<object>{
    return this.http.put(`${this.baseUrl}/${id}`,value)
  }

  getBook(id: number){
    return this.http.get(`${this.baseUrl}/${id}`);
  }
}
