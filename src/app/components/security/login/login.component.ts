import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenResponse, AuthenticationService, LoginRequest } from 'src/app/services/security/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginRequest: LoginRequest = {
    userName: '',
    password: ''
  };
  // userName = ''
  // password = ''
  loginErrorMsg = 'Invalid credential..'
  invalideLogin = false

  constructor(
    private router: Router,
    private authService: AuthenticationService) { 
  }

  ngOnInit(): void {
  }

  userLogin(): void {
    
    this.authService.authenticatedUser(this.loginRequest)
      .subscribe((response: AuthenResponse) => {
        // Handle successful login here
        console.log('$$.. token: ', response.token);
        this.invalideLogin = false
        this.router.navigate(['home', this.loginRequest.userName])
        sessionStorage.setItem('authenticatedUser', this.loginRequest.userName);
      }, (error) => {
        this.invalideLogin = true
        this.router.navigate(['login-error'])
      }
      )
    /*if(userName == 'abdelqodous' && password == '123'){
      sessionStorage.setItem('authenticatedUser', userName);
      return true;
    }else{
      return false;
    }*/
    // console.log('$$.. login action: user name is: ',this.userName)
    // console.log('$$.. login action: password is: ',this.password)
    /* if(this.authenticationService.authenticatedUser(this.loginRequest.username, this.loginRequest.password)){
      this.invalideLogin = false
      this.router.navigate(['home', this.loginRequest.username])
    }else{
      this.invalideLogin = true
      this.router.navigate(['login-error'])
    } */
  }
}
