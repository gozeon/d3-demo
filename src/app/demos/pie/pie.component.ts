import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-pie',
  templateUrl: '../../common/common.html',
  styleUrls: ['../../common/common.css']
})
export class PieComponent implements OnInit {
  private code: string;

  constructor() { }

  ngOnInit() {
    const w = 300;
    const h = 300;
    const dataset = [5, 10, 20, 45, 6, 25];
    const outerRadius = w / 2;
    const innerRadius = 0;
    const arc = d3.arc()
      .innerRadius(innerRadius)
      .outerRadius(outerRadius);
    const pie = d3.pie();
    const color = d3.scaleOrdinal(d3.schemeCategory10);
    const svg = d3.select('.result')
      .append('svg')
      .attr('width', w)
      .attr('height', h);

    const arcs = svg.selectAll('g.arc')
      .data(pie(dataset))
      .enter()
      .append('g')
      .attr('class', 'arc')
      .attr('transform', 'translate(' + outerRadius + ',' + outerRadius + ')');

    arcs.append('path')
      .attr('fill', function (d, i) {
        return color(i);
      })
      .attr('d', arc);

    arcs.append('text')
      .attr('transform', function (d) {
        return 'translate(' + arc.centroid(d) + ')';
      })
      .attr('text-anchor', 'middle')
      .text(function (d) {
        return d.value;
      });
    this.code = `const w = 300;
const h = 300;
const dataset = [5, 10, 20, 45, 6, 25];
const outerRadius = w / 2;
const innerRadius = 0;
const arc = d3.arc()
  .innerRadius(innerRadius)
  .outerRadius(outerRadius);
const pie = d3.pie();
const color = d3.scaleOrdinal(d3.schemeCategory10);
const svg = d3.select('.result')
  .append('svg')
  .attr('width', w)
  .attr('height', h);

const arcs = svg.selectAll('g.arc')
  .data(pie(dataset))
  .enter()
  .append('g')
  .attr('class', 'arc')
  .attr('transform', 'translate(' + outerRadius + ',' + outerRadius + ')');

arcs.append('path')
  .attr('fill', function (d, i) {
    return color(i);
  })
  .attr('d', arc);

arcs.append('text')
  .attr('transform', function (d) {
    return 'translate(' + arc.centroid(d) + ')';
  })
  .attr('text-anchor', 'middle')
  .text(function (d) {
    return d.value;
  });`;
  }

}
