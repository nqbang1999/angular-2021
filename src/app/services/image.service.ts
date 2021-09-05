import { Injectable } from '@angular/core';
import {HttpClient, HttpEvent, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";

const API_LOCAL_HOST = 'http://troioi260820211058-env.eba-brdjnt62.us-east-2.elasticbeanstalk.com/bangquang/';
const IMAGE_UPLOAD = 'upload-image/';
const IMAGE_GET_ALL = 'images';
const IMAGE_GET_ONE = 'image/';
const IMAGE_GET_ALL_BY_POST_ID = '/get-image-by-post-id/';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private http: HttpClient) { }

  upload(file: File, postID: any): Observable<any> {
    const formData: FormData = new FormData();

    formData.append("imageInput", file);

    return this.http.post(API_LOCAL_HOST + IMAGE_UPLOAD + postID, formData);
  }

  getAll(): Observable<any> {
    return this.http.get(API_LOCAL_HOST + IMAGE_GET_ALL);
  }

  getOne(id: String): Observable<any> {
    return this.http.get(API_LOCAL_HOST + IMAGE_GET_ONE + id);
  }

  getAllByPostID(postId: any): Observable<any> {
    return this.http.get(API_LOCAL_HOST + IMAGE_GET_ALL_BY_POST_ID + postId);
  }
}
