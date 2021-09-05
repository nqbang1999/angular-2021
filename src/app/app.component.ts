import {Component, OnInit} from '@angular/core';
import {UserService} from "./services/user.service";
import {Router} from "@angular/router";
import {SessionService} from "./services/session.service";
import {PostService} from "./services/post.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'left for code with bangquang11';

  constructor(private sessionService : SessionService,
              private router : Router,
              private postService : PostService) {
  }

  isLoggedIn: boolean | undefined;

  ngOnInit(): void {
    if (this.sessionService.getSession() !== null) {
      this.isLoggedIn = true;
    } else {
      this.isLoggedIn = false;
      alert("login required");
      this.router.navigate(['/login']);
    }

    // if (this.sessionService.getSession() == null && this.sessionService.getSessionRegister() !== null) {
    //   this.router.navigate(['/register']);
    // } else if (this.sessionService.getSession() == null && this.sessionService.getSessionRegister() == null) {
    //   this.router.navigate(['/login']);
    // } else if (this.sessionService.getSession() !== null && this.sessionService.getSessionRegister() !== null) {
    //   this.router.navigate(['/register']);
    // } else {
    //   this.router.navigate(['/login']);
    // }
  }






}
