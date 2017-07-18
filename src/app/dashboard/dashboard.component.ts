import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';
// var data = <any>require('../../assets/demo.json');
import * as data from '../../assets/demo.json';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  demos = (<any>data).demos;
  constructor() {
  }

  ngOnInit() {
    console.log(data);
    // d3.csv("assets/food.csv", function (data) {
    //   console.log(data);
    // });
  }

}
