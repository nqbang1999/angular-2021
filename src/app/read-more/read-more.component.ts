import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {PostService} from "../services/post.service";

@Component({
  selector: 'app-read-more',
  templateUrl: './read-more.component.html',
  styleUrls: ['./read-more.component.css']
})
export class ReadMoreComponent implements OnInit {
  post: any;
  postId: any;

  constructor(private router : Router,
              private postService : PostService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params=>{
      this.postId = params['idPost'];
    })
    this.getDetailPost(this.postId);
  }

  getDetailPost(postId: any): void {
    this.postService.getDetailPost(postId).subscribe(
      data => {
        this.post = data;
      },
      err => {
        return;
      }
    );
  }

  backToHome(): void {
    this.router.navigate(['home']);
  }

}
