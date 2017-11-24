import {FolderListComponent} from "./folder-list.component";
import {MessageListComponent} from "./message-list.component";
import {MessageComponent} from "./message.component";
import {Ng2StateDeclaration} from "@uirouter/angular";

/*export var mymessagesstate = [
  {
    name: 'folderlist',
    component: FolderListComponent
  },
  {
    name: 'folderlist.messagelist',
    component: MessageListComponent
  },
  {
    name: 'folderlist.messagelist.message',
    component: MessageComponent
  }
];
*/

export const folderListState = { name:'folderList', url: '/folderlist', component: FolderListComponent };

export const messageListState = { name:'messageList', url: 'messagelist', component: MessageListComponent };

export const messageState = { name:'message', url: 'message', component:MessageComponent};

