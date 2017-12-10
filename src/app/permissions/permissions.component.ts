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

    constructor(private userService: UserService) {

        this.getRoles();
    }

    getRoles() {
        this.roles = this.userService.getRoles();
        console.log('this.roles', this.roles);

        // get users for default admin role
        this.getUsers(this.roles[0].id);   
    }

    getUsers(roleId) {
        this.users = this.userService.getUsers(roleId);
        console.log('this.users', this.users);
    }

    editUserRoles(userId) {
        console.log('editing user roles');
    }
}
