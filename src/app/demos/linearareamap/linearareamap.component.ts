/* tslint:disable */
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-linearareamap',
  templateUrl: '../../common/common.html',
  styleUrls: ['../../common/common.css', './linearareamap.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LinearareamapComponent implements OnInit {
  private code: string;

  constructor() { }

  ngOnInit() {
    const w = 700;
    const h = 300;
    const padding = 20;

    // Tracks view state.  Possible values:
    // 0 = default (vehicle types)
    // 1 = vehicles (of one type)
    // 2 = vehicle (singular)
    let viewState = 0;

    // Tracks most recently viewed/clicked 'type'.  Possible values:
    // 'HEV', 'PHEV', 'BEV', 'FCEV', or undefined
    let viewType;

    let dataset, thisTypeDataset, xScale, yScale, xAxis, yAxis, area;  // Empty, for now

    // For converting strings to Dates
    const parseTime = d3.timeParse('%Y-%m');

    // For converting Dates to strings
    const formatTime = d3.timeFormat('%Y');

    // Define key function, to be used when binding data
    const key = function (d) {
      return d.key;
    };

    // Set up stack methods
    const vehicleStack = d3.stack();
    const typeStack = d3.stack();

    // Load in data
    d3.request('assets/vehicle_sales_data.csv')
      .mimeType('text/csv')
      .get(function (response) {

        // 
        // DATA PARSING
        // 

        // Parse each row of the CSV into an array of string values
        const rows = d3.csvParseRows(response.responseText);
        // console.log(rows);

        // Make dataset an empty array, so we can start adding values
        dataset = [];

        // Loop once for each row of the CSV, starting at row 3,
        // since rows 0-2 contain only vehicle info, not sales values.
        for (let i = 3; i < rows.length; i++) {

          // Create a new object
          dataset[i - 3] = {
            date: parseTime(rows[i][0])  // Make a new Date object for each year + month
          };

          // Loop once for each vehicle in this row (i.e., for this date)
          for (let j = 1; j < rows[i].length; j++) {

            const make = rows[0][j];  // 'Make' from 1st row in CSV
            const model = rows[1][j];  // 'Model' from 2nd row in CSV
            const makeModel = rows[0][j] + ' ' + rows[1][j];  // 'Make' + 'Model' will serve as our key
            const type = rows[2][j];  // 'Type' from 3rd row in CSV
            let sales = rows[i][j];  // Sales value for this vehicle and month

            // If sales value exists…
            if (sales) {
              sales = parseInt(sales, 10);  // Convert from string to int
            } else {  // Otherwise…
              sales = 0;  // Set to zero
            }

            // Append a new object with data for this vehicle and month
            dataset[i - 3][makeModel] = {
              'make': make,
              'model': model,
              'type': type,
              'sales': sales
            };
          }
        }

        // Log out the final state of dataset
        // console.log(dataset);
        // 
        // STACKING (removed here, now happens only after click…)
        // 
        // 
        // 	TYPE DATA SERIES
        // 

        // The goal here is to make a totally separate data set that
        // includes just monthly totals for each `type` (HEV, PHEV, BEV, FCEV).

        // Make typeDataset an empty array, so we can start adding values
        let typeDataset = [];

        // Loop once for each row of the CSV, starting at row 3,
        // since rows 0-2 contain only vehicle info, not sales values.
        for (let i = 3; i < rows.length; i++) {

          // Create a new object
          typeDataset[i - 3] = {
            date: parseTime(rows[i][0]),  // Make a new Date object for each year + month
            'HEV': 0,
            'PHEV': 0,
            'BEV': 0,
            'FCEV': 0
          };

          // Loop once for each vehicle in this row (i.e., for this date)
          for (let j = 1; j < rows[i].length; j++) {

            const type = rows[2][j];  // 'Type' from 3rd row in CSV
            let sales = rows[i][j];  // Sales value for this vehicle and month

            // If sales value exists…
            if (sales) {
              sales = parseInt(sales, 10);  // Convert from string to int
            } else {  // Otherwise…
              sales = 0;  // Set to zero
            }
            // Add sales value to existing sum
            typeDataset[i - 3][type] += sales;
          }

        }

        // Log out the final state of dataset
        // console.log(typeDataset);

        // 
        // STACKING
        // 

        // Tell stack function where to find the keys
        const types = ['HEV', 'PHEV', 'BEV', 'FCEV'];
        typeStack.keys(types);

        // Stack the data and log it out
        const typeSeries = typeStack(typeDataset);
        // console.log(typeSeries);

        // 
        // MAKE THE CHART
        // 

        // Create scale functions
        xScale = d3.scaleTime()
          .domain([
            d3.min(dataset, function (d) { return d.date; }),
            d3.max(dataset, function (d) { return d.date; })
          ])
          .range([padding, w - padding * 2]);

        yScale = d3.scaleLinear()
          .domain([
            0,
            d3.max(typeDataset, function (d) {
              let sum = 0;

              // Loops once for each row, to calculate
              // the total (sum) of sales of all vehicles
              for (let i = 0; i < types.length; i++) {
                sum += d[types[i]];
              }

              return sum;
            })
          ])
          .range([h - padding, padding / 2])
          .nice();

        // Define axes
        xAxis = d3.axisBottom()
          .scale(xScale)
          .ticks(10)
          .tickFormat(formatTime);

        // Define Y axis
        yAxis = d3.axisRight()
          .scale(yScale)
          .ticks(5);

        // Define area generator
        area = d3.area()
          .x(function (d) { return xScale(d.data.date); })
          .y0(function (d) { return yScale(d[0]); })
          .y1(function (d) { return yScale(d[1]); });

        // Create SVG element
        var svg = d3.select('.result')
          .append('svg')
          .attr('width', w)
          .attr('height', h);

        // Create areas for individual VEHICLES
        // 
        // (Removed here, now happens only after click…)
        // 
        svg.append('g')
          .attr('id', 'vehicles');

        // Create areas for TYPES
        svg.append('g')
          .attr('id', 'types')
          .selectAll('path')
          .data(typeSeries, key)
          .enter()
          .append('path')
          .attr('class', 'linearareamap-area')
          .attr('opacity', 1)
          .attr('d', area)
          .attr('fill', function (d) {

            // Which type is this?
            const thisType = d.key;

            // New color var
            let color;

            switch (thisType) {
              case 'HEV':
                color = 'rgb(110, 64, 170)';
                break;
              case 'PHEV':
                color = 'rgb(76, 110, 219)';
                break;
              case 'BEV':
                color = 'rgb(35, 171, 216)';
                break;
              case 'FCEV':
                color = 'rgb(29, 223, 163)';
                break;
            }

            return color;
          })
          .on('click', function (d) {

            // Update view state
            viewState++;

            // 
            // TYPES
            // 

            // Which type was clicked?
            var thisType = d.key;

            // Update this for later reference
            viewType = thisType;

            // Generate a new data set with all-zero values, 
            // except for this type's data
            thisTypeDataset = [];

            for (var i = 0; i < typeDataset.length; i++) {
              thisTypeDataset[i] = {
                date: typeDataset[i].date,
                HEV: 0,
                PHEV: 0,
                BEV: 0,
                FCEV: 0,
                [thisType]: typeDataset[i][thisType]  // Overwrites the appropriate zero value above
              }
            }

            // console.log(thisTypeDataset);

            // Stack the data (even though there's now just one 'layer') and log it out
            var thisTypeSeries = typeStack(thisTypeDataset);
            // console.log(thisTypeSeries);

            // Bind the new data set to paths, overwriting old bound data.
            var paths = d3.selectAll('#types path')
              .data(thisTypeSeries, key)
              .classed('unclickable', true);

            // Transition areas into new positions (i.e., thisType's area
            // will go to a zero baseline; all others will flatten out).
            // 
            // Store this transition in a new variable for later reference.
            var areaTransitions = paths.transition()
              .duration(1000)
              .attr('d', area);

            // Update scale
            yScale.domain([
              0,
              d3.max(thisTypeDataset, function (d) {
                var sum = 0;

                // Calculate the total (sum) of sales of this type,
                // ignoring the others (for now)
                sum += d[thisType];

                return sum;
              })
            ]);

            // Append this transition to the one already in progress
            // (from above).  Transition areas to newly updated scale.
            areaTransitions.transition()
              .delay(200)
              .on('start', function () {

                // Transition axis to new scale concurrently
                d3.select('g.axis.y')
                  .transition()
                  .duration(1000)
                  .call(yAxis);

              })
              .duration(1000)
              .attr('d', area)
              .transition()
              .on('start', function () {
                // Make vehicles visible instantly, so 
                // they are revealed when this fades out
                d3.selectAll('g#vehicles path')
                  .attr('opacity', 1);
              })
              .duration(1000)
              .attr('opacity', 0)
              .on('end', function (d, i) {
                // Reveal back button
                if (i === 0) {
                  toggleBackButton();
                }
              });

            // 
            // VEHICLES
            // 

            // Get all possible keys (make + model), but toss out 'date'
            var keysAll = Object.keys(dataset[0]).slice(1);
            // console.log(keysAll);

            // Loop once for each key, and save out just the ones of thisType (e.g. BEVs)
            var keysOfThisType = [];
            for (var i = 0; i < keysAll.length; i++) {
              if (dataset[0][keysAll[i]].type == thisType) {
                keysOfThisType.push(keysAll[i]);
              }
            }
            // console.log(keysOfThisType);

            // Give the new keys to the stack function
            vehicleStack.keys(keysOfThisType)
              .value(function value(d, key) {
                return d[key].sales;
              });

            // Stack the data and log it out
            var vehicleSeries = vehicleStack(dataset);
            // console.log(vehicleSeries);

            // Create areas for individual VEHICLES
            svg.select('g#vehicles')
              .selectAll('path')
              .data(vehicleSeries, key)
              .enter()
              .append('path')
              .attr('class', 'linearareamap-area')
              .attr('opacity', 0)
              .attr('d', area)
              .attr('fill', function (d, i) {

                // Which vehicle is this?
                var thisKey = d.key;

                // What 'type' is this vehicle?
                var thisType = d[0].data[thisKey].type;
                // console.log(thisType);

                // Used to find a cool color below
                var spread = 0.2;
                var startingPoint;

                // Choose where in the color spectrum we start, based on type
                switch (thisType) {
                  case 'HEV':
                    startingPoint = 0;
                    break;
                  case 'PHEV':
                    startingPoint = 0.2;
                    break;
                  case 'BEV':
                    startingPoint = 0.4;
                    break;
                  case 'FCEV':
                    startingPoint = 0.6;
                    break;
                }

                // How many cars?
                var numVehicles = keysOfThisType.length;

                // Get a value between 0.0 and 1.0
                var normalized = startingPoint + ((i / numVehicles) * spread);

                // Get that color on the spectrum
                return d3.interpolateCool(normalized);
              })
              .on('click', function (d) {

                // Update view state
                viewState++;

                // Hide the back button during this view transition
                toggleBackButton();

                // Which vehicle was clicked?
                const thisType = d.key;

                // Fade out all other vehicle areas
                d3.selectAll('g#vehicles path')
                  .classed('unclickable', true)  // Prevent future clicks
                  .filter(function (d) {  // Filter out 'this' one
                    if (d.key !== thisType) {
                      return true;
                    }
                  })
                  .transition()
                  .duration(1000)
                  .attr('opacity', 0);

                // Define area generator that will be used just this one time
                const singleVehicleArea = d3.area()
                  .x(function (d) { return xScale(d.data.date); })
                  .y0(function (d) { return yScale(0); })  // Note zero baseline
                  .y1(function (d) { return yScale(d.data[thisType].sales); });
                // Note y1 uses the raw 'sales' value for 'this' vehicle,
                // not the stacked data values (e.g., d[0] or d[1]).

                // Use this new area generator to transition the area downward,
                // to have a flat (zero) baseline.
                const thisAreaTransition = d3.select(this)
                  .transition()
                  .delay(1000)
                  .duration(1000)
                  .attr('d', singleVehicleArea);

                // Update y scale domain, based on the sales for this vehicle only
                yScale.domain([
                  0,
                  d3.max(dataset, function (d) {
                    return d[thisType].sales;
                  })
                ]);

                // Transitions the clicked area and y axis into place, to fit the new domain
                thisAreaTransition
                  .transition()
                  .duration(1000)
                  .attr('d', singleVehicleArea)
                  .on('start', function () {

                    // Transition axis to new scale concurrently
                    d3.select('g.axis.y')
                      .transition()
                      .duration(1000)
                      .call(yAxis);

                  })
                  .on('end', function () {
                    // Restore clickability (is that a word?)
                    d3.select(this).classed('unclickable', 'false');

                    // Reveal back button
                    toggleBackButton();
                  });

              })
              .append('title')  // Make tooltip
              .text(function (d) {
                return d.key;
              });

          })
          .append('title')  // Make tooltip
          .text(function (d) {
            return d.key;
          });

        // Create axes
        svg.append('g')
          .attr('class', 'axis x')
          .attr('transform', 'translate(0,' + (h - padding) + ')')
          .call(xAxis);

        svg.append('g')
          .attr('class', 'axis y')
          .attr('transform', 'translate(' + (w - padding * 2) + ',0)')
          .call(yAxis);

        // Create back button
        const backButton = svg.append('g')
          .attr('id', 'backButton')
          .attr('opacity', 0)				// Initially hidden
          .classed('unclickable', true)	// Initially not clickable
          .attr('transform', 'translate(' + xScale.range()[0] + ',' + yScale.range()[1] + ')');

        backButton.append('rect')
          .attr('x', 0)
          .attr('y', 0)
          .attr('rx', 5)
          .attr('rx', 5)
          .attr('width', 70)
          .attr('height', 30);

        backButton.append('text')
          .attr('x', 7)
          .attr('y', 20)
          .html('&larr; Back');

        // Define click behavior
        backButton.on('click', function () {

          // Hide the back button, as it was just clicked
          toggleBackButton();

          if (viewState == 1) {
            // Go back to default view

            // Update view state
            viewState--;

            // Re-bind type data and fade in types
            var typeAreaTransitions = d3.selectAll('g#types path')
              .data(typeSeries, key)
              .transition()
              .duration(250)
              .attr('opacity', 1)
              .on('end', function () {
                // Remove all vehicles once this fades in;
                // they will be recreated later as needed.
                d3.selectAll('g#vehicles path').remove();
              });

            // Set y scale back to original domain
            yScale.domain([
              0,
              d3.max(typeDataset, function (d) {
                let sum = 0;

                // Loops once for each row, to calculate
                // the total (sum) of sales of all vehicles
                for (let i = 0; i < types.length; i++) {
                  sum += d[types[i]];
                }

                return sum;
              })
            ]);

            // Transition type areas and y scale back into place
            typeAreaTransitions.transition()
              .duration(1000)
              .on('start', function () {

                // Transition axis to new scale concurrently
                d3.select('g.axis.y')
                  .transition()
                  .duration(1000)
                  .call(yAxis);

              })
              .attr('d', area)
              .on('end', function () {
                d3.select(this).classed('unclickable', false);
              });

          } else if (viewState == 2) {
            // Go back to vehicles view

            // Update view state
            viewState--;

            // Restore the old y scale
            yScale.domain([
              0,
              d3.max(thisTypeDataset, function (d) {
                let sum = 0;

                // Calculate the total (sum) of sales of this type
                sum += d[viewType];

                return sum;
              })
            ]);

            // Transition the y axis and visible area back into place
            d3.selectAll('g#vehicles path')
              .transition()
              .on('start', function () {

                // Transition y axis to new scale concurrently
                d3.select('g.axis.y')
                  .transition()
                  .duration(1000)
                  .call(yAxis);

              })
              .duration(1000)
              .attr('d', area)  // Effectively changes only the selected area
              .transition()
              .duration(1000)
              .attr('opacity', 1)  // Fade in all areas
              .on('end', function (d, i) {

                // Restore clickability
                d3.select(this).classed('unclickable', false);

                // Reveal back button
                if (i === 0) {
                  toggleBackButton();
                }

              });

          }

        });

      });



    const toggleBackButton = function () {

      // Select the button
      const backButton = d3.select('#backButton');

      // Is the button hidden right now?
      const hidden = backButton.classed('unclickable');

      // Decide whether to reveal or hide it
      if (hidden) {

        // Reveal it

        // Set up dynamic button text
        var buttonText = '&larr; Back to ';

        // Text varies by mode and type
        if (viewState == 1) {
          buttonText += 'all types';
        } else if (viewState == 2) {
          buttonText += 'all ' + viewType + ' vehicles';
        }

        // Set text
        backButton.select('text').html(buttonText);

        // Resize button depending on text width
        const rectWidth = Math.round(backButton.select('text').node().getBBox().width + 16);
        backButton.select('rect').attr('width', rectWidth);

        // Fade button in
        backButton.classed('unclickable', false)
          .transition()
          .duration(500)
          .attr('opacity', 1);

      } else {

        // Hide it
        backButton.classed('unclickable', true)
          .transition()
          .duration(200)
          .attr('opacity', 0);
      }
    };

    this.code = `const w = 700;
const h = 300;
const padding = 20;

// Tracks view state.  Possible values:
// 0 = default (vehicle types)
// 1 = vehicles (of one type)
// 2 = vehicle (singular)
let viewState = 0;

// Tracks most recently viewed/clicked 'type'.  Possible values:
// 'HEV', 'PHEV', 'BEV', 'FCEV', or undefined
let viewType;

let dataset, thisTypeDataset, xScale, yScale, xAxis, yAxis, area;  // Empty, for now

// For converting strings to Dates
const parseTime = d3.timeParse('%Y-%m');

// For converting Dates to strings
const formatTime = d3.timeFormat('%Y');

// Define key function, to be used when binding data
const key = function (d) {
  return d.key;
};

// Set up stack methods
const vehicleStack = d3.stack();
const typeStack = d3.stack();

// Load in data
d3.request('assets/vehicle_sales_data.csv')
  .mimeType('text/csv')
  .get(function (response) {

    // 
    // DATA PARSING
    // 

    // Parse each row of the CSV into an array of string values
    const rows = d3.csvParseRows(response.responseText);
    // console.log(rows);

    // Make dataset an empty array, so we can start adding values
    dataset = [];

    // Loop once for each row of the CSV, starting at row 3,
    // since rows 0-2 contain only vehicle info, not sales values.
    for (let i = 3; i < rows.length; i++) {

      // Create a new object
      dataset[i - 3] = {
        date: parseTime(rows[i][0])  // Make a new Date object for each year + month
      };

      // Loop once for each vehicle in this row (i.e., for this date)
      for (let j = 1; j < rows[i].length; j++) {

        const make = rows[0][j];  // 'Make' from 1st row in CSV
        const model = rows[1][j];  // 'Model' from 2nd row in CSV
        const makeModel = rows[0][j] + ' ' + rows[1][j];  // 'Make' + 'Model' will serve as our key
        const type = rows[2][j];  // 'Type' from 3rd row in CSV
        let sales = rows[i][j];  // Sales value for this vehicle and month

        // If sales value exists…
        if (sales) {
          sales = parseInt(sales, 10);  // Convert from string to int
        } else {  // Otherwise…
          sales = 0;  // Set to zero
        }

        // Append a new object with data for this vehicle and month
        dataset[i - 3][makeModel] = {
          'make': make,
          'model': model,
          'type': type,
          'sales': sales
        };
      }
    }

    // Log out the final state of dataset
    // console.log(dataset);
    // 
    // STACKING (removed here, now happens only after click…)
    // 
    // 
    // 	TYPE DATA SERIES
    // 

    // The goal here is to make a totally separate data set that
    // includes just monthly totals for each 'type' (HEV, PHEV, BEV, FCEV).

    // Make typeDataset an empty array, so we can start adding values
    let typeDataset = [];

    // Loop once for each row of the CSV, starting at row 3,
    // since rows 0-2 contain only vehicle info, not sales values.
    for (let i = 3; i < rows.length; i++) {

      // Create a new object
      typeDataset[i - 3] = {
        date: parseTime(rows[i][0]),  // Make a new Date object for each year + month
        'HEV': 0,
        'PHEV': 0,
        'BEV': 0,
        'FCEV': 0
      };

      // Loop once for each vehicle in this row (i.e., for this date)
      for (let j = 1; j < rows[i].length; j++) {

        const type = rows[2][j];  // 'Type' from 3rd row in CSV
        let sales = rows[i][j];  // Sales value for this vehicle and month

        // If sales value exists…
        if (sales) {
          sales = parseInt(sales, 10);  // Convert from string to int
        } else {  // Otherwise…
          sales = 0;  // Set to zero
        }
        // Add sales value to existing sum
        typeDataset[i - 3][type] += sales;
      }

    }

    // Log out the final state of dataset
    // console.log(typeDataset);

    // 
    // STACKING
    // 

    // Tell stack function where to find the keys
    const types = ['HEV', 'PHEV', 'BEV', 'FCEV'];
    typeStack.keys(types);

    // Stack the data and log it out
    const typeSeries = typeStack(typeDataset);
    // console.log(typeSeries);

    // 
    // MAKE THE CHART
    // 

    // Create scale functions
    xScale = d3.scaleTime()
      .domain([
        d3.min(dataset, function (d) { return d.date; }),
        d3.max(dataset, function (d) { return d.date; })
      ])
      .range([padding, w - padding * 2]);

    yScale = d3.scaleLinear()
      .domain([
        0,
        d3.max(typeDataset, function (d) {
          let sum = 0;

          // Loops once for each row, to calculate
          // the total (sum) of sales of all vehicles
          for (let i = 0; i < types.length; i++) {
            sum += d[types[i]];
          }

          return sum;
        })
      ])
      .range([h - padding, padding / 2])
      .nice();

    // Define axes
    xAxis = d3.axisBottom()
      .scale(xScale)
      .ticks(10)
      .tickFormat(formatTime);

    // Define Y axis
    yAxis = d3.axisRight()
      .scale(yScale)
      .ticks(5);

    // Define area generator
    area = d3.area()
      .x(function (d) { return xScale(d.data.date); })
      .y0(function (d) { return yScale(d[0]); })
      .y1(function (d) { return yScale(d[1]); });

    // Create SVG element
    var svg = d3.select('.result')
      .append('svg')
      .attr('width', w)
      .attr('height', h);

    // Create areas for individual VEHICLES
    // 
    // (Removed here, now happens only after click…)
    // 
    svg.append('g')
      .attr('id', 'vehicles');

    // Create areas for TYPES
    svg.append('g')
      .attr('id', 'types')
      .selectAll('path')
      .data(typeSeries, key)
      .enter()
      .append('path')
      .attr('class', 'linearareamap-area')
      .attr('opacity', 1)
      .attr('d', area)
      .attr('fill', function (d) {

        // Which type is this?
        const thisType = d.key;

        // New color var
        let color;

        switch (thisType) {
          case 'HEV':
            color = 'rgb(110, 64, 170)';
            break;
          case 'PHEV':
            color = 'rgb(76, 110, 219)';
            break;
          case 'BEV':
            color = 'rgb(35, 171, 216)';
            break;
          case 'FCEV':
            color = 'rgb(29, 223, 163)';
            break;
        }

        return color;
      })
      .on('click', function (d) {

        // Update view state
        viewState++;

        // 
        // TYPES
        // 

        // Which type was clicked?
        var thisType = d.key;

        // Update this for later reference
        viewType = thisType;

        // Generate a new data set with all-zero values, 
        // except for this type's data
        thisTypeDataset = [];

        for (var i = 0; i < typeDataset.length; i++) {
          thisTypeDataset[i] = {
            date: typeDataset[i].date,
            HEV: 0,
            PHEV: 0,
            BEV: 0,
            FCEV: 0,
            [thisType]: typeDataset[i][thisType]  // Overwrites the appropriate zero value above
          }
        }

        // console.log(thisTypeDataset);

        // Stack the data (even though there's now just one 'layer') and log it out
        var thisTypeSeries = typeStack(thisTypeDataset);
        // console.log(thisTypeSeries);

        // Bind the new data set to paths, overwriting old bound data.
        var paths = d3.selectAll('#types path')
          .data(thisTypeSeries, key)
          .classed('unclickable', true);

        // Transition areas into new positions (i.e., thisType's area
        // will go to a zero baseline; all others will flatten out).
        // 
        // Store this transition in a new variable for later reference.
        var areaTransitions = paths.transition()
          .duration(1000)
          .attr('d', area);

        // Update scale
        yScale.domain([
          0,
          d3.max(thisTypeDataset, function (d) {
            var sum = 0;

            // Calculate the total (sum) of sales of this type,
            // ignoring the others (for now)
            sum += d[thisType];

            return sum;
          })
        ]);

        // Append this transition to the one already in progress
        // (from above).  Transition areas to newly updated scale.
        areaTransitions.transition()
          .delay(200)
          .on('start', function () {

            // Transition axis to new scale concurrently
            d3.select('g.axis.y')
              .transition()
              .duration(1000)
              .call(yAxis);

          })
          .duration(1000)
          .attr('d', area)
          .transition()
          .on('start', function () {
            // Make vehicles visible instantly, so 
            // they are revealed when this fades out
            d3.selectAll('g#vehicles path')
              .attr('opacity', 1);
          })
          .duration(1000)
          .attr('opacity', 0)
          .on('end', function (d, i) {
            // Reveal back button
            if (i === 0) {
              toggleBackButton();
            }
          });

        // 
        // VEHICLES
        // 

        // Get all possible keys (make + model), but toss out 'date'
        var keysAll = Object.keys(dataset[0]).slice(1);
        // console.log(keysAll);

        // Loop once for each key, and save out just the ones of thisType (e.g. BEVs)
        var keysOfThisType = [];
        for (var i = 0; i < keysAll.length; i++) {
          if (dataset[0][keysAll[i]].type == thisType) {
            keysOfThisType.push(keysAll[i]);
          }
        }
        // console.log(keysOfThisType);

        // Give the new keys to the stack function
        vehicleStack.keys(keysOfThisType)
          .value(function value(d, key) {
            return d[key].sales;
          });

        // Stack the data and log it out
        var vehicleSeries = vehicleStack(dataset);
        // console.log(vehicleSeries);

        // Create areas for individual VEHICLES
        svg.select('g#vehicles')
          .selectAll('path')
          .data(vehicleSeries, key)
          .enter()
          .append('path')
          .attr('class', 'linearareamap-area')
          .attr('opacity', 0)
          .attr('d', area)
          .attr('fill', function (d, i) {

            // Which vehicle is this?
            var thisKey = d.key;

            // What 'type' is this vehicle?
            var thisType = d[0].data[thisKey].type;
            // console.log(thisType);

            // Used to find a cool color below
            var spread = 0.2;
            var startingPoint;

            // Choose where in the color spectrum we start, based on type
            switch (thisType) {
              case 'HEV':
                startingPoint = 0;
                break;
              case 'PHEV':
                startingPoint = 0.2;
                break;
              case 'BEV':
                startingPoint = 0.4;
                break;
              case 'FCEV':
                startingPoint = 0.6;
                break;
            }

            // How many cars?
            var numVehicles = keysOfThisType.length;

            // Get a value between 0.0 and 1.0
            var normalized = startingPoint + ((i / numVehicles) * spread);

            // Get that color on the spectrum
            return d3.interpolateCool(normalized);
          })
          .on('click', function (d) {

            // Update view state
            viewState++;

            // Hide the back button during this view transition
            toggleBackButton();

            // Which vehicle was clicked?
            const thisType = d.key;

            // Fade out all other vehicle areas
            d3.selectAll('g#vehicles path')
              .classed('unclickable', true)  // Prevent future clicks
              .filter(function (d) {  // Filter out 'this' one
                if (d.key !== thisType) {
                  return true;
                }
              })
              .transition()
              .duration(1000)
              .attr('opacity', 0);

            // Define area generator that will be used just this one time
            const singleVehicleArea = d3.area()
              .x(function (d) { return xScale(d.data.date); })
              .y0(function (d) { return yScale(0); })  // Note zero baseline
              .y1(function (d) { return yScale(d.data[thisType].sales); });
            // Note y1 uses the raw 'sales' value for 'this' vehicle,
            // not the stacked data values (e.g., d[0] or d[1]).

            // Use this new area generator to transition the area downward,
            // to have a flat (zero) baseline.
            const thisAreaTransition = d3.select(this)
              .transition()
              .delay(1000)
              .duration(1000)
              .attr('d', singleVehicleArea);

            // Update y scale domain, based on the sales for this vehicle only
            yScale.domain([
              0,
              d3.max(dataset, function (d) {
                return d[thisType].sales;
              })
            ]);

            // Transitions the clicked area and y axis into place, to fit the new domain
            thisAreaTransition
              .transition()
              .duration(1000)
              .attr('d', singleVehicleArea)
              .on('start', function () {

                // Transition axis to new scale concurrently
                d3.select('g.axis.y')
                  .transition()
                  .duration(1000)
                  .call(yAxis);

              })
              .on('end', function () {
                // Restore clickability (is that a word?)
                d3.select(this).classed('unclickable', 'false');

                // Reveal back button
                toggleBackButton();
              });

          })
          .append('title')  // Make tooltip
          .text(function (d) {
            return d.key;
          });

      })
      .append('title')  // Make tooltip
      .text(function (d) {
        return d.key;
      });

    // Create axes
    svg.append('g')
      .attr('class', 'axis x')
      .attr('transform', 'translate(0,' + (h - padding) + ')')
      .call(xAxis);

    svg.append('g')
      .attr('class', 'axis y')
      .attr('transform', 'translate(' + (w - padding * 2) + ',0)')
      .call(yAxis);

    // Create back button
    const backButton = svg.append('g')
      .attr('id', 'backButton')
      .attr('opacity', 0)				// Initially hidden
      .classed('unclickable', true)	// Initially not clickable
      .attr('transform', 'translate(' + xScale.range()[0] + ',' + yScale.range()[1] + ')');

    backButton.append('rect')
      .attr('x', 0)
      .attr('y', 0)
      .attr('rx', 5)
      .attr('rx', 5)
      .attr('width', 70)
      .attr('height', 30);

    backButton.append('text')
      .attr('x', 7)
      .attr('y', 20)
      .html('&larr; Back');

    // Define click behavior
    backButton.on('click', function () {

      // Hide the back button, as it was just clicked
      toggleBackButton();

      if (viewState == 1) {
        // Go back to default view

        // Update view state
        viewState--;

        // Re-bind type data and fade in types
        var typeAreaTransitions = d3.selectAll('g#types path')
          .data(typeSeries, key)
          .transition()
          .duration(250)
          .attr('opacity', 1)
          .on('end', function () {
            // Remove all vehicles once this fades in;
            // they will be recreated later as needed.
            d3.selectAll('g#vehicles path').remove();
          });

        // Set y scale back to original domain
        yScale.domain([
          0,
          d3.max(typeDataset, function (d) {
            let sum = 0;

            // Loops once for each row, to calculate
            // the total (sum) of sales of all vehicles
            for (let i = 0; i < types.length; i++) {
              sum += d[types[i]];
            }

            return sum;
          })
        ]);

        // Transition type areas and y scale back into place
        typeAreaTransitions.transition()
          .duration(1000)
          .on('start', function () {

            // Transition axis to new scale concurrently
            d3.select('g.axis.y')
              .transition()
              .duration(1000)
              .call(yAxis);

          })
          .attr('d', area)
          .on('end', function () {
            d3.select(this).classed('unclickable', false);
          });

      } else if (viewState == 2) {
        // Go back to vehicles view

        // Update view state
        viewState--;

        // Restore the old y scale
        yScale.domain([
          0,
          d3.max(thisTypeDataset, function (d) {
            let sum = 0;

            // Calculate the total (sum) of sales of this type
            sum += d[viewType];

            return sum;
          })
        ]);

        // Transition the y axis and visible area back into place
        d3.selectAll('g#vehicles path')
          .transition()
          .on('start', function () {

            // Transition y axis to new scale concurrently
            d3.select('g.axis.y')
              .transition()
              .duration(1000)
              .call(yAxis);

          })
          .duration(1000)
          .attr('d', area)  // Effectively changes only the selected area
          .transition()
          .duration(1000)
          .attr('opacity', 1)  // Fade in all areas
          .on('end', function (d, i) {

            // Restore clickability
            d3.select(this).classed('unclickable', false);

            // Reveal back button
            if (i === 0) {
              toggleBackButton();
            }

          });

      }

    });

  });



const toggleBackButton = function () {

  // Select the button
  const backButton = d3.select('#backButton');

  // Is the button hidden right now?
  const hidden = backButton.classed('unclickable');

  // Decide whether to reveal or hide it
  if (hidden) {

    // Reveal it

    // Set up dynamic button text
    var buttonText = '&larr; Back to ';

    // Text varies by mode and type
    if (viewState == 1) {
      buttonText += 'all types';
    } else if (viewState == 2) {
      buttonText += 'all ' + viewType + ' vehicles';
    }

    // Set text
    backButton.select('text').html(buttonText);

    // Resize button depending on text width
    const rectWidth = Math.round(backButton.select('text').node().getBBox().width + 16);
    backButton.select('rect').attr('width', rectWidth);

    // Fade button in
    backButton.classed('unclickable', false)
      .transition()
      .duration(500)
      .attr('opacity', 1);

  } else {

    // Hide it
    backButton.classed('unclickable', true)
      .transition()
      .duration(200)
      .attr('opacity', 0);
  }
};`;
  }

}
/* tslint:enable */
