import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-demodetail',
  templateUrl: './demodetail.component.html',
  styleUrls: ['./demodetail.component.css']
})
export class DemodetailComponent implements OnInit {
  private id: number;
  constructor(private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.route.params.subscribe(parms => {
      this.id = +parms['id'];
    });
  }

}
