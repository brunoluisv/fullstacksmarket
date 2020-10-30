import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../models/Task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  
  apiUrl = 'http://localhost:3333/tasks';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(
    private httpClient: HttpClient
  ) { }

  public getTasks(id): Observable<Task[]> {
    return this.httpClient.get<Task[]>( this.apiUrl + '/' + id)
  }

  public createTask(descr, state, userId): Observable<Task> {
    return this.httpClient.post<Task>( this.apiUrl, { 
      descr: descr,
      state: state,
      user_id: userId
    })
  }

  public changeState(id, state, userId): Observable<Task> {
    const estado = state === 0 ? true : false
    return this.httpClient.put<Task>( this.apiUrl + '/' + userId, { 
      task_id: id,
      state: estado
    })
  }

  public deleteTask(id, userId): Observable<Task> {    
    return this.httpClient.delete<Task>( this.apiUrl + '/' + userId + '/' + id)
  }
}