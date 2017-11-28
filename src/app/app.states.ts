import { Ng2StateDeclaration, Transition } from '@uirouter/angular';
import {FolderlistComponent} from "./components/folderlist/folderlist.component";
import {MessagelistComponent} from "./components/messagelist/messagelist.component";
import {MessageComponent} from "./components/message/message.component";
import {AppComponent} from "./app.component";
import {StartComponent} from "./components/start/start.component";



export const AppState: Ng2StateDeclaration = {
  name: 'app',
  url: '/app',
  //parent: 'app',
  views: {
    'app' : {component: AppComponent},
    'start' : {component: StartComponent},
    'folderlist' : {component: FolderlistComponent},
    'messagelistui' : {component: MessagelistComponent},
    'messageui' : {component: MessageComponent}
  },
  data: {},
  resolve: []
};

/*
export const AppState: Ng2StateDeclaration[] = [
  {
    name: 'app',
    url: '/app',
    //parent: 'app',
    views: {
      'app': {component: AppComponent},
      'start': {component: StartComponent},
      'folderlist': {component: FolderlistComponent},
      'messagelistui': {component: MessagelistComponent},
      'messageui': {component: MessageComponent}
    },
    data: {},
    resolve: []
  },
  {
    name: 'app',
    redirectTo: 'app'
  }
];*/
