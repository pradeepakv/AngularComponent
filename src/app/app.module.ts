import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { Test1Component } from './test1/test1.component';
import { ParentModule1Module } from './parent-module1/parent-module1.module';
import { ParentModule2Module } from './parent-module2/parent-module2.module';

import { DataService } from './services/data.service';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    Test1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,ParentModule1Module,ParentModule2Module
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
