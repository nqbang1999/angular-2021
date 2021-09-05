import {HomeComponent} from "./home/home.component";
import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {LoginComponent} from "./login/login.component";
import {PostCreateComponent} from "./post-create/post-create.component";
import {RegisterComponent} from "./register/register.component";
import {ProfileComponent} from "./profile/profile.component";
import {HappyDayComponent} from "./happy-day/happy-day.component";
import {ChangePasswordComponent} from "./change-password/change-password.component";
import {ReadMoreComponent} from "./read-more/read-more.component";

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', component: LoginComponent},
  { path: 'login', component: LoginComponent},
  { path: 'create', component: PostCreateComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'profile', component: ProfileComponent},
  { path: 'happy-day', component: HappyDayComponent},
  { path: 'change-password', component: ChangePasswordComponent},
  { path: 'read-more/:idPost', component: ReadMoreComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
