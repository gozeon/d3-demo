import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-each',
  templateUrl: './each.component.html',
  styleUrls: ['../../common/common.css', './each.component.css']
})
export class EachComponent implements OnInit {
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
      .attr('r', 2.5)
      .attr('fill', 'black');

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
        allCircles.each(freakOut);
      });

    const freakOut = function (d, i) {
      const colors = d3.schemeCategory20;
      const colorIndex = Math.round(Math.random() * 20);
      d3.select(this)
        .transition()
        .delay(i * 25)
        .duration(2000)
        .ease(d3.easeElasticOut)
        .attr('fill', colors[colorIndex])
        .attr('r', 25);
    };

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
  .attr('r', 2.5)
  .attr('fill', 'black');

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
    allCircles.each(freakOut);
  });

const freakOut = function (d, i) {
  const colors = d3.schemeCategory20;
  const colorIndex = Math.round(Math.random() * 20);
  d3.select(this)
    .transition()
    .delay(i * 25)
    .duration(2000)
    .ease(d3.easeElasticOut)
    .attr('fill', colors[colorIndex])
    .attr('r', 25);
};`;
  }

}
