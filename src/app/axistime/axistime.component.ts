import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-axistime',
  templateUrl: '../common/common.html',
  styleUrls: ['../common/common.css']
})
export class AxistimeComponent implements OnInit {
  private code: string;

  constructor() { }

  ngOnInit() {
    // Width and height
    const w = 500;
    const h = 300;
    const padding = 40;

    let dataset, xScale, yScale, xAxis, yAxis;  // Empty, for now

    // For converting strings to Dates
    const parseTime = d3.timeParse('%m/%d/%y');

    // For converting Dates to strings
    const formatTime = d3.timeFormat('%b %e');

    // Function for converting CSV values from strings to Dates and numbers
    const rowConverter = function (d) {
      return {
        Date: parseTime(d.Date),
        Amount: parseInt(d.Amount, 10)
      };
    };

    // Load in the data
    d3.csv('assets/time_scale_data.csv', rowConverter, function (data) {

      // Copy data into global dataset
      dataset = data;

      // Create scale functions
      xScale = d3.scaleTime()
        .domain([
          d3.min(dataset, function (d) { return d.Date; }),
          d3.max(dataset, function (d) { return d.Date; })
        ])
        .range([padding, w - padding]);

      yScale = d3.scaleLinear()
        .domain([
          d3.min(dataset, function (d) { return d.Amount; }),
          d3.max(dataset, function (d) { return d.Amount; })
        ])
        .range([h - padding, padding]);

      // Define X axis
      xAxis = d3.axisBottom()
        .scale(xScale)
        .ticks(5);

      // Define Y axis
      yAxis = d3.axisLeft()
        .scale(yScale)
        .ticks(5);

      // Create SVG element
      const svg = d3.select('.result')
        .append('svg')
        .attr('width', w)
        .attr('height', h);

      // Generate date labels first, so they are in back
      svg.selectAll('text')
        .data(dataset)
        .enter()
        .append('text')
        .text(function (d) {
          return formatTime(d.Date);
        })
        .attr('x', function (d) {
          return xScale(d.Date) + 4;
        })
        .attr('y', function (d) {
          return yScale(d.Amount) + 4;
        })
        .attr('font-family', 'sans-serif')
        .attr('font-size', '11px')
        .attr('fill', '#bbb');

      // Generate circles last, so they appear in front
      svg.selectAll('circle')
        .data(dataset)
        .enter()
        .append('circle')
        .attr('cx', function (d) {
          return xScale(d.Date);
        })
        .attr('cy', function (d) {
          return yScale(d.Amount);
        })
        .attr('r', 2);

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
    });
    this.code = `// Width and height
const w = 500;
const h = 300;
const padding = 40;

let dataset, xScale, yScale, xAxis, yAxis;  // Empty, for now

// For converting strings to Dates
const parseTime = d3.timeParse('%m/%d/%y');

// For converting Dates to strings
const formatTime = d3.timeFormat('%b %e');

// Function for converting CSV values from strings to Dates and numbers
const rowConverter = function (d) {
  return {
    Date: parseTime(d.Date),
    Amount: parseInt(d.Amount, 10)
  };
};

// Load in the data
d3.csv('assets/time_scale_data.csv', rowConverter, function (data) {

  // Copy data into global dataset
  dataset = data;

  // Create scale functions
  xScale = d3.scaleTime()
    .domain([
      d3.min(dataset, function (d) { return d.Date; }),
      d3.max(dataset, function (d) { return d.Date; })
    ])
    .range([padding, w - padding]);

  yScale = d3.scaleLinear()
    .domain([
      d3.min(dataset, function (d) { return d.Amount; }),
      d3.max(dataset, function (d) { return d.Amount; })
    ])
    .range([h - padding, padding]);

  // Define X axis
  xAxis = d3.axisBottom()
    .scale(xScale)
    .ticks(5);

  // Define Y axis
  yAxis = d3.axisLeft()
    .scale(yScale)
    .ticks(5);

  // Create SVG element
  const svg = d3.select('.result')
    .append('svg')
    .attr('width', w)
    .attr('height', h);

  // Generate date labels first, so they are in back
  svg.selectAll('text')
    .data(dataset)
    .enter()
    .append('text')
    .text(function (d) {
      return formatTime(d.Date);
    })
    .attr('x', function (d) {
      return xScale(d.Date) + 4;
    })
    .attr('y', function (d) {
      return yScale(d.Amount) + 4;
    })
    .attr('font-family', 'sans-serif')
    .attr('font-size', '11px')
    .attr('fill', '#bbb');

  // Generate circles last, so they appear in front
  svg.selectAll('circle')
    .data(dataset)
    .enter()
    .append('circle')
    .attr('cx', function (d) {
      return xScale(d.Date);
    })
    .attr('cy', function (d) {
      return yScale(d.Amount);
    })
    .attr('r', 2);

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
});`;
  }

}
