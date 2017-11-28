import {Component, OnInit, Inject} from '@angular/core';


@Component({
  selector: 'start',
  templateUrl: 'start.component.html'
})
export class StartComponent implements OnInit{

  constructor(){}

  ngOnInit() {
    console.log('Start Page called');
  }
}
