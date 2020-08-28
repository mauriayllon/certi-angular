import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {FormsModule} from "@angular/forms";
import { AdminComponent } from './components/admin/admin.component';
import { HomeComponent } from './components/home/home.component';
import { Home2Component } from './components/home2/home2.component';
import { AboutComponent } from './components/about/about.component';
import {Home1Component} from "./components/home1/home1.component";
import {AppRouting} from "./app.routing";
import {UserModule} from "./modules/user/user.module";


@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    HomeComponent,
    Home1Component,
    Home2Component,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule,
    UserModule,
    AppRouting
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }