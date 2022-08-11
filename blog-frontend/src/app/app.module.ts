import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { EditorModule } from '@tinymce/tinymce-angular';
import { NgxWebstorageModule } from 'ngx-webstorage';
import { AddPostComponent } from './add-post/add-post.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterSuccessComponent } from './auth/register-success/register-success.component';
import { RegisterComponent } from './auth/register/register.component';
import { AuthGuard } from './guard/auth.guard';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { HttpClientInterceptor } from './http-client-interceptor';
import { PostComponent } from './post/post.component';
import { UpdatePostComponent } from './update-post/update-post.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    PostComponent,
    AddPostComponent,
    LoginComponent,
    RegisterComponent,
    RegisterSuccessComponent,
    UpdatePostComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    EditorModule,
    NgxWebstorageModule.forRoot(),
    RouterModule.forRoot([
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: '', component: HomeComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'post/:postId', component: PostComponent },
      { path: 'login', component: LoginComponent },
      { path: 'register-success', component: RegisterSuccessComponent },
      { path: 'update/:postId', component: UpdatePostComponent },
      { path: 'home', component: HomeComponent },
      {
        path: 'add-post',
        component: AddPostComponent,
        canActivate: [AuthGuard],
      },
    ]),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpClientInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
