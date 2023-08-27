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

  SubmitPost():void{
    this.PostCreated.emit(this.newPost);
    this.newPost = {} as Post;
  }
}
