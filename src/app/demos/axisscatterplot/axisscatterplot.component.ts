import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-axisscatterplot',
  templateUrl: '../../common/common.html',
  styleUrls: ['../../common/common.css']
})
export class AxisscatterplotComponent implements OnInit {
  private code: string;

  constructor() { }

  ngOnInit() {
    // Width and height
    const w = 500;
    const h = 300;
    const padding = 30;

    // Dynamic, random dataset
    const dataset = [];					// Initialize empty array
    const numDataPoints = 50;				// Number of dummy data points to create
    const xRange = Math.random() * 1000;	// Max range of new x values
    const yRange = Math.random() * 1000;	// Max range of new y values
    for (let i = 0; i < numDataPoints; i++) {					// Loop numDataPoints times
      const newNumber1 = Math.floor(Math.random() * xRange);	// New random integer
      const newNumber2 = Math.floor(Math.random() * yRange);	// New random integer
      dataset.push([newNumber1, newNumber2]);					// Add new number to array
    }

    // Create scale functions
    const xScale = d3.scaleLinear()
      .domain([0, d3.max(dataset, function (d) { return d[0]; })])
      .range([padding, w - padding * 2]);

    const yScale = d3.scaleLinear()
      .domain([0, d3.max(dataset, function (d) { return d[1]; })])
      .range([h - padding, padding]);

    const aScale = d3.scaleSqrt()
      .domain([0, d3.max(dataset, function (d) { return d[1]; })])
      .range([0, 10]);

    // const formatAsPercentage = d3.format(",.1%");
    // Define X axis
    const xAxis = d3.axisBottom()
      .scale(xScale)
      .ticks(5);
      // .tickFormat(formatAsPercentage);

    // Define Y axis
    const yAxis = d3.axisLeft()
      .scale(yScale)
      .ticks(5);
      // .tickFormat(formatAsPercentage);

    // Create SVG element
    const svg = d3.select('.result')
      .append('svg')
      .attr('width', w)
      .attr('height', h);

    // Create circles
    svg.selectAll('circle')
      .data(dataset)
      .enter()
      .append('circle')
      .attr('cx', function (d) {
        return xScale(d[0]);
      })
      .attr('cy', function (d) {
        return yScale(d[1]);
      })
      .attr('r', function (d) {
        return aScale(d[1]);
      });

    // Create X axis
    svg.append('g')
      .attr('class', 'axis')
      .attr('transform', 'translate(0,' + (h - padding) + ')')
      .call(xAxis);

    // Create Y axis
    svg.append('g')
      .attr('class', 'axis')
      .attr('transform', 'translate(' + padding + ',0)')
      .call(yAxis);
    this.code = `// Width and height
const w = 500;
const h = 300;
const padding = 30;

// Dynamic, random dataset
const dataset = [];					// Initialize empty array
const numDataPoints = 50;				// Number of dummy data points to create
const xRange = Math.random() * 1000;	// Max range of new x values
const yRange = Math.random() * 1000;	// Max range of new y values
for (let i = 0; i < numDataPoints; i++) {					// Loop numDataPoints times
  const newNumber1 = Math.floor(Math.random() * xRange);	// New random integer
  const newNumber2 = Math.floor(Math.random() * yRange);	// New random integer
  dataset.push([newNumber1, newNumber2]);					// Add new number to array
}

// Create scale functions
const xScale = d3.scaleLinear()
  .domain([0, d3.max(dataset, function (d) { return d[0]; })])
  .range([padding, w - padding * 2]);

const yScale = d3.scaleLinear()
  .domain([0, d3.max(dataset, function (d) { return d[1]; })])
  .range([h - padding, padding]);

const aScale = d3.scaleSqrt()
  .domain([0, d3.max(dataset, function (d) { return d[1]; })])
  .range([0, 10]);

// const formatAsPercentage = d3.format(",.1%");

// Define X axis
const xAxis = d3.axisBottom()
  .scale(xScale)
  .ticks(5);
  // .tickFormat(formatAsPercentage);

// Define Y axis
const yAxis = d3.axisLeft()
  .scale(yScale)
  .ticks(5);
  // .tickFormat(formatAsPercentage);

// Create SVG element
const svg = d3.select('.result')
  .append('svg')
  .attr('width', w)
  .attr('height', h);

// Create circles
svg.selectAll('circle')
  .data(dataset)
  .enter()
  .append('circle')
  .attr('cx', function (d) {
    return xScale(d[0]);
  })
  .attr('cy', function (d) {
    return yScale(d[1]);
  })
  .attr('r', function (d) {
    return aScale(d[1]);
  });

// Create X axis
svg.append('g')
  .attr('class', 'axis')
  .attr('transform', 'translate(0,' + (h - padding) + ')')
  .call(xAxis);

// Create Y axis
svg.append('g')
  .attr('class', 'axis')
  .attr('transform', 'translate(' + padding + ',0)')
  .call(yAxis);`;
  }

}
