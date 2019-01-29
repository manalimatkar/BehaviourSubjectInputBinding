import { Component, OnInit, OnDestroy } from '@angular/core';

import { BehaviorSubject } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  message: any;
  messageBS: BehaviorSubject<any>;

  constructor() {
   
  }

  ngOnInit() {
    this.message = {
      text: 'Hello!!',
      author: "Tony"
    }
    this.messageBS = new BehaviorSubject(this.message)
  }

  updateMessage() {      
    this.message.text = "Howdy!! There, how are you???";
    this.messageBS.next(this.message);
  }

}
