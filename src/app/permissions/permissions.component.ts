import { Component, OnInit } from '@angular/core';

import { UserService } from './../service';


@Component({
  selector: 'app-permissions',
  templateUrl: './permissions.component.html',
  styleUrls: ['./permissions.component.scss']
})
export class PermissionsComponent {
    users: any = [];

    constructor(private userService: UserService) {
        this.getUsers();   
    }

    getUsers() {
        this.users = this.userService.getUsers();
        console.log('this.users', this.users);
    }

}
