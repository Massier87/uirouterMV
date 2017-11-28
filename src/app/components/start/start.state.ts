import { Ng2StateDeclaration, Transition } from '@uirouter/angular';
import {StartComponent} from "./start.component";


export const StartState: Ng2StateDeclaration = {
  name: 'start',
  url: '/start',
  //parent: 'struttura_upload',
  views: {
    'start' : {component: StartComponent}
  },
  data: {},
  resolve: []
};
