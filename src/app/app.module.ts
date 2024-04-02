import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { StudentsPageComponent } from './students-page/students-page.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ReactiveFormsComponent } from './components/reactive-forms/reactive-forms.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    StudentsPageComponent,
    SidenavComponent,
    ReactiveFormsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    ReactiveFormsComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
