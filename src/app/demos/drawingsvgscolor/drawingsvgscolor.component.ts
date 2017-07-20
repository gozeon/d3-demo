import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-drawingsvgscolor',
  templateUrl: '../../common/common.html',
  styleUrls: ['../../common/common.css']
})
export class DrawingsvgscolorComponent implements OnInit {
  private code: string;

  constructor() { }

  ngOnInit() {
    // Width and height
    const w = 500;
    const h = 100;

    // Data
    const dataset = [5, 10, 15, 20, 25];

    // Create SVG element
    const svg = d3.select('.result')
      .append('svg')
      .attr('width', w)
      .attr('height', h);

    const circles = svg.selectAll('circle')
      .data(dataset)
      .enter()
      .append('circle');

    circles.attr('cx', function (d, i) {
      return (i * 50) + 25;
    })
      .attr('cy', h / 2)
      .attr('r', function (d) {
        return d;
      })
      .attr('fill', 'yellow')
      .attr('stroke', 'orange')
      .attr('stroke-width', function (d) {
        return d / 2;
      });
    this.code = `//Width and height
const w = 500;
const h = 100;

//Data
const dataset = [5, 10, 15, 20, 25];

//Create SVG element
const svg = d3.select('.result')
  .append('svg')
  .attr('width', w)
  .attr('height', h);

const circles = svg.selectAll('circle')
  .data(dataset)
  .enter()
  .append('circle');

circles.attr('cx', function (d, i) {
  return (i * 50) + 25;
})
  .attr('cy', h / 2)
  .attr('r', function (d) {
    return d;
  })
  .attr('fill', 'yellow')
  .attr('stroke', 'orange')
  .attr('stroke-width', function (d) {
    return d / 2;
  });`;
  }

}
