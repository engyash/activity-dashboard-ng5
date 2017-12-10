import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from './../../services';


@Component({
  selector: 'permissions',
  templateUrl: './permissions.component.html',
  styleUrls: ['./permissions.component.scss']
})
export class PermissionsComponent {
    title = 'Training';
    roles: any = [];
    users: any = [];
    selectedRoleId: string = undefined;

    constructor(private userService: UserService, private router: Router) {

        this.getRoles();
    }

    getRoles() {
        this.roles = this.userService.getRoles();
        
        // get all users by default
        this.getUsers();   
    }

    getUsers(roleId = undefined) {
        this.users = this.userService.getUsers(roleId);
    }

    selectRole(roleId) {
        this.selectedRoleId = roleId;
        this.getUsers(roleId);
    }

    editUserRoles(userId) {
        console.log('editing user roles', userId);
        this.router.navigate(['/user',userId]);
    }
}
