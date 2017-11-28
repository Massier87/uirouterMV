import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UIRouterModule, UIView } from '@uirouter/angular';

import { AppComponent } from './app.component';
import {AppState} from "./app.states";
import {MessageListUIState} from "./components/messagelist/messagelist.state";
import {MessageState} from "./components/message/message.state";
import {FolderListState} from "./components/folderlist/folderlist.state";
import {FolderlistComponent} from "./components/folderlist/folderlist.component";
import {MessagelistComponent} from "./components/messagelist/messagelist.component";
import {MessageComponent} from "./components/message/message.component";
import {StartState} from "./components/start/start.state";
import {StartComponent} from "./components/start/start.component";

@NgModule({
  declarations: [
    AppComponent,
    FolderlistComponent,
    MessagelistComponent,
    MessageComponent,
    StartComponent
  ],
  imports: [
    //UIRouterModule.forRoot({mymessagesstate}),
    BrowserModule,
    UIRouterModule.forRoot({states: [ AppState, MessageListUIState, MessageState, FolderListState, StartState], useHash: true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
