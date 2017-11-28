import {Component, OnInit, Inject} from '@angular/core';


@Component({
  selector: 'messagelist',
  templateUrl: 'messagelist.component.html'
})
export class MessagelistComponent implements OnInit{

  constructor(){}

  ngOnInit() {
    console.log('Message List called');
  }
}
