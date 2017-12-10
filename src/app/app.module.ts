import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { UserModule } from './components/user/user.module';
import { PermissionsComponent } from './components/permissions/permissions.component';
import { UserService } from './services';


@NgModule({
  declarations: [
    AppComponent,
    PermissionsComponent
  ],
  imports: [
      AppRoutingModule,
      HttpModule,
      BrowserModule,
      FormsModule,
      UserModule
  ],
  providers: [
      UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
