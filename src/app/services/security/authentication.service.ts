import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export class LoginRequest{
  constructor(
    public userName: string, 
    public password: string
  ){}
}

export class AuthenResponse{
  constructor(
    public token: string
  ){}
}

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private readonly apiUrl = 'http://localhost:9090/api/v1/auth';

  constructor( private http: HttpClient) {}

  authenticatedUser(loginRequest: LoginRequest):Observable<AuthenResponse>{
    return this.http.post<AuthenResponse>(`${this.apiUrl}/authenticate`, loginRequest);
  }

  loggedInUser(){
    let loggedUser = sessionStorage.getItem('authenticatedUser');
    return loggedUser != null;
  }

  logout(){
    sessionStorage.removeItem('authenticatedUser');
  }
}
