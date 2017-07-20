import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-makingbarchart',
  templateUrl: '../common/common.html',
  styleUrls: ['../common/common.css']
})
export class MakingbarchartComponent implements OnInit {
  private code: string;

  constructor() { }

  ngOnInit() {
    // Width and height
    const w = 500;
    const h = 100;
    const barPadding = 1;

    const dataset = [5, 10, 13, 19, 21, 25, 22, 18, 15, 13,
      11, 12, 15, 20, 18, 17, 16, 18, 23, 25];

    // Create SVG element
    const svg = d3.select('.result')
      .append('svg')
      .attr('width', w)
      .attr('height', h);

    svg.selectAll('rect')
      .data(dataset)
      .enter()
      .append('rect')
      .attr('x', function (d, i) {
        return i * (w / dataset.length);
      })
      .attr('y', function (d) {
        return h - (d * 4);
      })
      .attr('width', w / dataset.length - barPadding)
      .attr('height', function (d) {
        return d * 4;
      })
      .attr('fill', function (d) {
        return 'rgb(0, 0, ' + Math.round(d * 10) + ')';
      });

    svg.selectAll('text')
      .data(dataset)
      .enter()
      .append('text')
      .text(function (d) {
        return d;
      })
      .attr('text-anchor', 'middle')
      .attr('x', function (d, i) {
        return i * (w / dataset.length) + (w / dataset.length - barPadding) / 2;
      })
      .attr('y', function (d) {
        return h - (d * 4) + 14;
      })
      .attr('font-family', 'sans-serif')
      .attr('font-size', '11px')
      .attr('fill', 'white');

    this.code = `// Width and height
const w = 500;
const h = 100;
const barPadding = 1;

const dataset = [5, 10, 13, 19, 21, 25, 22, 18, 15, 13,
11, 12, 15, 20, 18, 17, 16, 18, 23, 25];

// Create SVG element
const svg = d3.select('.result')
.append('svg')
.attr('width', w)
.attr('height', h);

svg.selectAll('rect')
.data(dataset)
.enter()
.append('rect')
.attr('x', function (d, i) {
  return i * (w / dataset.length);
})
.attr('y', function (d) {
  return h - (d * 4);
})
.attr('width', w / dataset.length - barPadding)
.attr('height', function (d) {
  return d * 4;
})
.attr('fill', function (d) {
  return 'rgb(0, 0, ' + Math.round(d * 10) + ')';
});

svg.selectAll('text')
.data(dataset)
.enter()
.append('text')
.text(function (d) {
  return d;
})
.attr('text-anchor', 'middle')
.attr('x', function (d, i) {
  return i * (w / dataset.length) + (w / dataset.length - barPadding) / 2;
})
.attr('y', function (d) {
  return h - (d * 4) + 14;
})
.attr('font-family', 'sans-serif')
.attr('font-size', '11px')
.attr('fill', 'white');`;
  }

}
