import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class TooltipComponent implements OnInit {
  private code: string;

  constructor() { }

  ngOnInit() {
    const w = 500;
    const h = 250;

    const dataset = [5, 10, 13, 19, 21, 25, 22, 18, 15, 13,
      11, 12, 15, 20, 18, 17, 16, 18, 23, 25];

    const xScale = d3.scaleBand()
      .domain(d3.range(dataset.length))
      .rangeRound([0, w])
      .paddingInner(0.05);

    const yScale = d3.scaleLinear()
      .domain([0, d3.max(dataset)])
      .range([0, h]);

    const svg = d3.select('.result')
      .append('svg')
      .attr('width', w)
      .attr('height', h);

    svg.selectAll('rect')
      .data(dataset)
      .enter()
      .append('rect')
      .attr('x', function (d, i) {
        return xScale(i);
      })
      .attr('y', function (d) {
        return h - yScale(d);
      })
      .attr('width', xScale.bandwidth())
      .attr('height', function (d) {
        return yScale(d);
      })
      .attr('fill', function (d) {
        return 'rgb(0, 0, ' + Math.round(d * 10) + ')';
      })
      .on('mouseover', function (d) {
        const xPosition = parseFloat(d3.select(this).attr('x')) + xScale.bandwidth() / 2;
        const yPosition = parseFloat(d3.select(this).attr('y')) / 2 + h / 2;

        d3.select('#tooltip')
          .style('left', xPosition + 'px')
          .style('top', yPosition + 'px')
          .select('#value')
          .text(d);
        d3.select('#tooltip').classed('hidden', false);
      })
      .on('mouseout', function () {
        d3.select('#tooltip').classed('hidden', true);
      })
      .on('click', function () {
        sortBars();
      });

    let sortOrder = false;
    const sortBars = function () {
      sortOrder = !sortOrder;

      svg.selectAll('rect')
        .sort(function (a, b) {
          if (sortOrder) {
            return d3.ascending(a, b);
          } else {
            return d3.descending(a, b);
          }
        })
        .transition()
        .delay(function (d, i) {
          return i * 50;
        })
        .duration(1000)
        .attr('x', function (d, i) {
          return xScale(i);
        });
    };

    this.code = `const w = 500;
const h = 250;

const dataset = [5, 10, 13, 19, 21, 25, 22, 18, 15, 13,
  11, 12, 15, 20, 18, 17, 16, 18, 23, 25];

const xScale = d3.scaleBand()
  .domain(d3.range(dataset.length))
  .rangeRound([0, w])
  .paddingInner(0.05);

const yScale = d3.scaleLinear()
  .domain([0, d3.max(dataset)])
  .range([0, h]);

const svg = d3.select('.result')
  .append('svg')
  .attr('width', w)
  .attr('height', h);

svg.selectAll('rect')
  .data(dataset)
  .enter()
  .append('rect')
  .attr('x', function (d, i) {
    return xScale(i);
  })
  .attr('y', function (d) {
    return h - yScale(d);
  })
  .attr('width', xScale.bandwidth())
  .attr('height', function (d) {
    return yScale(d);
  })
  .attr('fill', function (d) {
    return 'rgb(0, 0, ' + Math.round(d * 10) + ')';
  })
  .on('mouseover', function (d) {
    const xPosition = parseFloat(d3.select(this).attr('x')) + xScale.bandwidth() / 2;
    const yPosition = parseFloat(d3.select(this).attr('y')) / 2 + h / 2;

    d3.select('#tooltip')
      .style('left', xPosition + 'px')
      .style('top', yPosition + 'px')
      .select('#value')
      .text(d);
    d3.select('#tooltip').classed('hidden', false);
  })
  .on('mouseout', function () {
    d3.select('#tooltip').classed('hidden', true);
  })
  .on('click', function () {
    sortBars();
  });

let sortOrder = false;
const sortBars = function () {
  sortOrder = !sortOrder;

  svg.selectAll('rect')
    .sort(function (a, b) {
      if (sortOrder) {
        return d3.ascending(a, b);
      } else {
        return d3.descending(a, b);
      }
    })
    .transition()
    .delay(function (d, i) {
      return i * 50;
    })
    .duration(1000)
    .attr('x', function (d, i) {
      return xScale(i);
    });
};`;
  }

}
