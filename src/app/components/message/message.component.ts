import {Component, OnInit, Inject} from '@angular/core';


@Component({
  selector: 'messagelist',
  templateUrl: 'message.component.html'
})
export class MessageComponent implements OnInit{

  constructor(){}

  ngOnInit() {
    console.log('Message Detail called');
  }
}
