import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UIRouterModule, UIView } from '@uirouter/angular';

import { AppComponent } from './app.component';
import {WelcomeComponent} from "./welcome.component";

import {aboutState, APP_STATES, helloState} from "./app.states";
import {FolderListComponent} from "./mymessages/folder-list.component";
import {MessageListComponent} from "./mymessages/message-list.component";
import {MessageComponent} from "./mymessages/message.component";

import {HelloComponent} from "./Test/hello.component";
import {AboutComponent} from "./Test/about.component";
import {folderListState, messageListState, messageState} from "./mymessages/mymessages.state";


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    FolderListComponent,
    MessageListComponent,
    MessageComponent,
    AboutComponent,
    HelloComponent
  ],
  imports: [
    //UIRouterModule.forRoot({mymessagesstate}),
    BrowserModule,
    UIRouterModule.forRoot({states: [ helloState, aboutState, messageState, messageListState, folderListState ], useHash: true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
