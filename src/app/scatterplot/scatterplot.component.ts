import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-scatterplot',
  templateUrl: '../common/common.html',
  styleUrls: ['../common/common.css'],
})
export class ScatterplotComponent implements OnInit {
  private code: string;

  constructor() { }

  ngOnInit() {
    // Width and height
    const w = 500;
    const h = 100;

    const dataset = [
      [5, 20], [480, 90], [250, 50], [100, 33], [330, 95],
      [410, 12], [475, 44], [25, 67], [85, 21], [220, 88]
    ];

    // Create SVG element
    const svg = d3.select('.result')
      .append('svg')
      .attr('width', w)
      .attr('height', h);

    svg.selectAll('circle')
      .data(dataset)
      .enter()
      .append('circle')
      .attr('cx', function (d) {
        return d[0];
      })
      .attr('cy', function (d) {
        return d[1];
      })
      .attr('r', function (d) {
        return Math.sqrt(h - d[1]);
      });

    svg.selectAll('text')
      .data(dataset)
      .enter()
      .append('text')
      .text(function (d) {
        return d[0] + ',' + d[1];
      })
      .attr('x', function (d) {
        return d[0];
      })
      .attr('y', function (d) {
        return d[1];
      })
      .attr('font-family', 'sans-serif')
      .attr('font-size', '11px')
      .attr('fill', 'rgba(122, 122, 122, .8)');

    this.code = `// Width and height
const w = 500;
const h = 100;

const dataset = [
  [5, 20], [480, 90], [250, 50], [100, 33], [330, 95],
  [410, 12], [475, 44], [25, 67], [85, 21], [220, 88]
];

// Create SVG element
const svg = d3.select('.result')
  .append('svg')
  .attr('width', w)
  .attr('height', h);

svg.selectAll('circle')
  .data(dataset)
  .enter()
  .append('circle')
  .attr('cx', function (d) {
    return d[0];
  })
  .attr('cy', function (d) {
    return d[1];
  })
  .attr('r', function (d) {
    return Math.sqrt(h - d[1]);
  });

svg.selectAll('text')
  .data(dataset)
  .enter()
  .append('text')
  .text(function (d) {
    return d[0] + ',' + d[1];
  })
  .attr('x', function (d) {
    return d[0];
  })
  .attr('y', function (d) {
    return d[1];
  })
  .attr('font-family', 'sans-serif')
  .attr('font-size', '11px')
  .attr('fill', 'rgba(122, 122, 122, .8)');`;
  }

}
