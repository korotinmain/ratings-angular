import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormcardComponent } from './rating-app/components/formcard/formcard.component';
import { ListComponent } from './rating-app/components/list/list.component';
import { ToolbarComponent } from './rating-app/components/toolbar/toolbar.component';

@NgModule({
  declarations: [
    AppComponent,
    FormcardComponent,
    ListComponent,
    ToolbarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
