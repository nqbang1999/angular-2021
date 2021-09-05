import { Component, OnInit } from '@angular/core';
import {SessionService} from "../services/session.service";
import {UserService} from "../services/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  usernameInput:string = "";
  emailInput:string = "";
  passwordInput:string = "";
  confirmedPasswordInput:string = "";

  constructor(private userService : UserService,
              private router : Router) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.userService.register(this.usernameInput, this.emailInput, this.passwordInput, this.confirmedPasswordInput).subscribe(
      data => {
        alert("register success");
        this.router.navigate(['/login']);
      },
      err => {
        if (err.error.error) {
          alert("Email is invalid");
          return;
        } else {
          alert(err.error);
        }
      }
    );
  }

}
