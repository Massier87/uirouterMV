import {Component, OnInit, Inject} from '@angular/core';


@Component({
  selector: 'folderlist',
  templateUrl: 'folderlist.component.html'
})
export class FolderlistComponent implements OnInit{

  constructor(){}

  ngOnInit() {
    console.log('FolderList called');
  }
}
