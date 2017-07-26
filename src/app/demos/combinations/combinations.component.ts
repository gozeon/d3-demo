import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-combinations',
  templateUrl: './combinations.component.html',
  styleUrls: ['../../common/common.css', './combinations.component.css']
})
export class CombinationsComponent implements OnInit {
  private code: string;

  constructor() { }

  ngOnInit() {
    const w = 500;
    const h = 300;
    const padding = 40;
    const dataset = [];
    const numDataPoints = 200;
    const xRange = 1000;
    const yRange = 1000;
    for (let i = 0; i < numDataPoints; i++) {
      const newNumber1 = Math.floor(Math.random() * xRange);
      const newNumber2 = Math.floor(Math.random() * yRange);
      dataset.push([newNumber1, newNumber2]);
    }

    const xScale = d3.scaleLinear()
      .domain([0, xRange])
      .range([padding, w - padding / 2]);

    const yScale = d3.scaleLinear()
      .domain([0, yRange])
      .range([h - padding, padding / 2]);

    const xAxis = d3.axisBottom()
      .scale(xScale)
      .ticks(5);

    const yAxis = d3.axisLeft()
      .scale(yScale)
      .ticks(5);

    const svg = d3.select('.result')
      .append('svg')
      .attr('width', w)
      .attr('height', h);

    const allCircles = svg.selectAll('circle')
      .data(dataset)
      .enter()
      .append('circle')
      .attr('cx', function (d) {
        return xScale(d[0]);
      })
      .attr('cy', function (d) {
        return yScale(d[1]);
      })
      .attr('r', 2.5);

    svg.append('g')
      .attr('class', 'axis')
      .attr('transform', 'translate(0,' + (h - padding) + ')')
      .call(xAxis);

    svg.append('g')
      .attr('class', 'axis')
      .attr('transform', 'translate(' + padding + ',0)')
      .call(yAxis);

    d3.selectAll('input')
      .on('click', function () {
        const view = d3.select(this).node().value;
        allCircles.attr('fill', 'black');
        const midpoint = 500;
        const colors = d3.schemeCategory10;
        switch (view) {
          case 'center':
            allCircles.filter(function (d) {
              return Math.abs(midpoint - d[0]) < 300 && Math.abs(midpoint - d[1]) < 300;
            })
              .attr('fill', colors[1]);
            break;
          case 'edges':
            allCircles.filter(function (d) {
              return Math.abs(midpoint - d[0]) > 300 || Math.abs(midpoint - d[1]) > 300;
            })
              .attr('fill', colors[3]);
            break;
          case 'quadrants':
            allCircles.filter(function (d) {
              return d[0] <= midpoint && d[1] >= midpoint;
            })
              .attr('fill', colors[0]);

            allCircles.filter(function (d) {
              return d[0] > midpoint && d[1] >= midpoint;
            })
              .attr('fill', colors[1]);
            allCircles.filter(function (d) {
              return d[0] > midpoint && d[1] < midpoint;
            })
              .attr('fill', colors[2]);
            allCircles.filter(function (d) {
              return d[0] <= midpoint && d[1] < midpoint;
            })
              .attr('fill', colors[3]);
            break;
          case 'none':
          default:
        }
      });
      this.code = `const w = 500;
const h = 300;
const padding = 40;
const dataset = [];
const numDataPoints = 200;
const xRange = 1000;
const yRange = 1000;
for (let i = 0; i < numDataPoints; i++) {
  const newNumber1 = Math.floor(Math.random() * xRange);
  const newNumber2 = Math.floor(Math.random() * yRange);
  dataset.push([newNumber1, newNumber2]);
}

const xScale = d3.scaleLinear()
  .domain([0, xRange])
  .range([padding, w - padding / 2]);

const yScale = d3.scaleLinear()
  .domain([0, yRange])
  .range([h - padding, padding / 2]);

const xAxis = d3.axisBottom()
  .scale(xScale)
  .ticks(5);

const yAxis = d3.axisLeft()
  .scale(yScale)
  .ticks(5);

const svg = d3.select('.result')
  .append('svg')
  .attr('width', w)
  .attr('height', h);

const allCircles = svg.selectAll('circle')
  .data(dataset)
  .enter()
  .append('circle')
  .attr('cx', function (d) {
    return xScale(d[0]);
  })
  .attr('cy', function (d) {
    return yScale(d[1]);
  })
  .attr('r', 2.5);

svg.append('g')
  .attr('class', 'axis')
  .attr('transform', 'translate(0,' + (h - padding) + ')')
  .call(xAxis);

svg.append('g')
  .attr('class', 'axis')
  .attr('transform', 'translate(' + padding + ',0)')
  .call(yAxis);

d3.selectAll('input')
  .on('click', function () {
    const view = d3.select(this).node().value;
    allCircles.attr('fill', 'black');
    const midpoint = 500;
    const colors = d3.schemeCategory10;
    switch (view) {
      case 'center':
        allCircles.filter(function (d) {
          return Math.abs(midpoint - d[0]) < 300 && Math.abs(midpoint - d[1]) < 300;
        })
          .attr('fill', colors[1]);
        break;
      case 'edges':
        allCircles.filter(function (d) {
          return Math.abs(midpoint - d[0]) > 300 || Math.abs(midpoint - d[1]) > 300;
        })
          .attr('fill', colors[3]);
        break;
      case 'quadrants':
        allCircles.filter(function (d) {
          return d[0] <= midpoint && d[1] >= midpoint;
        })
          .attr('fill', colors[0]);

        allCircles.filter(function (d) {
          return d[0] > midpoint && d[1] >= midpoint;
        })
          .attr('fill', colors[1]);
        allCircles.filter(function (d) {
          return d[0] > midpoint && d[1] < midpoint;
        })
          .attr('fill', colors[2]);
        allCircles.filter(function (d) {
          return d[0] <= midpoint && d[1] < midpoint;
        })
          .attr('fill', colors[3]);
        break;
      case 'none':
        break;
      default:
    }
  });`;
  }

}
