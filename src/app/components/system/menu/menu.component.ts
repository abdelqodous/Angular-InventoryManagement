import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthenticationService } from 'src/app/services/security/authentication.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  userName: string | null | undefined
  // isUserLoggedIn: boolean | undefined

  constructor(
    private route: ActivatedRoute,
    public authenticationService: AuthenticationService) { }

  ngOnInit(): void {
    this.userName = this.route.snapshot.paramMap.get('user');
    // this.isUserLoggedIn = this.authenticationService.loggedInUser();
    // console.log('is user loggedin?',this.isUserLoggedIn );
  }

}
