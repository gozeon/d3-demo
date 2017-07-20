import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-transitionduration',
  templateUrl: '../../common/common.html',
  styleUrls: ['../../common/common.css'],
})
export class TransitiondurationComponent implements OnInit {
  private code: string;

  constructor() { }

  ngOnInit() {
    // Width and height
    const w = 500;
    const h = 250;

    let dataset = [5, 10, 13, 19, 21, 25, 22, 18, 15, 13,
      11, 12, 15, 20, 18, 17, 16, 18, 23, 25];

    const xScale = d3.scaleBand()
      .domain(d3.range(dataset.length))
      .rangeRound([0, w])
      .paddingInner(0.05);

    const yScale = d3.scaleLinear()
      .domain([0, d3.max(dataset)])
      .range([0, h]);

    // Create SVG element
    const svg = d3.select('.result')
      .append('svg')
      .attr('width', w)
      .attr('height', h);

    // Create bars
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
      });

    // Create labels
    svg.selectAll('text')
      .data(dataset)
      .enter()
      .append('text')
      .text(function (d) {
        return d;
      })
      .attr('text-anchor', 'middle')
      .attr('x', function (d, i) {
        return xScale(i) + xScale.bandwidth() / 2;
      })
      .attr('y', function (d) {
        return h - yScale(d) + 14;
      })
      .attr('font-family', 'sans-serif')
      .attr('font-size', '11px')
      .attr('fill', 'white');

    // On click, update with new data
    d3.select('.result')
      .append('p')
      .text('clicl me!')
      .on('click', function () {

        // New values for dataset
        dataset = [11, 12, 15, 20, 18, 17, 16, 18, 23, 25,
          5, 10, 13, 19, 21, 25, 22, 18, 15, 13];

        // Update all rects
        svg.selectAll('rect')
          .data(dataset)
          .transition()
          .duration(5000)
          .attr('y', function (d) {
            return h - yScale(d);
          })
          .attr('height', function (d) {
            return yScale(d);
          })
          .attr('fill', function (d) {
            return 'rgb(0, 0, ' + Math.round(d * 10) + ')';
          });

        // Update all labels
        svg.selectAll('text')
          .data(dataset)
          .transition()								// <-- Now with
          .duration(5000)								//     label transitions!
          .text(function (d) {
            return d;
          })
          .attr('x', function (d, i) {
            return xScale(i) + xScale.bandwidth() / 2;
          })
          .attr('y', function (d) {
            return h - yScale(d) + 14;
          });
      });
    this.code = `// Width and height
const w = 500;
const h = 250;

let dataset = [5, 10, 13, 19, 21, 25, 22, 18, 15, 13,
  11, 12, 15, 20, 18, 17, 16, 18, 23, 25];

const xScale = d3.scaleBand()
  .domain(d3.range(dataset.length))
  .rangeRound([0, w])
  .paddingInner(0.05);

const yScale = d3.scaleLinear()
  .domain([0, d3.max(dataset)])
  .range([0, h]);

// Create SVG element
const svg = d3.select('.result')
  .append('svg')
  .attr('width', w)
  .attr('height', h);

// Create bars
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
  });

// Create labels
svg.selectAll('text')
  .data(dataset)
  .enter()
  .append('text')
  .text(function (d) {
    return d;
  })
  .attr('text-anchor', 'middle')
  .attr('x', function (d, i) {
    return xScale(i) + xScale.bandwidth() / 2;
  })
  .attr('y', function (d) {
    return h - yScale(d) + 14;
  })
  .attr('font-family', 'sans-serif')
  .attr('font-size', '11px')
  .attr('fill', 'white');

// On click, update with new data
d3.select('.result')
  .append('p')
  .text('clicl me!')
  .on('click', function () {

    // New values for dataset
    dataset = [11, 12, 15, 20, 18, 17, 16, 18, 23, 25,
      5, 10, 13, 19, 21, 25, 22, 18, 15, 13];

    // Update all rects
    svg.selectAll('rect')
      .data(dataset)
      .transition()
      .duration(5000)
      .attr('y', function (d) {
        return h - yScale(d);
      })
      .attr('height', function (d) {
        return yScale(d);
      })
      .attr('fill', function (d) {
        return 'rgb(0, 0, ' + Math.round(d * 10) + ')';
      });

    // Update all labels
    svg.selectAll('text')
      .data(dataset)
      .transition()								// <-- Now with
      .duration(5000)								//     label transitions!
      .text(function (d) {
        return d;
      })
      .attr('x', function (d, i) {
        return xScale(i) + xScale.bandwidth() / 2;
      })
      .attr('y', function (d) {
        return h - yScale(d) + 14;
      });
  });`;
  }

}
