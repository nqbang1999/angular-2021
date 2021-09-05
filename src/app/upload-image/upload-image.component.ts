import { Component, OnInit } from '@angular/core';
import {ImageService} from "../services/image.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.css']
})
export class UploadImageComponent implements OnInit {

  constructor(private imageService: ImageService,
              private http: HttpClient) { }

  selectedFile: any;

  // event: any;
  public TestImageUrl = "";
  public TestDisplayImage : any;

  idImageInput = "1";
  retrievedImage: any;
  base64Data: any;
  dataImage: any;
  retrieveResponse: any;

  ngOnInit(): void {
    // this.imageService.getAll().subscribe(data => {
    //   console.log("get all images: " + JSON.stringify(data));
    // }, error => {
    //   console.log("error get all images");
    // })
    // this.imageService.getOne(this.idImageInput).subscribe(data => {
    //   console.log("get one image: " + JSON.stringify(data));
    // }, error => {
    //   console.log("error get 1 image");
    //   console.log("error get one image: " + JSON.stringify(error));
    // });
    this.http.get("http://localhost:8080/bangquang/image/1").subscribe(res => {
      console.log("test get one: " + JSON.stringify(res));
      this.retrieveResponse = res;
      console.log("res.data: " + this.retrieveResponse.data);
      this.base64Data = this.retrieveResponse.data;
      this.retrievedImage = 'data:image/jpeg;base64,' + this.base64Data;
    }, error => {
      console.log("error test get one: " + JSON.stringify(error));
    })
  }

  public ImageUrl = "";
  public FileImage : any;

  onFileChange(event : any) {
    // console.log("event: " + event);
    // console.log("event: " + JSON.stringify(event));
    // console.log("event.target.files: " + event.target.files);
    this.FileImage = event.target.files[0];
    var reader = new FileReader();
    reader.onload = (event:any) => {
      this.ImageUrl = event.target.result;
    }
    reader.readAsDataURL(this.FileImage);
  }
  public file: any;

  onFileSelected(event: any) {

    this.file = event.target.files[0];

  }


  // upload(): void {
  //   if (this.file) {
  //     this.imageService.upload(this.file).subscribe();
  //     alert("upload image success");
  //   } else {
  //     alert("no file is selected");
  //   }

    //   .subscribe(data => {
    //   console.log("lấy dc img response từ backend: " + JSON.stringify(data));
    //   },
    //   error => {
    //     alert(error);
    //     console.log(JSON.stringify(error));
    //   }
    // )
  }


