import { Component, OnInit } from '@angular/core';
import {PostService} from "../services/post.service";

@Component({
  selector: 'app-happy-day',
  templateUrl: './happy-day.component.html',
  styleUrls: ['./happy-day.component.css']
})
export class HappyDayComponent implements OnInit {

  posts: any[];

  constructor(private postService: PostService) {
    this.posts=[];
  }


  ngOnInit(): void {
    this.postService.getAllPostsWithImage().subscribe(
      data => {
        this.posts = data;
      },
      err => {
        return;
      }
    );
  }

}
