import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as c3 from 'c3';

import { UserService } from './../../../../services';


@Component({
  selector: 'login-activity',
  templateUrl: './login-activity.component.html',
  styleUrls: ['./login-activity.component.scss']
})
export class LoginActivityComponent implements OnInit {    
    user: any = {};
    roles: any = [];

    constructor(private userService: UserService, private route: ActivatedRoute) {


    }

    ngOnInit() {
        var userId = this.route.snapshot.params['userId'];        
        this.getUserDetails(userId);
        this.getRoles(); 

        let chart = c3.generate({
            bindto: '#chart',
            data: {
                xs: {
                    'data1': 'x1'
                },
                columns: [
                    ['x1', 10, 30, 45, 50, 70, 100],
                    ['data1', 30, 200, 100, 400, 150, 250]
                ],
                type:'bar'
                //columns: [
                //    ['visits', 250],
                //    ['login', 100],
                //    ['ok', 50]
                //],
                //type:'bar'
            }
        });
    }

    getRoles() {
        this.roles = this.userService.getRoles();
    }

    getUserDetails(userId) {
        this.user = this.userService.getUser(userId);
    }
}
