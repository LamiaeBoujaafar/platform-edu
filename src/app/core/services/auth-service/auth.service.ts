import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(login: string,password:string): Observable<any> {
    let host = environment.hostAuth;
    const LoginObject = { login,password }
    return this.http.post<any>(host,LoginObject);
  }
}
