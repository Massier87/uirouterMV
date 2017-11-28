import { Ng2StateDeclaration, Transition } from '@uirouter/angular';
import {FolderlistComponent} from "./folderlist.component";


export const FolderListState: Ng2StateDeclaration = {
  name: 'folderlist',
  url: '/folderlist',
  // parent: 'app',
  views: {
    'folderlist' : {component: FolderlistComponent}
  },
  data: {},
  resolve: []
};
