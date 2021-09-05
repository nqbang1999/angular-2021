import { Component, OnInit } from '@angular/core';
import {SessionService} from "../services/session.service";
import {Router} from "@angular/router";
import {PostService} from "../services/post.service";
import {ImageService} from "../services/image.service";

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {

  posts: any[];
  images: any[];
  username:any = "";
  title:string = "";
  content:string = "";
  newPostID: any;
  newPostResponse: any;

  constructor(private sessionService : SessionService,
              private router : Router,
              private postService : PostService,
              private imageService : ImageService) {
    this.posts=[],
      this.images=[]
  }

  retrievedImage: any;

  ngOnInit(): void {
    this.username = this.sessionService.getSession();
  }

  onSubmit(): void {

    if (!this.title) {
      alert("error: title is required");
      return;
    }
    if (!this.content) {
      alert("error: content is required");
      return;
    }
    if (!this.file) {
      alert("error: image is required");
      return;
    }

    this.postService.create(this.title, this.content).subscribe(
      data => {
        this.newPostResponse = data;
        this.newPostID = this.newPostResponse.id;

        if (this.file && this.newPostID !== null) {
          this.imageService.upload(this.file, this.newPostID).subscribe();
          alert("create post success");
          this.router.navigate(['/home']);
        } else {
          alert("error: create post");
          return;
        }
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

  backToHome(): void {
    this.router.navigate(["/home"]);
  }
}
