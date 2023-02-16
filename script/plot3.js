"use strict";

var data = [
    ["01/01/90", 11.9],
    ["02/01/90", 12],
    ["03/01/90", 11.8],
    ["04/01/90", 12],
    ["05/01/90", 12.1],
    ["06/01/90", 12],
    ["07/01/90", 12.1],
    ["08/01/90", 12.2],
    ["09/01/90", 12.2],
    ["10/01/90", 12.2],
    ["11/01/90", 12.2],
    ["12/01/90", 12.1],
    ["01/01/91", 11.9],
    ["02/01/91", 11.9],
    ["03/01/91", 11.9],
    ["04/01/91", 11.8],
    ["05/01/91", 11.7],
    ["06/01/91", 11.8],
    ["07/01/91", 11.7],
    ["08/01/91", 11.7],
    ["09/01/91", 12],
    ["10/01/91", 11.5],
    ["11/01/91", 11.5],
    ["12/01/91", 11.6],
    ["01/01/92", 12],
    ["02/01/92", 12],
    ["03/01/92", 12.2],
    ["04/01/92", 12.4],
    ["05/01/92", 12.5],
    ["06/01/92", 12.4],
    ["07/01/92", 12.5],
    ["08/01/92", 12.5],
    ["09/01/92", 12.6],
    ["10/01/92", 12.8],
    ["11/01/92", 12.7],
    ["12/01/92", 12.7],
    ["01/01/93", 12.7],
    ["02/01/93", 12.8],
    ["03/01/93", 12.7],
    ["04/01/93", 12.5],
    ["05/01/93", 12.6],
    ["06/01/93", 12.7],
    ["07/01/93", 13],
    ["08/01/93", 13.1],
    ["09/01/93", 13],
    ["10/01/93", 13.1],
    ["11/01/93", 13.1],
    ["12/01/93", 13.2],
    ["01/01/94", 13.2],
    ["02/01/94", 13.2],
    ["03/01/94", 13.2],
    ["04/01/94", 13.6],
    ["05/01/94", 13.8],
    ["06/01/94", 13.6],
    ["07/01/94", 13.3],
    ["08/01/94", 13.6],
    ["09/01/94", 13.8],
    ["10/01/94", 13.9],
    ["11/01/94", 14.1],
    ["12/01/94", 14.3],
    ["01/01/95", 14.5],
    ["02/01/95", 14.4],
    ["03/01/95", 14.5],
    ["04/01/95", 14.6],
    ["05/01/95", 14.7],
    ["06/01/95", 14.8],
    ["07/01/95", 14.9],
    ["08/01/95", 15.1],
    ["09/01/95", 15.2],
    ["10/01/95", 15.5],
    ["11/01/95", 15.6],
    ["12/01/95", 15.8],
    ["01/01/96", 15.5],
    ["02/01/96", 15.6],
    ["03/01/96", 15.7],
    ["04/01/96", 15.6],
    ["05/01/96", 15.7],
    ["06/01/96", 15.8],
    ["07/01/96", 16.1],
    ["08/01/96", 15.8],
    ["09/01/96", 15.8],
    ["10/01/96", 15.3],
    ["11/01/96", 15.5],
    ["12/01/96", 15.4],
    ["01/01/97", 15.9],
    ["02/01/97", 16],
    ["03/01/97", 16],
    ["04/01/97", 16],
    ["05/01/97", 16],
    ["06/01/97", 16],
    ["07/01/97", 15.9],
    ["08/01/97", 15.8],
    ["09/01/97", 16],
    ["10/01/97", 15.9],
    ["11/01/97", 15.8],
    ["12/01/97", 15.9],
    ["01/01/98", 16],
    ["02/01/98", 16.1],
    ["03/01/98", 16.1],
    ["04/01/98", 16.4],
    ["05/01/98", 16.5],
    ["06/01/98", 16.5],
    ["07/01/98", 16.5],
    ["08/01/98", 16.7],
    ["09/01/98", 16.9],
    ["10/01/98", 16.9],
    ["11/01/98", 17],
    ["12/01/98", 16.8],
    ["01/01/99", 16.9],
    ["02/01/99", 16.8],
    ["03/01/99", 17],
    ["04/01/99", 16.9],
    ["05/01/99", 16.9],
    ["06/01/99", 16.7],
    ["07/01/99", 16.7],
    ["08/01/99", 16.9],
    ["09/01/99", 16.6],
    ["10/01/99", 16.7],
    ["11/01/99", 16.8],
    ["12/01/99", 17.1],
    ["01/01/00", 17.1],
    ["02/01/00", 17.1],
    ["03/01/00", 17],
    ["04/01/00", 17.1],
    ["05/01/00", 17],
    ["06/01/00", 17],
    ["07/01/00", 17.8],
    ["08/01/00", 17.6],
    ["09/01/00", 17.5],
    ["10/01/00", 17.4],
    ["11/01/00", 17.4],
    ["12/01/00", 17.2],
    ["01/01/01", 16.8],
    ["02/01/01", 16.9],
    ["03/01/01", 16.8],
    ["04/01/01", 16.5],
    ["05/01/01", 16.7],
    ["06/01/01", 16.7],
    ["07/01/01", 16.8],
    ["08/01/01", 16.9],
    ["09/01/01", 17],
    ["10/01/01", 17],
    ["11/01/01", 16.8],
    ["12/01/01", 17],
    ["01/01/02", 17.2],
    ["02/01/02", 17.3],
    ["03/01/02", 17.4],
    ["04/01/02", 17.4],
    ["05/01/02", 17.5],
    ["06/01/02", 17.5],
    ["07/01/02", 17.2],
    ["08/01/02", 17],
    ["09/01/02", 16.9],
    ["10/01/02", 17],
    ["11/01/02", 17.2],
    ["12/01/02", 17.3],
    ["01/01/03", 17.3],
    ["02/01/03", 17.1],
    ["03/01/03", 17.2],
    ["04/01/03", 17],
    ["05/01/03", 16.8],
    ["06/01/03", 16.8],
    ["07/01/03", 17.4],
    ["08/01/03", 17.2],
    ["09/01/03", 17.2],
    ["10/01/03", 17.3],
    ["11/01/03", 17.2],
    ["12/01/03", 17.2],
    ["01/01/04", 17.1],
    ["02/01/04", 17.2],
    ["03/01/04", 17.3],
    ["04/01/04", 17.5],
    ["05/01/04", 17.5],
    ["06/01/04", 17.6],
    ["07/01/04", 17.9],
    ["08/01/04", 18.1],
    ["09/01/04", 18.1],
    ["10/01/04", 18.4],
    ["11/01/04", 18.5],
    ["12/01/04", 18.5],
    ["01/01/05", 18.6],
    ["02/01/05", 18.5],
    ["03/01/05", 18.3],
    ["04/01/05", 18.6],
    ["05/01/05", 18.7],
    ["06/01/05", 18.7],
    ["07/01/05", 18.5],
    ["08/01/05", 18.6],
    ["09/01/05", 18.8],
    ["10/01/05", 18.5],
    ["11/01/05", 18.6],
    ["12/01/05", 18.7],
    ["01/01/06", 19.1],
    ["02/01/06", 19.3],
    ["03/01/06", 19.6],
    ["04/01/06", 19.5],
    ["05/01/06", 19.6],
    ["06/01/06", 19.8],
    ["07/01/06", 19.9],
    ["08/01/06", 19.6],
    ["09/01/06", 20],
    ["10/01/06", 20.2],
    ["11/01/06", 20.4],
    ["12/01/06", 20.7],
    ["01/01/07", 21],
    ["02/01/07", 21],
    ["03/01/07", 20.9],
    ["04/01/07", 20.8],
    ["05/01/07", 20.9],
    ["06/01/07", 20.8],
    ["07/01/07", 20.8],
    ["08/01/07", 20.7],
    ["09/01/07", 20.8],
    ["10/01/07", 20.5],
    ["11/01/07", 20.6],
    ["12/01/07", 20.5],
    ["01/01/08", 20.4],
    ["02/01/08", 20.5],
    ["03/01/08", 20.4],
    ["04/01/08", 20.4],
    ["05/01/08", 20.5],
    ["06/01/08", 20.4],
    ["07/01/08", 20.4],
    ["08/01/08", 20.6],
    ["09/01/08", 20.8],
    ["10/01/08", 20.5],
    ["11/01/08", 20.5],
    ["12/01/08", 20.6],
    ["01/01/09", 20.1],
    ["02/01/09", 20],
    ["03/01/09", 20],
    ["04/01/09", 19.9],
    ["05/01/09", 19.8],
    ["06/01/09", 19.8],
    ["07/01/09", 19.9],
    ["08/01/09", 19.7],
    ["09/01/09", 19.7],
    ["10/01/09", 19.8],
    ["11/01/09", 19.7],
    ["12/01/09", 19.7],
    ["01/01/10", 19.8],
    ["02/01/10", 19.8],
    ["03/01/10", 19.6],
    ["04/01/10", 20],
    ["05/01/10", 20],
    ["06/01/10", 20.1],
    ["07/01/10", 20],
    ["08/01/10", 20.1],
    ["09/01/10", 20.1],
    ["10/01/10", 20.1],
    ["11/01/10", 20.2],
    ["12/01/10", 20.2],
    ["01/01/11", 20.2],
    ["02/01/11", 20.2],
    ["03/01/11", 20.3],
    ["04/01/11", 20.5],
    ["05/01/11", 20.5],
    ["06/01/11", 20.5],
    ["07/01/11", 20.7],
    ["08/01/11", 20.7],
    ["09/01/11", 20.9],
    ["10/01/11", 20.9],
    ["11/01/11", 20.9],
    ["12/01/11", 20.9],
    ["01/01/12", 21.1],
    ["02/01/12", 21.2],
    ["03/01/12", 21.4],
    ["04/01/12", 21.5],
    ["05/01/12", 21.6],
    ["06/01/12", 21.6],
    ["07/01/12", 21.5],
    ["08/01/12", 21.6],
    ["09/01/12", 21.6],
    ["10/01/12", 21.7],
    ["11/01/12", 21.9],
    ["12/01/12", 22.3],
    ["01/01/13", 22.3],
    ["02/01/13", 22.4],
    ["03/01/13", 22.2],
    ["04/01/13", 22.1],
    ["05/01/13", 22.2],
    ["06/01/13", 22.4],
    ["07/01/13", 22.2],
    ["08/01/13", 22.2]
];
/**
 * @param {number} count - number to be formatted
 * @return - formatted number ex. 24K, 10M
 */
var round = function round(count) {
    if (count < 1000) {
        return count + "%";
    } else if (count < 1000000) {
        return Math.round(count / 1000) + "K";
    } else {
        return Math.round(count / 1000 / 1000) + "M";
    }
};

/*
 * @param {Array} this.state.data - Arrar of arrays. ex. [["01/31/2016", 200], ["02/07/2016", 350]]
 */
/* 調整圖表大小 */
/* ----------char1---------- */
var chart = function chart() {
    var chartWidth = 655;
    var chartHeight = 445;
    var margin = { top: 30, right: 30, bottom: 40, left: 60 };

    // define axis ranges
    var xExtents = d3.extent(data, function (d) {
        return new Date(d[0]);
    });
    var yExtents = d3.extent(data, function (d) {
        return d[1];
    });

    // scale for x axis. this will also be used to convert data.dates to their appropriate svg coordinate
    var x = d3.time
        .scale()
        .domain([xExtents[0], xExtents[1]])
        .rangeRound([0, chartWidth - margin.left - margin.right]);

    // scale for y axis. this will also be used to convert data.values to their appropriate svg coordinate
    var y = d3.scale
        .linear()
        .domain([yExtents[0], Math.ceil(yExtents[0]) * 2])
        .range([chartHeight - margin.top - margin.bottom, 0]);

    // define the x axis
    var xAxis = d3.svg
        .axis()
        .scale(x)
        .orient("bottom")
        .innerTickSize(-chartHeight - margin.top - margin.bottom)
        .outerTickSize(0)
        .ticks(data.length)
        .tickFormat(d3.time.format("%m/%y"))
        .tickPadding(20);

    // define the y axis
    var yAxis = d3.svg
        .axis()
        .scale(y)
        .orient("left")
        .ticks(5)
        .tickSize(0)
        .tickFormat(round)
        .tickPadding(10);

    // graph line definition
    var line = d3.svg
        .line()
        .x(function (d) {
            return x(new Date(d[0]));
        })
        .y(function (d) {
            return y(d[1]);
        });

    // define the svg
    $("#chart3").empty();
    var chart = d3
        .select("#chart3")
        .append("svg")
        .attr("class", "line-chart")
        .attr("width", chartWidth)
        .attr("height", chartHeight)
        .append("g")
        .attr("class", "main")
        .attr("transform", "translate(" + margin.left + ", " + margin.top + ")");

    // draw x axis
    chart
        .append("g")
        .attr("class", "x-axis")
        .attr(
            "transform",
            "translate(0, " + (chartHeight - margin.top - margin.bottom) + ")"
        )
        .call(xAxis);

    // draw y axis
    chart
        .append("g")
        .attr("class", "y-axis")
        .attr("transform", "translate(0,0)")
        .call(yAxis);

    // add lines to the graph
    chart
        .append("g")
        .attr("class", "line")
        .selectAll("path")
        .data([data])
        .enter()
        .append("path")
        .attr("d", line);

    // tooltip
    var tooltip = d3
        .select("#chart3")
        .append("div")
        .attr("class", "line-chart tooltip")
        .style("opacity", 0);

    // hover dot
    chart
        .selectAll("circle")
        .data(data)
        .enter()
        .append("circle")
        .attr("id", function (d, i) {
            return "dot-" + i;
        })
        .attr("cx", function (d, i) {
            return x(new Date(d[0]));
        })
        .attr("cy", function (d, i) {
            return y(d[1]);
        })
        .attr("r", 4)
        .style("opacity", 0);

    var barWidth = chartWidth / data.length;

    // rects for hover reference
    chart
        .selectAll("rect.hover-line")
        .data(data)
        .enter()
        .append("rect")
        .style("opacity", 0)
        .attr("width", 2)
        .attr("class", "line-chart hover-line")
        .attr("id", function (d, i) {
            return "line-" + i;
        })
        .attr("height", function (d) {
            return chartHeight - y(d[1]) - margin.top - margin.bottom;
        })
        .attr("x", function (d, i) {
            return x(new Date(d[0])) - 2 / 2;
        })
        .attr("y", function (d, i) {
            return y(d[1]) + 3;
        }); // add height of dot to prevent overlap

    chart
        .selectAll("rect.hover-box")
        .data(data)
        .enter()
        .append("rect")
        .style("opacity", 0)
        .attr("class", "line-chart hover-box")
        .attr("width", barWidth)
        .attr("height", function (d) {
            return chartHeight - y(d[1]) - margin.top - margin.bottom;
        })
        .attr("x", function (d, i) {
            return x(new Date(d[0])) - barWidth / 2;
        })
        .attr("y", function (d, i) {
            return y(d[1]);
        })

        /* 滑上去的動作 */
        .on("mouseover", function (d, i) {
            var offset = $("#chart3").offset(); // { left: 0, top: 0 }
            var xtranslate = x(new Date(d[0]));

            var chartFormat = d3.time.format("");
            tooltip
                .style("opacity", 1)
                .style("left", function () {
                    return x(new Date(d[0])) - 2 / 2 + margin.left + 25 + "px";
                })
                .style("top", d3.event.pageY - offset.top + 20 + "px")
                .html(chartFormat + d[1] + "%"); //輔助圖單位

            // hover line
            var currentLine = "#line-" + i;
            d3.select(currentLine).style("opacity", 1);

            // hover dot
            var currentDot = "#dot-" + i;
            d3.select(currentDot).style("opacity", 1);

            // hover date
            d3.selectAll('g[transform = "translate(' + xtranslate + ',0)"]')
                .select("text")
                .style("opacity", 1);
        })
        .on("mouseout", function (d, i) {
            var xtranslate = x(new Date(d[0]));

            tooltip.style("opacity", 0);

            // hover line
            var currentLine = "#line-" + i;
            d3.select(currentLine).style("opacity", 0);

            // hover dot
            var currentDot = "#dot-" + i;
            d3.select(currentDot).style("opacity", 0);

            // hover date
            d3.selectAll('g[transform = "translate(' + xtranslate + ',0)"]')
                .select('text[style = "text-anchor: middle; opacity: 1;"]')
                .style("opacity", "0");
        });
};


chart();