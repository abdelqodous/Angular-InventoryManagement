import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

  authenticatedUser(userName: string, password: string){
    if(userName == 'abdelqodous' && password == '123'){
      sessionStorage.setItem('authenticatedUser', userName);
      return true;
    }else{
      return false;
    }
  }

  loggedInUser(){
    let loggedUser = sessionStorage.getItem('authenticatedUser');
    return loggedUser != null;
  }

  logout(){
    sessionStorage.removeItem('authenticatedUser');
  }
}
