import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent], // Components
  imports: [BrowserModule, FormsModule, CommonModule, HttpClientModule], //Modules importes
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
