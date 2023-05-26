import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { ParentCompoComponent } from './parent-compo/parent-compo.component';

@NgModule({
  declarations: [
    AppComponent,
    DynamicFormComponent,
    ParentCompoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
