import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/security/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName = 'abdelqodous'
  password = ''
  loginErrorMsg = 'Invalid credential..'
  invalideLogin = false

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService) { 
  }

  ngOnInit(): void {
  }

  userLogin(){
    // console.log('$$.. login action: user name is: ',this.userName)
    if(this.authenticationService.authenticatedUser(this.userName, this.password)){
      this.invalideLogin = false
      this.router.navigate(['home', this.userName])
    }else{
      this.invalideLogin = true
      this.router.navigate(['login-error'])
    }
  }
}
