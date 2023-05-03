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

  constructor(
    private http: HttpClient) { }

  // authenticatedUser(userName: string, password: string):Observable<AuthenticationRequest>{
  authenticatedUser(loginRequest: LoginRequest):Observable<AuthenResponse>{
    const headers = new HttpHeaders({
        'Content-Type': 'application/json'
      });
      // const body = { userName, password };
      return this.http.post<AuthenResponse>(`${this.apiUrl}/authenticate`, loginRequest);

      /*this.httpClient
    .post<Brand>(this.apiURL + '/api/inventory/v1/brands/', JSON.stringify(brand))
    .pipe(retry(1), catchError(this.handleError));*/

    
    
    /*if(userName == 'abdelqodous' && password == '123'){
      sessionStorage.setItem('authenticatedUser', userName);
      return true;
    }else{
      return false;
    }*/

  }

  loggedInUser(){
    let loggedUser = sessionStorage.getItem('authenticatedUser');
    return loggedUser != null;
  }

  logout(){
    sessionStorage.removeItem('authenticatedUser');
  }
}
