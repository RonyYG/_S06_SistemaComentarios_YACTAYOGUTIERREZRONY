import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ApiService {
  private url = 'https://jsonplaceholder.typicode.com/comments';

  constructor(private http: HttpClient) { }

  getComments(): Observable<any[]> {
    return this.http.get<any[]>(this.url);
  }

  postComment(comment: any): Observable<any> {
    return this.http.post<any>(this.url, comment);
  }
}