import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ThoughtListComponent } from './thought-list/thought-list.component';
import { ThoughtDetailComponent } from './thought-detail/thought-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ThoughtListComponent,
    ThoughtDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
