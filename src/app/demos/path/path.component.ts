import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-path',
  templateUrl: '../../common/common.html',
  styleUrls: ['../../common/common.css']
})
export class PathComponent implements OnInit {
  private code: string;

  constructor() { }

  ngOnInit() {
    const w = 500;
    const h = 300;
    const path = d3.geoPath()
      .projection(d3.geoAlbersUsa());

    const svg = d3.select('.result')
      .append('svg')
      .attr('width', w)
      .attr('height', h);

    d3.json('assets/us-states.json', function (json) {
      svg.selectAll('path')
        .data(json.features)
        .enter()
        .append('path')
        .attr('d', path);
    });

    this.code = `const w = 500;
const h = 300;
const path = d3.geoPath()
  .projection(d3.geoAlbersUsa());

const svg = d3.select('.result')
  .append('svg')
  .attr('width', w)
  .attr('height', h);

d3.json('assets/us-states.json', function (json) {
  svg.selectAll('path')
    .data(json.features)
    .enter()
    .append('path')
    .attr('d', path);
});`;
  }

}
