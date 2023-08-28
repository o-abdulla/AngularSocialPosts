import { Component } from '@angular/core';
import { Post } from 'src/app/models/post';

@Component({
  selector: 'app-social-posts',
  templateUrl: './social-posts.component.html',
  styleUrls: ['./social-posts.component.css']
})
export class SocialPostsComponent {
allPosts:Post[] = [
  {
    title: "Grand Circus",
    thought: "Grand Circus is cool",
    votes: 9001,
    image: ""
  },
  {
    title: "Ritual",
    thought: "Ritual is a well developed app",
    votes: -1,
    image: ""
  },
  {
    title: "Scott",
    thought: "Scott rides scooters",
    votes: 5,
    image: ""
  }
];

AddPost(post:Post):void{
  this.allPosts.push(post);
}

display:boolean = false;
ToggleDisplay():void{
  this.display = !this.display
}

RemovePost(target:Post):void{
  let index:number = this.allPosts.findIndex((p:Post) => p == target);
  this.allPosts.splice(index,1);
}

GetPostsByNewest():Post[]{
  return this.allPosts.reverse();
}

}
