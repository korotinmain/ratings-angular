import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ReactiveFormsModule} from '@angular/forms';

import {RatingAppComponent} from './containers/rating-app/rating-app.component';

import {ListComponent} from './components/list/list.component';
import {ToolbarComponent} from './components/toolbar/toolbar.component';
import {FormcardComponent} from './components/formcard/formcard.component';
import {MatButtonModule, MatCardModule, MatInputModule, MatSelectModule, MatTableModule, MatToolbarModule} from '@angular/material';
import {HttpModule, JsonpModule} from '@angular/http';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatSelectModule,
    MatCardModule,
    JsonpModule,
    MatToolbarModule,
    MatInputModule,
    MatTableModule
  ],
  exports: [RatingAppComponent],
  declarations: [
    FormcardComponent,
    RatingAppComponent,
    ToolbarComponent,
    ListComponent
  ],
  providers: [],
})
export class RatingAppModule {
}
