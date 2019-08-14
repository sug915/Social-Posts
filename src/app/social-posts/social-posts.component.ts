import { Component, OnInit } from '@angular/core';
import { Post } from "../interfaces/post";

@Component({
  selector: 'social-posts',
  templateUrl: './social-posts.component.html',
  styleUrls: ['./social-posts.component.css']
})
export class SocialPostsComponent implements OnInit {

  showForm: boolean = false;


  posts: Post[] = [
    {
      title: "Grand Circus",
      thought: "Am I the only clown here"
    },

    {
      title: "People Mover",
      thought: "I'm going in circles"
    },

    {
      title: "Young Thug",
      thought: "So Much Fun out 8/16"
    },
    {
      title: "Sleep",
      thought: "what is it"
    }
  ]

  constructor() { }


  deletePost(index: number): void{
    this.posts.splice(index, 1);


  }

  onSubmit(individualPost): void {
    this.posts.unshift(individualPost);
    this.toggleForm();
  }

  toggleForm(): void {
    this.showForm = !this.showForm;
  }

  ngOnInit() {
  }

}



