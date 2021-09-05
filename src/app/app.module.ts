import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';
import {RouterModule} from "@angular/router";
import { HomeComponent } from './home/home.component';
import {AppRoutingModule} from "./app-routing.module";
import { LoginComponent } from './login/login.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { UploadImageComponent } from './upload-image/upload-image.component';
import { PostCreateComponent } from './post-create/post-create.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { HappyDayComponent } from './happy-day/happy-day.component';
import {NgxPaginationModule} from "ngx-pagination";
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ReadMoreComponent } from './read-more/read-more.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    FileUploadComponent,
    UploadImageComponent,
    PostCreateComponent,
    RegisterComponent,
    ProfileComponent,
    HappyDayComponent,
    ChangePasswordComponent,
    ReadMoreComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
