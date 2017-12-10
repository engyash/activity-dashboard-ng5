import { Component, OnInit } from '@angular/core';
import * as c3 from 'c3';


@Component({
  selector: 'login-activity',
  templateUrl: './login-activity.component.html',
  styleUrls: ['./login-activity.component.scss']
})
export class LoginActivityComponent implements OnInit {    

    constructor() { }

    ngOnInit() {
        this.loadChart();
    }

    loadChart() {
        var myData: any = {};
        myData.x = 'x';
        myData.xFormat = "%Y-%m-%d";
        myData.type = 'bar';
        var myX: any = ["2017-11-20", "2017-11-21", "2017-11-22", "2017-11-23", "2017-11-24"];
        var myY: any = [2, 4, 1, 7, 3];
        myX.splice(0, 0, 'x');
        myY.splice(0, 0, 'Visits');
        myData.columns = [];
        myData.columns.push(myX);
        myData.columns.push(myY);
        var chart = c3.generate({
            bindto: '#activity-chart',
            data: myData,
            bar: {
                width: {
                    ratio: 0.5 // this makes bar width 50% of length between ticks
                }

            },
            axis: {
                x: {
                    type: 'timeseries',
                    tick: {
                        format: "%Y-%m-%d"
                    }
                },

            }
        });
    }
}
