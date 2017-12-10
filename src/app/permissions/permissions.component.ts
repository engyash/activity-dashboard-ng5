import { Component, OnInit } from '@angular/core';

import { UserService } from './../service';


@Component({
  selector: 'app-permissions',
  templateUrl: './permissions.component.html',
  styleUrls: ['./permissions.component.scss']
})
export class PermissionsComponent {
    title = 'Training';
    roles: any = [];
    users: any = [];
    selectedRoleId: string = undefined;

    constructor(private userService: UserService) {

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
        console.log('editing user roles');
    }
}
