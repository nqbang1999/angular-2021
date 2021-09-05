import { Component, OnInit } from '@angular/core';
import {SessionService} from "../services/session.service";
import {UserService} from "../services/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  username:any = "";
  email:any = "";

  constructor(private sessionService: SessionService,
              private userService: UserService,
              private router: Router) { }

  ngOnInit(): void {
    this.username = this.sessionService.getSession();
    this.userService.getUserInfo(this.username).subscribe(data => {
      this.email = data.email;
    }, error => {
      return;
    });
  }

  backToHome(): void {
    this.router.navigate(["/home"]);
  }

}
