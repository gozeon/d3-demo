import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-addandremove',
  templateUrl: '../../common/common.html',
  styleUrls: ['../../common/common.css']
})
export class AddandremoveComponent implements OnInit {
  private code: string;

  constructor() { }

  ngOnInit() {
    // Width and height
    const w = 500;
    const h = 250;

    const dataset = [{ key: 0, value: 5 },		// dataset is now an array of objects.
    { key: 1, value: 10 },		// Each object has a 'key' and a 'value'.
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

    // Define key function, to be used when binding data
    const key = function (d) {
      return d.key;
    };

    // Create SVG element
    const svg = d3.select('.result')
      .append('svg')
      .attr('width', w)
      .attr('height', h);

    // Create bars
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

    // Create labels
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

    d3.select('.result').append('p').text('click me: Remove a data value').attr('id', 'remove');
    d3.select('.result').append('p').text('click me: Add a new data value').attr('id', 'add');

    // On click, update with new data
    d3.selectAll('p')
      .on('click', function () {

        // See which p was clicked
        const paragraphID = d3.select(this).attr('id');

        // Decide what to do next
        if (paragraphID === 'add') {
          // Add a data value
          const minValue = 2;
          const maxValue = 25 - minValue;
          const newNumber = Math.floor(Math.random() * maxValue) + minValue;
          const lastKeyValue = dataset[dataset.length - 1].key;
          dataset.push({
            key: lastKeyValue + 1,
            value: newNumber
          });
        } else {
          // Remove a value
          dataset.shift();	// Remove one value from dataset
        }

        // Update scale domains
        xScale.domain(d3.range(dataset.length));
        yScale.domain([0, d3.max(dataset, function (d) { return d.value; })]);

        // Select…
        const bars = svg.selectAll('rect')
          .data(dataset, key);

        // Enter…
        bars.enter()
          .append('rect')
          .attr('x', w)
          .attr('y', function (d) {
            return h - yScale(d.value);
          })
          .attr('width', xScale.bandwidth())
          .attr('height', function (d) {
            return yScale(d.value);
          })
          .attr('fill', function (d) {
            return 'rgb(0, 0, ' + (d.value * 10) + ')';
          })
          .merge(bars)	// Update…
          .transition()
          .duration(500)
          .attr('x', function (d, i) {
            return xScale(i);
          })
          .attr('y', function (d) {
            return h - yScale(d.value);
          })
          .attr('width', xScale.bandwidth())
          .attr('height', function (d) {
            return yScale(d.value);
          });

        // Exit…
        bars.exit()
          .transition()
          .duration(500)
          .attr('x', -xScale.bandwidth())
          .remove();

        // Update all labels

        // Select…
        const labels = svg.selectAll('text')
          .data(dataset, key);

        // Exit…
        labels.exit()
          .transition()
          .duration(500)
          .attr('x', -xScale.bandwidth())
          .remove();

        // Enter…
        labels.enter()
          .append('text')
          .text(function (d) {
            return d.value;
          })
          .attr('text-anchor', 'middle')
          .attr('x', w)
          .attr('y', function (d) {
            return h - yScale(d.value) + 14;
          })
          .attr('font-family', 'sans-serif')
          .attr('font-size', '11px')
          .attr('fill', 'white')
          .merge(labels)	// Update…
          .transition()
          .duration(500)
          .attr('x', function (d, i) {
            return xScale(i) + xScale.bandwidth() / 2;
          });
      });
    this.code = `// Width and height
const w = 500;
const h = 250;

const dataset = [{ key: 0, value: 5 },		// dataset is now an array of objects.
{ key: 1, value: 10 },		// Each object has a 'key' and a 'value'.
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

// Define key function, to be used when binding data
const key = function (d) {
  return d.key;
};

// Create SVG element
const svg = d3.select('.result')
  .append('svg')
  .attr('width', w)
  .attr('height', h);

// Create bars
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

// Create labels
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

d3.select('.result').append('p').text('click me: Remove a data value').attr('id', 'remove');
d3.select('.result').append('p').text('click me: Add a new data value').attr('id', 'add');

// On click, update with new data
d3.selectAll('p')
  .on('click', function () {

    // See which p was clicked
    const paragraphID = d3.select(this).attr('id');

    // Decide what to do next
    if (paragraphID === 'add') {
      // Add a data value
      const minValue = 2;
      const maxValue = 25 - minValue;
      const newNumber = Math.floor(Math.random() * maxValue) + minValue;
      const lastKeyValue = dataset[dataset.length - 1].key;
      dataset.push({
        key: lastKeyValue + 1,
        value: newNumber
      });
    } else {
      // Remove a value
      dataset.shift();	// Remove one value from dataset
    }

    // Update scale domains
    xScale.domain(d3.range(dataset.length));
    yScale.domain([0, d3.max(dataset, function (d) { return d.value; })]);

    // Select…
    const bars = svg.selectAll('rect')
      .data(dataset, key);

    // Enter…
    bars.enter()
      .append('rect')
      .attr('x', w)
      .attr('y', function (d) {
        return h - yScale(d.value);
      })
      .attr('width', xScale.bandwidth())
      .attr('height', function (d) {
        return yScale(d.value);
      })
      .attr('fill', function (d) {
        return 'rgb(0, 0, ' + (d.value * 10) + ')';
      })
      .merge(bars)	// Update…
      .transition()
      .duration(500)
      .attr('x', function (d, i) {
        return xScale(i);
      })
      .attr('y', function (d) {
        return h - yScale(d.value);
      })
      .attr('width', xScale.bandwidth())
      .attr('height', function (d) {
        return yScale(d.value);
      });

    // Exit…
    bars.exit()
      .transition()
      .duration(500)
      .attr('x', -xScale.bandwidth())
      .remove();

    // Update all labels

    // Select…
    const labels = svg.selectAll('text')
      .data(dataset, key);

    // Exit…
    labels.exit()
      .transition()
      .duration(500)
      .attr('x', -xScale.bandwidth())
      .remove();

    // Enter…
    labels.enter()
      .append('text')
      .text(function (d) {
        return d.value;
      })
      .attr('text-anchor', 'middle')
      .attr('x', w)
      .attr('y', function (d) {
        return h - yScale(d.value) + 14;
      })
      .attr('font-family', 'sans-serif')
      .attr('font-size', '11px')
      .attr('fill', 'white')
      .merge(labels)	// Update…
      .transition()
      .duration(500)
      .attr('x', function (d, i) {
        return xScale(i) + xScale.bandwidth() / 2;
      });
  });`;
  }

}
