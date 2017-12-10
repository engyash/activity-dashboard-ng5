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

    constructor(private route: ActivatedRoute,
                private userService: UserService) { }

    ngOnInit() {
        var userId=this.route.snapshot.params['userId'];
        this.getUserDetails(userId);
    }

    getUserDetails(userId) {
        this.user = this.userService.getUser(userId);
    }
}
