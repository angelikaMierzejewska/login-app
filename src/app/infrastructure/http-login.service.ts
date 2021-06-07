import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../domain/user.model';
import { API_URL } from './token';


// TODO deklaracja interfejsu LoginUser z metodą login i implementacja go przez klasę HttpLoginService
@Injectable({
  providedIn: 'root'
})
export class HttpLoginService {

  constructor(private httpClient: HttpClient, @Inject(API_URL) private url: string) { }

  // TODO zastąpić any odpowiednim typem danych
  login(user: User): Observable<any>{
    return this.httpClient.post<any>(this.url, user)
  }
}
