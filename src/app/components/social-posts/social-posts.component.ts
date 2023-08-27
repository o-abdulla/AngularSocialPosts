import { Component } from '@angular/core';
import { Post } from 'src/app/models/post';

@Component({
  selector: 'app-social-posts',
  templateUrl: './social-posts.component.html',
  styleUrls: ['./social-posts.component.css']
})
export class SocialPostsComponent {
posts:Post[] = [
  {
    title: "Grand Circus",
    thought: "Grand Circus is cool"
  },
  {
    title: "Ritual",
    thought: "Ritual is a well developed app"
  },
  {
    title: "Scott",
    thought: "Scott rides scooters"
  }
];

AddPost(post:Post):void{
  this.posts.push(post);
}

display:boolean = false;
ToggleDisplay():void{
  this.display = !this.display
}


}
