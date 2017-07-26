import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-stackedbaranchored',
  templateUrl: '../../common/common.html',
  styleUrls: ['../../common/common.css']
})
export class StackedbaranchoredComponent implements OnInit {
  private code: string;

  constructor() { }

  ngOnInit() {
    const w = 500;
    const h = 300;
    const dataset = [
      { apples: 5, oranges: 10, grapes: 22 },
      { apples: 4, oranges: 12, grapes: 28 },
      { apples: 2, oranges: 19, grapes: 32 },
      { apples: 7, oranges: 23, grapes: 35 },
      { apples: 23, oranges: 17, grapes: 43 }
    ];

    const stack = d3.stack()
      .keys(['apples', 'oranges', 'grapes'])
      .order(d3.stackOrderDescending);
    // Also try:
    // d3.stackOrderNone (the default, uses the order in which keys are specified)
    // d3.stackOrderReverse
    // d3.stackOrderAscending
    // d3.stackOrderDescending

    const series = stack(dataset);

    const xScale = d3.scaleBand()
      .domain(d3.range(dataset.length))
      .range([0, w])
      .paddingInner(0.05);

    const yScale = d3.scaleLinear()
      .domain([0,
        d3.max(dataset, function (d) {
          return d.apples + d.oranges + d.grapes;
        })
      ])
      .range([h, 0]);
    // .range([0, h]);

    const colors = d3.scaleOrdinal(d3.schemeCategory10);
    const svg = d3.select('.result')
      .append('svg')
      .attr('width', w)
      .attr('height', h);
    const groups = svg.selectAll('g')
      .data(series)
      .enter()
      .append('g')
      .style('fill', function (d, i) {
        return colors(i);
      });
    const rects = groups.selectAll('rect')
      .data(function (d) { return d; })
      .enter()
      .append('rect')
      .attr('x', function (d, i) {
        return xScale(i);
      })
      .attr('y', function (d) {
        return yScale(d[1]);
        // return yScale(d[0]);
      })
      .attr('height', function (d) {
        return yScale(d[0]) - yScale(d[1]);
        // return yScale(d[1]) - yScale(d[0]);
      })
      .attr('width', xScale.bandwidth());
    this.code = `const w = 500;
const h = 300;
const dataset = [
  { apples: 5, oranges: 10, grapes: 22 },
  { apples: 4, oranges: 12, grapes: 28 },
  { apples: 2, oranges: 19, grapes: 32 },
  { apples: 7, oranges: 23, grapes: 35 },
  { apples: 23, oranges: 17, grapes: 43 }
];

const stack = d3.stack()
  .keys(['apples', 'oranges', 'grapes'])
  .order(d3.stackOrderDescending);
// Also try:
// d3.stackOrderNone (the default, uses the order in which keys are specified)
// d3.stackOrderReverse
// d3.stackOrderAscending
// d3.stackOrderDescending

const series = stack(dataset);

const xScale = d3.scaleBand()
  .domain(d3.range(dataset.length))
  .range([0, w])
  .paddingInner(0.05);

const yScale = d3.scaleLinear()
  .domain([0,
    d3.max(dataset, function (d) {
      return d.apples + d.oranges + d.grapes;
    })
  ])
  .range([h, 0]);
// .range([0, h]);

const colors = d3.scaleOrdinal(d3.schemeCategory10);
const svg = d3.select('.result')
  .append('svg')
  .attr('width', w)
  .attr('height', h);
const groups = svg.selectAll('g')
  .data(series)
  .enter()
  .append('g')
  .style('fill', function (d, i) {
    return colors(i);
  });
const rects = groups.selectAll('rect')
  .data(function (d) { return d; })
  .enter()
  .append('rect')
  .attr('x', function (d, i) {
    return xScale(i);
  })
  .attr('y', function (d) {
    return yScale(d[1]);
    // return yScale(d[0]);
  })
  .attr('height', function (d) {
    return yScale(d[0]) - yScale(d[1]);
    // return yScale(d[1]) - yScale(d[0]);
  })
  .attr('width', xScale.bandwidth());`;
  }

}
