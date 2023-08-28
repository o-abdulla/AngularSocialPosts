import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Post } from 'src/app/models/post';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css']
})
export class SinglePostComponent {
@Input() post:Post = {} as Post; // empty object with all properties as Post
@Output() delete = new EventEmitter<Post>();

addVote():void{
  this.post.votes++;
}

remove():void{
  this.delete.emit(this.post);
}

}
