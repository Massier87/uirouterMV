import { Ng2StateDeclaration, Transition } from '@uirouter/angular';
import {MessagelistComponent} from "./messagelist.component";

export const MessageListUIState: Ng2StateDeclaration = {
  name: 'messagelistui',
  url: '/messagelistui',
  //parent: 'struttura_upload',
  views: {
    'messagelistui' : {component: MessagelistComponent}
  },
  data: {},
  resolve: []
};
