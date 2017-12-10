import {Routes, RouterModule} from '@angular/router';
import { PermissionsComponent } from './permissions/permissions.component';

import {NgModule} from '@angular/core';

const routes: Routes = [  

    { path: '', component: PermissionsComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
