import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SocialPostsComponent } from './components/social-posts/social-posts.component';
import { SinglePostComponent } from './components/single-post/single-post.component';
import { PostFormComponent } from './components/post-form/post-form.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    SocialPostsComponent,
    SinglePostComponent,
    PostFormComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
