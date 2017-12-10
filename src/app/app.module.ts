
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PermissionsComponent } from './permissions/permissions.component';
import { UserService } from './service';

@NgModule({
  declarations: [
    AppComponent,
    PermissionsComponent
  ],
  imports: [
      AppRoutingModule,
      HttpModule,
      BrowserModule,
      FormsModule
  ],
  providers: [
      UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
