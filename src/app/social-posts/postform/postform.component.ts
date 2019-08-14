import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from "@angular/forms";

@Component({
  selector: 'postform',
  templateUrl: './postform.component.html',
  styleUrls: ['./postform.component.css']
})
export class PostformComponent implements OnInit {
  @Output() submitted = new EventEmitter<any>();

  constructor() { }

  addPost(postForm: NgForm): void {
    this.submitted.emit({
      title: postForm.value.title,
      thought: postForm.value.thought
    });
  }

  ngOnInit() {
  }

}
