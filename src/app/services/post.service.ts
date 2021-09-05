import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

const API_LOCAL_HOST = 'http://troioi260820211058-env.eba-brdjnt62.us-east-2.elasticbeanstalk.com/bangquang/';
const POST_CREATE = 'create-post';
const POST_GET_ALL = 'get-all-posts';
const POST_GET_ALL_WITH_IMAGE = 'get-all-posts-with-image';
const POST_GET_DETAIL = 'get-post-detail/';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  create(title: string, content: string): Observable<any> {
    return this.http.post(API_LOCAL_HOST + POST_CREATE, {
      title,
      content
    });
  }

  getAll(): Observable<any> {
    return this.http.get(API_LOCAL_HOST + POST_GET_ALL);
  }

  getAllPostsWithImage(): Observable<any> {
    return this.http.get(API_LOCAL_HOST + POST_GET_ALL_WITH_IMAGE);
  }

  getPagePosts(): Observable<any> {
    return this.http.get(API_LOCAL_HOST + "get-posts-page");
  }

  getDetailPost(postId: any): Observable<any> {
    return this.http.get(API_LOCAL_HOST + POST_GET_DETAIL + postId);
  }
}
