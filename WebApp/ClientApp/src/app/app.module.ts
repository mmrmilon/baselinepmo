import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BacklogsComponent } from './backlogs/backlogs.component';
import { BacklogsFormComponent } from './backlogs/backlogs-form/backlogs-form.component';

@NgModule({
  declarations: [
    AppComponent,
    BacklogsComponent,
    BacklogsFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
