import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-mapmeractor',
  templateUrl: '../../common/common.html',
  styleUrls: ['../../common/common.css']
})
export class MapmeractorComponent implements OnInit {
  private code: string;

  constructor() { }

  ngOnInit() {
    const w = 500;
    const h = 300;

    // https://devdocs.io/d3~4/d3-geo-projection#geoMercator (d3-geo)
    const projection = d3.geoMercator()
      .translate([w / 2, h / 2])
      .scale([w * 0.16]);

    const path = d3.geoPath()
      .projection(projection);

    const svg = d3.select('.result')
      .append('svg')
      .attr('width', w)
      .attr('height', h);

    d3.json('assets/oceans.json', function (json) {

      svg.selectAll('path')
        .data(json.features)
        .enter()
        .append('path')
        .attr('d', path)
        .style('fill', 'steelblue');
    });
    this.code = `const w = 500;
const h = 300;

// https://devdocs.io/d3~4/d3-geo-projection#geoMercator (d3-geo)
const projection = d3.geoMercator()
  .translate([w / 2, h / 2])
  .scale([w * 0.16]);

const path = d3.geoPath()
  .projection(projection);

const svg = d3.select('.result')
  .append('svg')
  .attr('width', w)
  .attr('height', h);

d3.json('assets/oceans.json', function (json) {

  svg.selectAll('path')
    .data(json.features)
    .enter()
    .append('path')
    .attr('d', path)
    .style('fill', 'steelblue');
});`;
  }

}
