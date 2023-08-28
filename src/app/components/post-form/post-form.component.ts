import { Component, EventEmitter, Output } from '@angular/core';
import { Post } from 'src/app/models/post';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent {
  newPost:Post = {} as Post;
  @Output() PostCreated = new EventEmitter<Post>();

  submitPost():void{
    this.newPost.votes = 0;
    this.PostCreated.emit(this.newPost);
    this.newPost = {} as Post;
  }

  // submitPost():void{
  //   //{... this.newPost} automatically assigns properties
  //   let result:Post = {... this.newPost};
  //   this.PostCreated.emit(result);
  // }

   // displayForm:boolean = false;

  // toggleForm():void{
  //   this.displayForm = !this.displayForm;
  // }

}
