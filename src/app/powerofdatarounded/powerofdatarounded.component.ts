import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-powerofdatarounded',
  templateUrl: './powerofdatarounded.component.html',
  styleUrls: ['../common.css'],
  encapsulation: ViewEncapsulation.None,
})
export class PowerofdataroundedComponent implements OnInit {
  private code: string;

  constructor() { }

  ngOnInit() {
    const dataset = [];  						 // Initialize empty array
    for (let i = 0; i < 25; i++) {			 // Loop 25 times
      const newNumber = Math.floor(Math.random() * 30);  // New random integer (0-29)
      dataset.push(newNumber);			 // Add new number to array
    }

    d3.select('.result').selectAll('div')
      .data(dataset)
      .enter()
      .append('div')
      .attr('class', 'bar')
      .style('height', function (d) {
        const barHeight = d * 5;
        return barHeight + 'px';
      });

    this.code = `
const dataset = [];  						 // Initialize empty array
for (let i = 0; i < 25; i++) {			 // Loop 25 times
  const newNumber = Math.floor(Math.random() * 30);  // New random integer (0-29)
  dataset.push(newNumber);			 // Add new number to array
}

d3.select('.result').selectAll('div')
  .data(dataset)
  .enter()
  .append('div')
  .attr('class', 'bar')
  .style('height', function (d) {
    const barHeight = d * 5;
    return barHeight + 'px';
  });`;
  }
}
