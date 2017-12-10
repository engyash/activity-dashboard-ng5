
import {Routes, RouterModule} from '@angular/router';
import { NgModule } from '@angular/core';

import { PermissionsComponent } from './components/permissions/permissions.component';
import { UserComponent } from './components/user/user.component';

const routes: Routes = [  

    { path: '', component: PermissionsComponent },
    { path: 'user/:userId', component: UserComponent }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
