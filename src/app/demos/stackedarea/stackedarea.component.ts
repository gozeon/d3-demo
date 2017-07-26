import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-stackedarea',
  templateUrl: '../../common/common.html',
  styleUrls: ['../../common/common.css', './stackedarea.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class StackedareaComponent implements OnInit {
  private code: string;

  constructor() { }

  ngOnInit() {
    const w = 500;
    const h = 400;
    const padding = 20;
    let xScale, yScale, xAxis, yAxis, area;
    const parseTime = d3.timeParse('%Y-%m');
    const formatTime = d3.timeFormat('%b %Y');
    const rowConverter = function (d, i, cols) {
      const row = {
        date: parseTime(d.Date),
      };
      for (let j = 1; j < cols.length; j++) {
        const col = cols[j];
        if (d[cols[j]]) {
          row[cols[j]] = +d[cols[j]];
        } else {
          row[cols[j]] = 0;
        }
      }
      return row;
    };

    const stack = d3.stack()
      .order(d3.stackOrderDescending);

    d3.csv('assets/ev_sales_data.csv', rowConverter, function (data) {
      const dataset = data;
      const keys = dataset.columns;
      keys.shift();
      stack.keys(keys);
      const series = stack(dataset);
      xScale = d3.scaleTime()
        .domain([
          d3.min(dataset, function (d) { return d.date; }),
          d3.max(dataset, function (d) { return d.date; })
        ])
        .range([padding, w - padding * 2]);

      yScale = d3.scaleLinear()
        .domain([
          0,
          d3.max(dataset, function (d) {
            let sum = 0;
            for (let i = 0; i < keys.length; i++) {
              sum += d[keys[i]];
            }
            return sum;
          })
        ])
        .range([h - padding, padding / 2])
        .nice();

      xAxis = d3.axisBottom()
        .scale(xScale)
        .ticks(10)
        .tickFormat(formatTime);

      yAxis = d3.axisRight()
        .scale(yScale)
        .ticks(5);

      area = d3.area()
        .x(function (d) { return xScale(d.data.date); })
        .y0(function (d) { return yScale(d[0]); })
        .y1(function (d) { return yScale(d[1]); });

      const svg = d3.select('.result')
        .append('svg')
        .attr('width', w)
        .attr('height', h);

      svg.selectAll('path')
        .data(series)
        .enter()
        .append('path')
        .attr('class', 'area')
        .attr('d', area)
        .attr('fill', function (d, i) {
          return d3.schemeCategory20[i];
        })
        .append('title')
        .text(function (d) {
          return d.key;
        });

      svg.append('g')
        .attr('class', 'axis')
        .attr('transform', 'translate(0,' + (h - padding) + ')')
        .call(xAxis);

      svg.append('g')
        .attr('class', 'axis')
        .attr('transform', 'translate(' + (w - padding * 2) + ',0)')
        .call(yAxis);
    });
    this.code = `const w = 500;
const h = 400;
const padding = 20;
let xScale, yScale, xAxis, yAxis, area;
const parseTime = d3.timeParse('%Y-%m');
const formatTime = d3.timeFormat('%b %Y');
const rowConverter = function (d, i, cols) {
  const row = {
    date: parseTime(d.Date),
  };
  for (let j = 1; j < cols.length; j++) {
    const col = cols[j];
    if (d[cols[j]]) {
      row[cols[j]] = +d[cols[j]];
    } else {
      row[cols[j]] = 0;
    }
  }
  return row;
};

const stack = d3.stack()
  .order(d3.stackOrderDescending);

d3.csv('assets/ev_sales_data.csv', rowConverter, function (data) {
  const dataset = data;
  const keys = dataset.columns;
  keys.shift();
  stack.keys(keys);
  const series = stack(dataset);
  xScale = d3.scaleTime()
    .domain([
      d3.min(dataset, function (d) { return d.date; }),
      d3.max(dataset, function (d) { return d.date; })
    ])
    .range([padding, w - padding * 2]);

  yScale = d3.scaleLinear()
    .domain([
      0,
      d3.max(dataset, function (d) {
        let sum = 0;
        for (let i = 0; i < keys.length; i++) {
          sum += d[keys[i]];
        }
        return sum;
      })
    ])
    .range([h - padding, padding / 2])
    .nice();

  xAxis = d3.axisBottom()
    .scale(xScale)
    .ticks(10)
    .tickFormat(formatTime);

  yAxis = d3.axisRight()
    .scale(yScale)
    .ticks(5);

  area = d3.area()
    .x(function (d) { return xScale(d.data.date); })
    .y0(function (d) { return yScale(d[0]); })
    .y1(function (d) { return yScale(d[1]); });

  const svg = d3.select('.result')
    .append('svg')
    .attr('width', w)
    .attr('height', h);

  svg.selectAll('path')
    .data(series)
    .enter()
    .append('path')
    .attr('class', 'area')
    .attr('d', area)
    .attr('fill', function (d, i) {
      return d3.schemeCategory20[i];
    })
    .append('title')
    .text(function (d) {
      return d.key;
    });

  svg.append('g')
    .attr('class', 'axis')
    .attr('transform', 'translate(0,' + (h - padding) + ')')
    .call(xAxis);

  svg.append('g')
    .attr('class', 'axis')
    .attr('transform', 'translate(' + (w - padding * 2) + ',0)')
    .call(yAxis);
});`;
  }

}
