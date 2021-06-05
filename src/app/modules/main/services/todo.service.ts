import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { endpoints } from 'src/environments/endpoints';
import { environment } from 'src/environments/environment';
import { Todo } from '../../models/todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(
    private http: HttpClient
  ) { }

  getAll(title?: string): Observable<Todo[]> {
    let params = new HttpParams();
    if (title) { params = params.set('title', title); }

    return this.http.get(
      `${environment.api.host}${endpoints.todos}`, { params }
    ).pipe(
      map(
        (res: any) => res.map(todo => new Todo(todo))
      )
    );
  }

  create(todo: Todo): Observable<any> {
    return this.http.post(
      `${environment.api.host}${endpoints.todos}`, todo
    ).pipe(
      map(
        (res: any) => res
      )
    );
  }
}
