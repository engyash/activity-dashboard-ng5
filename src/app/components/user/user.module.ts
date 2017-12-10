import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { UserComponent, LoginActivityComponent, ModulePermissionComponent } from './';


@NgModule({
  declarations: [
      UserComponent,
      LoginActivityComponent,
      ModulePermissionComponent
  ],
  imports: [
      HttpModule,
      BrowserModule,
      FormsModule
  ],
  providers: [
  ]
})
export class UserModule { }
