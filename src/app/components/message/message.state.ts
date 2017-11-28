import { Ng2StateDeclaration, Transition } from '@uirouter/angular';
import {MessageComponent} from "./message.component";


export const MessageState: Ng2StateDeclaration = {
  name: 'messageui',
  url: '/messageui',
  //parent: 'struttura_upload',
  views: {
    'messageui' : {component: MessageComponent}
  },
  data: {},
  resolve: []
};
