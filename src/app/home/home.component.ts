import { Component, OnInit } from '@angular/core';
import {SessionService} from "../services/session.service";
import {Router} from "@angular/router";
import {PostService} from "../services/post.service";
import {ImageService} from "../services/image.service";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  posts: any[];
  images: any[];
  username:any = "";
  title:string = "";
  content:string = "";
  newPostID: any;
  newPostResponse: any;
  p: any;

  constructor(private sessionService : SessionService,
              private router : Router,
              private postService : PostService,
              private imageService : ImageService) {
    this.posts=[],
      this.images=[]
  }

  ngOnInit(): void {
    this.username = this.sessionService.getSession();
    this.postService.getAllPostsWithImage().subscribe(
      data => {
        this.posts = data;
      },
      err => {
        alert(err.error);
      }
    );
  }

  scrollToTop(): void {
    window.scrollTo(50, 700);
  }

  logOut(): void {
    this.sessionService.removeSession();
    this.router.navigate(['/']);
  }

  onSubmit(): void {
    this.postService.create(this.title, this.content).subscribe(
      data => {
        this.newPostResponse = data;
        this.newPostID = this.newPostResponse.id;

        this.imageService.upload(this.file, this.newPostID).subscribe();
        alert("create post success");
      },
      err => {
        alert(err.error);
      }
    );
  }

  file: any;
  onFileSelected(event: any) {
    this.file = event.target.files[0];
  }

  // upload(): void {
  //   if (this.file && this.newPostID) {
  //     this.imageService.upload(this.file, this.newPostID).subscribe();
  //     alert("upload image success");
  //   } else {
  //     alert("no file is selected");
  //   }
  // }
   goToHome(): void {
    this.router.navigate(["/home"]);
   }

  goToHappyDay(): void {
    this.router.navigate(["/happy-day"]);
  }

  goToProfile(): void {
    this.router.navigate(["/profile"]);
  }

  goToCreate(): void {
    this.router.navigate(["/create"]);
  }

}
