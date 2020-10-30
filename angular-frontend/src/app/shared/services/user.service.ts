import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/User.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  apiUrl = 'http://localhost:3333/users';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(
    private httpClient: HttpClient
  ) { }

  public getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.apiUrl)
  }

  public deleteUser(id): Observable<User> {
    return this.httpClient.delete<User>( this.apiUrl + '/' + id)
  }

  public createUser(name): Observable<User> {
    return this.httpClient.post<User>( this.apiUrl, { name: name })
  }
}
