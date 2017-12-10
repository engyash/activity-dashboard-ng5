import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { UserService } from './../../services';


@Component({
  selector: 'user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {    
    user: any = {};
    roles: any = [];

    constructor(private userService: UserService, private route: ActivatedRoute) {


    }

    ngOnInit() {
        var userId=this.route.snapshot.params['userId'];

        this.getUserDetails(userId);
        this.getRoles();   
    }

    getRoles() {
        this.roles = this.userService.getRoles();
    }

    getUserDetails(userId) {
        this.user = this.userService.getUser(userId);
    }



    editRole(userId) {
        console.log('editing user role', userId);
    }
}
