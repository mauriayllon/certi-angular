import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {User1Component} from "./components/user1/user1.component";
import {UserComponent} from "./components/user/user.component";
import {User2Component} from "./components/user2/user2.component";
import {UserRoutingModule} from "./user-routing.module";

@NgModule({
  declarations: [
      UserComponent,
      User1Component,
      User2Component
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
