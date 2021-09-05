import { Component, OnInit } from '@angular/core';
import {UserService} from "../services/user.service";
import {Router} from "@angular/router";
import {SessionService} from "../services/session.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username:string = "";
  password:string = "";

  constructor(private userService: UserService,
              private router: Router,
              private sessionService : SessionService
  ) {
  }

  onSubmit(): void {
    this.userService.login(this.username, this.password).subscribe(
      data => {
        this.sessionService.setSession(data.username);
        alert("login success");
        this.router.navigate(['/home']);
      },
      err => {
        alert(err.error);
      }
    );
  }

  ngOnInit(): void {
  }

  onClick(): void {
    this.router.navigate(['/register']);
  }

}
