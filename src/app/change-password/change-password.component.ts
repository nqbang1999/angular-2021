import { Component, OnInit } from '@angular/core';
import {UserService} from "../services/user.service";
import {SessionService} from "../services/session.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  currentPassword:any = "";
  newPassword:any = "";
  confirmedNewPassword:any = "";
  loginUsername:any = "";

  constructor(private userService : UserService,
              private sessionService : SessionService,
              private router : Router) { }

  ngOnInit(): void {
    this.loginUsername = this.sessionService.getSession();
  }

  changePassword(): void {
    this.userService.changePassword(this.loginUsername, this.currentPassword, this.newPassword, this.confirmedNewPassword).subscribe(
      data => {
        alert("change password success");
        this.router.navigate(["/home"]);
      },
      err => {
        alert(err.error);
      }
    );


  }

  onSubmit(): void {
    this.changePassword();
  }

  goToHome(): void {
    this.router.navigate(['/home']);
  }

}
