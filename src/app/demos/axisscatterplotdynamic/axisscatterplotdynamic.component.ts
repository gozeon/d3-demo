import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-axisscatterplotdynamic',
  templateUrl: '../../common/common.html',
  styleUrls: ['../../common/common.css']
})
export class AxisscatterplotdynamicComponent implements OnInit {
  private code: string;

  constructor() { }

  ngOnInit() {
    // Width and height
    const w = 500;
    const h = 300;
    const padding = 30;

    // Dynamic, random dataset
    const dataset = [];											// Initialize empty array
    const numDataPoints = 50;										// Number of dummy data points to create
    const maxRange = Math.random() * 1000;						// Max range of new values
    for (let i = 0; i < numDataPoints; i++) {					// Loop numDataPoints times
      const newNumber1 = Math.floor(Math.random() * maxRange);	// New random integer
      const newNumber2 = Math.floor(Math.random() * maxRange);	// New random integer
      dataset.push([newNumber1, newNumber2]);					// Add new number to array
    }

    // Create scale functions
    const xScale = d3.scaleLinear()
      .domain([0, d3.max(dataset, function (d) { return d[0]; })])
      .range([padding, w - padding * 2]);

    const yScale = d3.scaleLinear()
      .domain([0, d3.max(dataset, function (d) { return d[1]; })])
      .range([h - padding, padding]);

    // Define X axis
    const xAxis = d3.axisBottom()
      .scale(xScale)
      .ticks(5);

    // Define Y axis
    const yAxis = d3.axisLeft()
      .scale(yScale)
      .ticks(5);

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
      .attr('r', 2);

    // Create X axis
    svg.append('g')
      .attr('class', 'x axis')
      .attr('transform', 'translate(0,' + (h - padding) + ')')
      .call(xAxis);

    // Create Y axis
    svg.append('g')
      .attr('class', 'y axis')
      .attr('transform', 'translate(' + padding + ',0)')
      .call(yAxis);
    // On click, update with new data
    d3.select('.result').append('p').text('click me!');
    d3.select('p')
      .on('click', function () {

        // New values for dataset
        const numValues = dataset.length;						 		// Count original length of dataset
        const tdataset = [];  						 				 		// Initialize empty array
        for (let i = 0; i < numValues; i++) {				 		// Loop numValues times
          const newNumber1 = Math.floor(Math.random() * Math.random() * 1000);	// New random integer
          const newNumber2 = Math.floor(Math.random() * Math.random() * 1000);	// New random integer
          tdataset.push([newNumber1, newNumber2]);					// Add new number to array
        }

        // Update scale domains
        xScale.domain([0, d3.max(tdataset, function (d) { return d[0]; })]);
        yScale.domain([0, d3.max(tdataset, function (d) { return d[1]; })]);

        // Update all circles
        svg.selectAll('circle')
          .data(tdataset)
          .transition()
          .duration(1000)
          .attr('cx', function (d) {
            return xScale(d[0]);
          })
          .attr('cy', function (d) {
            return yScale(d[1]);
          });

        // Update X axis
        // svg.select('.x.axis')
        //   .transition()
        //   .duration(1000)
        //   .call(xAxis);

        // Update Y axis
        // svg.select('.y.axis')
        //   .transition()
        //   .duration(1000)
        //   .call(yAxis);
      });
    this.code = `// Width and height
const w = 500;
const h = 300;
const padding = 30;

// Dynamic, random dataset
const dataset = [];											// Initialize empty array
const numDataPoints = 50;										// Number of dummy data points to create
const maxRange = Math.random() * 1000;						// Max range of new values
for (let i = 0; i < numDataPoints; i++) {					// Loop numDataPoints times
  const newNumber1 = Math.floor(Math.random() * maxRange);	// New random integer
  const newNumber2 = Math.floor(Math.random() * maxRange);	// New random integer
  dataset.push([newNumber1, newNumber2]);					// Add new number to array
}

// Create scale functions
const xScale = d3.scaleLinear()
  .domain([0, d3.max(dataset, function (d) { return d[0]; })])
  .range([padding, w - padding * 2]);

const yScale = d3.scaleLinear()
  .domain([0, d3.max(dataset, function (d) { return d[1]; })])
  .range([h - padding, padding]);

// Define X axis
const xAxis = d3.axisBottom()
  .scale(xScale)
  .ticks(5);

// Define Y axis
const yAxis = d3.axisLeft()
  .scale(yScale)
  .ticks(5);

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
  .attr('r', 2);

// Create X axis
svg.append('g')
  .attr('class', 'x axis')
  .attr('transform', 'translate(0,' + (h - padding) + ')')
  .call(xAxis);

// Create Y axis
svg.append('g')
  .attr('class', 'y axis')
  .attr('transform', 'translate(' + padding + ',0)')
  .call(yAxis);
// On click, update with new data
d3.select('.result').append('p').text('click me!');
d3.select('p')
  .on('click', function () {

    // New values for dataset
    const numValues = dataset.length;						 		// Count original length of dataset
    const tdataset = [];  						 				 		// Initialize empty array
    for (let i = 0; i < numValues; i++) {				 		// Loop numValues times
      const newNumber1 = Math.floor(Math.random() * Math.random() * 1000);	// New random integer
      const newNumber2 = Math.floor(Math.random() * Math.random() * 1000);	// New random integer
      tdataset.push([newNumber1, newNumber2]);					// Add new number to array
    }

    // Update scale domains
    xScale.domain([0, d3.max(tdataset, function (d) { return d[0]; })]);
    yScale.domain([0, d3.max(tdataset, function (d) { return d[1]; })]);

    // Update all circles
    svg.selectAll('circle')
      .data(tdataset)
      .transition()
      .duration(1000)
      .attr('cx', function (d) {
        return xScale(d[0]);
      })
      .attr('cy', function (d) {
        return yScale(d[1]);
      });

    // Update X axis
    // svg.select('.x.axis')
    //   .transition()
    //   .duration(1000)
    //   .call(xAxis);

    // Update Y axis
    // svg.select('.y.axis')
    //   .transition()
    //   .duration(1000)
    //   .call(yAxis);
  });`;
  }

}
