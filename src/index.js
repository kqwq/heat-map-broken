// Import d3
import * as d3 from 'd3';
//import data from './data.json';

let data_csv = `DATE,START TIME,USAGE
2019-01-01,00:00,1.88
2019-01-01,01:00,2.69
2019-01-01,02:00,1.73
2019-01-01,03:00,1.60
2019-01-01,04:00,3.24
2019-01-01,05:00,2.00
2019-01-01,06:00,3.33
2019-01-01,07:00,3.79
2019-01-01,08:00,1.55
2019-01-01,09:00,-0.85
2019-01-01,10:00,-0.79
2019-01-01,11:00,-2.33
2019-01-01,12:00,-0.17
2019-01-01,13:00,6.10
2019-01-01,14:00,8.75
2019-01-01,15:00,9.01
2019-01-01,16:00,4.76
2019-01-01,17:00,2.78
2019-01-01,18:00,1.18
2019-01-01,19:00,4.42
2019-01-01,20:00,2.09
2019-01-01,21:00,3.22
2019-01-01,22:00,2.80
2019-01-01,23:00,0.90
2019-01-02,00:00,1.80
2019-01-02,01:00,2.95
2019-01-02,02:00,2.03
2019-01-02,03:00,2.10
2019-01-02,04:00,4.66
2019-01-02,05:00,3.79
2019-01-02,06:00,3.49
2019-01-02,07:00,3.77
2019-01-02,08:00,1.03
2019-01-02,09:00,-0.93
2019-01-02,10:00,-1.03
2019-01-02,11:00,-1.58
2019-01-02,12:00,0.25
2019-01-02,13:00,1.84
2019-01-02,14:00,1.05
2019-01-02,15:00,3.54
2019-01-02,16:00,3.72
2019-01-02,17:00,3.19
2019-01-02,18:00,4.14
2019-01-02,19:00,3.41
2019-01-02,20:00,2.44
2019-01-02,21:00,2.25
2019-01-02,22:00,3.04
2019-01-02,23:00,1.65
2019-01-03,00:00,2.93
2019-01-03,01:00,3.02
2019-01-03,02:00,1.92
2019-01-03,03:00,2.92
2019-01-03,04:00,2.53
2019-01-03,05:00,3.57
2019-01-03,06:00,2.56
2019-01-03,07:00,4.47
2019-01-03,08:00,3.17
2019-01-03,09:00,-0.73
2019-01-03,10:00,-0.99
2019-01-03,11:00,-2.02
2019-01-03,12:00,-0.29
2019-01-03,13:00,2.01
2019-01-03,14:00,0.82
2019-01-03,15:00,1.60
2019-01-03,16:00,3.10
2019-01-03,17:00,4.28
2019-01-03,18:00,1.77
2019-01-03,19:00,3.25
2019-01-03,20:00,2.58
2019-01-03,21:00,1.26
2019-01-03,22:00,3.34
2019-01-03,23:00,2.52
2019-01-04,00:00,2.93
2019-01-04,01:00,1.62
2019-01-04,02:00,3.34
2019-01-04,03:00,1.50
2019-01-04,04:00,1.89
2019-01-04,05:00,3.91
2019-01-04,06:00,3.32
2019-01-04,07:00,4.90
2019-01-04,08:00,0.87
2019-01-04,09:00,-0.15
2019-01-04,10:00,0.32
2019-01-04,11:00,-2.18
2019-01-04,12:00,-0.42
2019-01-04,13:00,0.78
2019-01-04,14:00,1.83
2019-01-04,15:00,0.64
2019-01-04,16:00,2.02
2019-01-04,17:00,3.77
2019-01-04,18:00,2.85
2019-01-04,19:00,4.15
2019-01-04,20:00,3.28
2019-01-04,21:00,2.80
2019-01-04,22:00,2.95
2019-01-04,23:00,0.88
2019-01-05,00:00,1.62
2019-01-05,01:00,1.51
2019-01-05,02:00,2.80
2019-01-05,03:00,1.36
2019-01-05,04:00,2.76
2019-01-05,05:00,2.70
2019-01-05,06:00,2.12
2019-01-05,07:00,4.40
2019-01-05,08:00,2.24
2019-01-05,09:00,1.54
2019-01-05,10:00,8.63
2019-01-05,11:00,9.25
2019-01-05,12:00,10.57
2019-01-05,13:00,12.31
2019-01-05,14:00,11.78
2019-01-05,15:00,7.00
2019-01-05,16:00,3.59
2019-01-05,17:00,3.89
2019-01-05,18:00,3.43
2019-01-05,19:00,3.37
2019-01-05,20:00,3.13
2019-01-05,21:00,2.21
2019-01-05,22:00,2.42
2019-01-05,23:00,1.30
2019-01-06,00:00,1.34
2019-01-06,01:00,2.50
2019-01-06,02:00,1.13
2019-01-06,03:00,3.08
2019-01-06,04:00,1.83
2019-01-06,05:00,1.80
2019-01-06,06:00,2.09
2019-01-06,07:00,3.84
2019-01-06,08:00,1.93
2019-01-06,09:00,2.93
2019-01-06,10:00,3.42
2019-01-06,11:00,1.66
2019-01-06,12:00,3.30
2019-01-06,13:00,2.75
2019-01-06,14:00,2.48
2019-01-06,15:00,4.53
2019-01-06,16:00,4.73
2019-01-06,17:00,3.58
2019-01-06,18:00,2.59
2019-01-06,19:00,1.98`






function Legend({
  color,
  title,
  tickSize = 6,
  width = 320,
  height = 44 + tickSize,
  marginTop = 18,
  marginRight = 0,
  marginBottom = 16 + tickSize,
  marginLeft = 0,
  ticks = width / 64,
  tickFormat,
  tickValues
} = {}) {
  console.log("aaa", color)
  const svg = d3.select("svg")
    .attr("width", width)
    .attr("height", height)
    .attr("viewBox", [0, 0, width, height])
    .style("overflow", "visible")
    .style("display", "block");

  let tickAdjust = g => g.selectAll(".tick line").attr("y1", marginTop + marginBottom - height);
  let x;

  // Continuous
  if (color.interpolate) {
    const n = Math.min(color.domain().length, color.range().length);

    x = color.copy().rangeRound(d3.quantize(d3.interpolate(marginLeft, width - marginRight), n));

    svg.append("image")
      .attr("x", marginLeft)
      .attr("y", marginTop)
      .attr("width", width - marginLeft - marginRight)
      .attr("height", height - marginTop - marginBottom)
      .attr("preserveAspectRatio", "none")
      .attr("xlink:href", ramp(color.copy().domain(d3.quantize(d3.interpolate(0, 1), n))).toDataURL());
  }

  // Sequential
  else if (color.interpolator) {
    x = Object.assign(color.copy()
      .interpolator(d3.interpolateRound(marginLeft, width - marginRight)), {
        range() {
          return [marginLeft, width - marginRight];
        }
      });

    svg.append("image")
      .attr("x", marginLeft)
      .attr("y", marginTop)
      .attr("width", width - marginLeft - marginRight)
      .attr("height", height - marginTop - marginBottom)
      .attr("preserveAspectRatio", "none")
      .attr("xlink:href", ramp(color.interpolator()).toDataURL());

    // scaleSequentialQuantile doesn’t implement ticks or tickFormat.
    if (!x.ticks) {
      if (tickValues === undefined) {
        const n = Math.round(ticks + 1);
        tickValues = d3.range(n).map(i => d3.quantile(color.domain(), i / (n - 1)));
      }
      if (typeof tickFormat !== "function") {
        tickFormat = d3.format(tickFormat === undefined ? ",f" : tickFormat);
      }
    }
  }

  // Threshold
  else if (color.invertExtent) {
    const thresholds = color.thresholds ? color.thresholds() // scaleQuantize
      :
      color.quantiles ? color.quantiles() // scaleQuantile
      :
      color.domain(); // scaleThreshold

    const thresholdFormat = tickFormat === undefined ? d => d :
      typeof tickFormat === "string" ? d3.format(tickFormat) :
      tickFormat;

    x = d3.scaleLinear()
      .domain([-1, color.range().length - 1])
      .rangeRound([marginLeft, width - marginRight]);

    svg.append("g")
      .selectAll("rect")
      .data(color.range())
      .join("rect")
      .attr("x", (d, i) => x(i - 1))
      .attr("y", marginTop)
      .attr("width", (d, i) => x(i) - x(i - 1))
      .attr("height", height - marginTop - marginBottom)
      .attr("fill", d => d);

    tickValues = d3.range(thresholds.length);
    tickFormat = i => thresholdFormat(thresholds[i], i);
  }

  // Ordinal
  else {
    x = d3.scaleBand()
      .domain(color.domain())
      .rangeRound([marginLeft, width - marginRight]);

    svg.append("g")
      .selectAll("rect")
      .data(color.domain())
      .join("rect")
      .attr("x", x)
      .attr("y", marginTop)
      .attr("width", Math.max(0, x.bandwidth() - 1))
      .attr("height", height - marginTop - marginBottom)
      .attr("fill", color);

    tickAdjust = () => {};
  }

  svg.append("g")
    .attr("transform", `translate(0,${height - marginBottom})`)
    .call(d3.axisBottom(x)
      .ticks(ticks, typeof tickFormat === "string" ? tickFormat : undefined)
      .tickFormat(typeof tickFormat === "function" ? tickFormat : undefined)
      .tickSize(tickSize)
      .tickValues(tickValues))
    .call(tickAdjust)
    .call(g => g.select(".domain").remove())
    .call(g => g.append("text")
      .attr("x", marginLeft)
      .attr("y", marginTop + marginBottom - height - 6)
      .attr("fill", "currentColor")
      .attr("text-anchor", "start")
      .attr("font-weight", "bold")
      .text(title));

  return svg.node();
}

function ramp(color, n = 256) {
  var canvas = document.createElement('canvas');
  canvas.width = n;
  canvas.height = 1;
  const context = canvas.getContext("2d");
  for (let i = 0; i < n; ++i) {
    context.fillStyle = color(i / (n - 1));
    context.fillRect(i, 0, 1, 1);
  }
  return canvas;
}

function legend({color, ...options}) {
  console.log("ccc", color, options)
  return Legend(color, options);
}


function generateChart() {

  


  // Definitions
  let margin = ({top: 70, right: 0, bottom: 0, left: 40})
  let width = 954
  let height =  margin.top + margin.bottom + (d3.timeDay.count(...dateExtent) + 1) * 10
  


  let parseData = d => ({ date: parseDate(`${d["DATE"]}T${d["START TIME"]}`), usage: +d["USAGE"] })
  let parseDate = d3.timeParse("%Y-%m-%dT%H:%M")




  let data = d3.csvParse(data_csv, parseData)



  
  let dateExtent = d3.extent(data, d => d.date)
  let x = d3.scaleBand(d3.range(24), [margin.left, width - margin.right]).round(true)
  let y = d3.scaleBand(d3.timeDays(...dateExtent), [margin.top, height - margin.bottom]).round(true)
  let color = () => {
    let [min, max] = d3.extent(data, d => d.usage);
    if (min < 0) {
      max = Math.max(-min, max);
      return d3.scaleDiverging([-max, 0, max], t => d3.interpolateRdBu(1 - t));
    }
    return d3.scaleSequential([0, max], d3.interpolateReds);
  }
  let xAxis = g => g
    .attr("transform", `translate(0,${margin.top})`)
    .call(d3.axisTop(x).tickFormat(formatHour))
    .call(g => g.select(".domain").remove())
  let yAxis = g => g
    .attr("transform", `translate(${margin.left},0)`)
    .call(d3.axisLeft(y).tickFormat(formatDay))
    .call(g => g.select(".domain").remove())
  let formatUsage = d3.format(".2f")
  let formatDate = d3.timeFormat("%B %-d, %-I %p")
  let formatDay = () => {
    const formatMonth = d3.timeFormat("%b %-d");
    const formatDate = d3.timeFormat("%-d");
    return d => (d.getDate() === 1 ? formatMonth : formatDate)(d);
  }
  let formatHour = () => {
    return d => d === 0 ? "12 AM" : d === 12 ? "12 PM" : (d % 12) + "";
  }



  // Create a heatmap
  const svg = d3.create("svg")
    .attr("viewBox", [0, 0, width, height])
    .style("background", "white")

  // Append to DOM
  

  // svg.append("g")
  //   .append(() => legend({
  //     color,
  //     title: "Net power consumption (kW)",
  //     tickFormat: "+d"
  //   }));

  svg.append("g")
    .call(xAxis);

  svg.append("g")
    .call(yAxis);

  svg.append("g")
    .selectAll("rect")
    .data(data)
    .join("rect")
    .attr("x", d => x(d.date.getHours()))
    .attr("y", d => y(d3.timeDay(d.date)))
    .attr("width", x.bandwidth() - 1)
    .attr("height", y.bandwidth() - 1)
    .attr("fill", d => color(d.usage))
    .append("title")
    .text(d => `${formatDate(d.date)}
${formatUsage(d.usage)} kW`);

  return svg.node();

}

d3.select("#chart").append(generateChart)
