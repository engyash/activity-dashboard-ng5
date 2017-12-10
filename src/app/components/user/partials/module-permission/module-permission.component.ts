import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { UserService } from './../../../../services';


@Component({
  selector: 'module-permission',
  templateUrl: './module-permission.component.html',
  styleUrls: ['./module-permission.component.scss']
})
export class ModulePermissionComponent implements OnInit {    
    user: any = {};
    roles: any = [];

    constructor(private userService: UserService, private route: ActivatedRoute) {


    }

    ngOnInit() {
        var userId = this.route.snapshot.params['userId'];
        console.log('userId',userId);
        this.getUserDetails(userId);
        this.getRoles();   
    }

    getRoles() {
        this.roles = this.userService.getRoles();
    }

    getUserDetails(userId) {
        this.user = this.userService.getUser(userId);
    }
}
