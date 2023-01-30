import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-error',
  templateUrl: './login-error.component.html',
  styleUrls: ['./login-error.component.css']
})
export class LoginErrorComponent implements OnInit {

  loginErrorText = 'An error occured while login. contact support team'
  
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  loginAgain(){
    this.router.navigate(['login'])
  }
}
