import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-sort',
  templateUrl: '../../common/common.html',
  styleUrls: ['../../common/common.css'],
})
export class SortComponent implements OnInit {
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
        const yPosition = parseFloat(d3.select(this).attr('y')) + 14;

        svg.append('text')
          .attr('id', 'tooltip')
          .attr('x', xPosition)
          .attr('y', yPosition)
          .attr('text-anchor', 'middle')
          .attr('font-family', 'sans-serif')
          .attr('font-size', '11px')
          .attr('font-weight', 'bold')
          .attr('fill', 'white')
          .text(d);
        d3.select(this)
          .attr('fill', 'orange');
      })
      .on('mouseout', function (d) {
        d3.select(this)
          .attr('fill', 'rgb(0, 0, ' + (d * 10) + ')');
        d3.select('#tooltip').remove();
      })
      .on('click', function (d) {
        d3.select(this)
          .attr('fill', 'rgb(0, 0, ' + (d * 10) + ')');
        d3.select('#tooltip').remove();
        sortBars();
      });
    let sortOrder = false;
    function sortBars() {
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
    }
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
    const yPosition = parseFloat(d3.select(this).attr('y')) + 14;

    svg.append('text')
      .attr('id', 'tooltip')
      .attr('x', xPosition)
      .attr('y', yPosition)
      .attr('text-anchor', 'middle')
      .attr('font-family', 'sans-serif')
      .attr('font-size', '11px')
      .attr('font-weight', 'bold')
      .attr('fill', 'white')
      .text(d);
    d3.select(this)
      .attr('fill', 'orange');
  })
  .on('mouseout', function (d) {
    d3.select(this)
      .attr('fill', 'rgb(0, 0, ' + (d * 10) + ')');
    d3.select('#tooltip').remove();
  })
  .on('click', function (d) {
    d3.select(this)
      .attr('fill', 'rgb(0, 0, ' + (d * 10) + ')');
    d3.select('#tooltip').remove();
    sortBars();
  });
let sortOrder = false;
function sortBars() {
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
}`;
  }

}
