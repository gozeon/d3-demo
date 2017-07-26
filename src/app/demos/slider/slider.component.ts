import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['../../common/common.css', './slider.component.css']
})
export class SliderComponent implements OnInit {
  private code: string;

  constructor() { }

  ngOnInit() {
    const w = 400;
    const h = 250;

    const dataset = [
      { key: 0, value: 5 },
      { key: 1, value: 10 },
      { key: 2, value: 13 },
      { key: 3, value: 19 },
      { key: 4, value: 21 },
      { key: 5, value: 25 },
      { key: 6, value: 22 },
      { key: 7, value: 18 },
      { key: 8, value: 15 },
      { key: 9, value: 13 },
      { key: 10, value: 11 },
      { key: 11, value: 12 },
      { key: 12, value: 15 },
      { key: 13, value: 20 },
      { key: 14, value: 18 },
      { key: 15, value: 17 },
      { key: 16, value: 16 },
      { key: 17, value: 18 },
      { key: 18, value: 23 },
      { key: 19, value: 25 }];
    const xScale = d3.scaleBand()
      .domain(d3.range(dataset.length))
      .rangeRound([0, w])
      .paddingInner(0.05);
    const yScale = d3.scaleLinear()
      .domain([0, d3.max(dataset, function (d) { return d.value; })])
      .range([0, h]);
    const key = function (d) {
      return d.key;
    };
    const svg = d3.select('.result')
      .append('svg')
      .attr('width', w)
      .attr('height', h);
    svg.selectAll('rect')
      .data(dataset, key)
      .enter()
      .append('rect')
      .attr('x', function (d, i) {
        return xScale(i);
      })
      .attr('y', function (d) {
        return h - yScale(d.value);
      })
      .attr('width', xScale.bandwidth())
      .attr('height', function (d) {
        return yScale(d.value);
      })
      .attr('fill', function (d) {
        return 'rgb(0, 0, ' + (d.value * 10) + ')';
      });
    svg.selectAll('text')
      .data(dataset, key)
      .enter()
      .append('text')
      .text(function (d) {
        return d.value;
      })
      .attr('text-anchor', 'middle')
      .attr('x', function (d, i) {
        return xScale(i) + xScale.bandwidth() / 2;
      })
      .attr('y', function (d) {
        return h - yScale(d.value) + 14;
      })
      .attr('font-family', 'sans-serif')
      .attr('font-size', '11px')
      .attr('fill', 'white');
    d3.select('input')
      .on('change', function () {
        const threshold = +d3.select(this).node().value;
        svg.selectAll('rect')
          .attr('fill', function (d) {
            return 'rgb(0, 0, ' + (d.value * 10) + ')';
          })
          .filter(function (d) {
            return d.value <= threshold;
          })
          .attr('fill', 'red');
      });
    this.code = `const w = 400;
const h = 250;

const dataset = [
  { key: 0, value: 5 },
  { key: 1, value: 10 },
  { key: 2, value: 13 },
  { key: 3, value: 19 },
  { key: 4, value: 21 },
  { key: 5, value: 25 },
  { key: 6, value: 22 },
  { key: 7, value: 18 },
  { key: 8, value: 15 },
  { key: 9, value: 13 },
  { key: 10, value: 11 },
  { key: 11, value: 12 },
  { key: 12, value: 15 },
  { key: 13, value: 20 },
  { key: 14, value: 18 },
  { key: 15, value: 17 },
  { key: 16, value: 16 },
  { key: 17, value: 18 },
  { key: 18, value: 23 },
  { key: 19, value: 25 }];
const xScale = d3.scaleBand()
  .domain(d3.range(dataset.length))
  .rangeRound([0, w])
  .paddingInner(0.05);
const yScale = d3.scaleLinear()
  .domain([0, d3.max(dataset, function (d) { return d.value; })])
  .range([0, h]);
const key = function (d) {
  return d.key;
};
const svg = d3.select('.result')
  .append('svg')
  .attr('width', w)
  .attr('height', h);
svg.selectAll('rect')
  .data(dataset, key)
  .enter()
  .append('rect')
  .attr('x', function (d, i) {
    return xScale(i);
  })
  .attr('y', function (d) {
    return h - yScale(d.value);
  })
  .attr('width', xScale.bandwidth())
  .attr('height', function (d) {
    return yScale(d.value);
  })
  .attr('fill', function (d) {
    return 'rgb(0, 0, ' + (d.value * 10) + ')';
  });
svg.selectAll('text')
  .data(dataset, key)
  .enter()
  .append('text')
  .text(function (d) {
    return d.value;
  })
  .attr('text-anchor', 'middle')
  .attr('x', function (d, i) {
    return xScale(i) + xScale.bandwidth() / 2;
  })
  .attr('y', function (d) {
    return h - yScale(d.value) + 14;
  })
  .attr('font-family', 'sans-serif')
  .attr('font-size', '11px')
  .attr('fill', 'white');
d3.select('input')
  .on('change', function () {
    const threshold = +d3.select(this).node().value;
    svg.selectAll('rect')
      .attr('fill', function (d) {
        return 'rgb(0, 0, ' + (d.value * 10) + ')';
      })
      .filter(function (d) {
        return d.value <= threshold;
      })
      .attr('fill', 'red');
  });`;
  }

}
