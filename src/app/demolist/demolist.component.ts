import { Component, OnInit } from '@angular/core';
import * as data from '../demos/demo.json';
import { Demo } from '../demo';
import { Router } from '@angular/router';

@Component({
  selector: 'app-demolist',
  templateUrl: './demolist.component.html',
  styleUrls: ['./demolist.component.css']
})
export class DemolistComponent implements OnInit {
  private demos = (<any>data).demos;
  private selectedDemo: Demo;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onSelect(demo: Demo): void {
    this.selectedDemo = demo;
  }

  gotoDetail(): void {
    this.router.navigate(['/demodetail', this.selectedDemo.id]);
  }
}
