import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ThoughtListComponent } from './thought-list/thought-list.component';
import { ThoughtDetailComponent } from './thought-detail/thought-detail.component';
import { CreateThoughtComponent } from './create-thought/create-thought.component';
import { EditThoughtComponent } from './edit-thought/edit-thought.component';

@NgModule({
  declarations: [
    AppComponent,
    ThoughtListComponent,
    ThoughtDetailComponent,
    CreateThoughtComponent,
    EditThoughtComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
