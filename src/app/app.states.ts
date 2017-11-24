import {WelcomeComponent} from "./welcome.component";
import {AppComponent} from "./app.component";
import {MessageComponent} from "./mymessages/message.component";
import {folderListState, messageListState, messageState} from "./mymessages/mymessages.state";
import {AboutComponent} from "./Test/about.component";
import {HelloComponent} from "./Test/hello.component";
//import {mymessagesstate} from "./mymessages/mymessages.state";

export const appState = {
  name: 'app',
  redirectTo: 'welcome',
  component: AppComponent,
};

export const welcomeState = {
  parent: 'app',
  name: 'welcome',
  url: '/welcome',
  component: WelcomeComponent,
};

export const mymessagesFutureState = {
  name: 'mymessages.**',
  url: '/mymessages',
  loadChildren: './mymessages/mymessages.module#MymessagesModule'
};

export const mymessagesState = {
  parent: 'message',
  name: 'message',
  url: '/message',
  component: MessageComponent,
};

export const helloState = { name: 'hello', url: '/hello',  component: HelloComponent };

export const aboutState = { name: 'about', url: '/about',  component: AboutComponent };


export const APP_STATES = [
  //appState,
  //welcomeState,
  //mymessagesstate
  //homeState,
  //loginState,
  //contactsFutureState,
  //prefsFutureState,
  //mymessagesFutureState,
  folderListState,
  messageListState,
  messageState
];
