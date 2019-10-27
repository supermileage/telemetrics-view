import moment from "moment";
import { chartBuilder } from "../helpers/builders.js";
import React from "react";
import Graph from "../components/Graph.js";
import Map from "../components/Map.js";

let datasets = [
  {
    label: "Temperature",
    id: "Temperature",
    handler: function(retval, d) {
      let retVals = d.entity.properties.data.stringValue.split(" ");
      let elem = {};
      elem.y = parseFloat(retVals[0]);
      elem.x = moment(d.entity.properties.published_at.stringValue);

      // Check if the last element was greater than 10 minutes ago, we disjoint it then
      if (
        retval.length > 0 &&
        elem.x.unix() - moment(retval[retval.length - 1].x).unix() > 600
      ) {
        retval.push({
          y: NaN,
          x: elem.x
        });
      }
      retval.push(elem);
    },
    parser: function(label, id, data) {
      return chartBuilder(label, id, data);
    },
    element: function(data) {
      return <Graph data={data || {}} options={this.options} />;
    },
    options: {
      animation: {
        duration: 500
      },
      scales: {
        xAxes: [
          {
            gridLines: {
              display: false
            },
            type: "time",
            distribution: "linear", // Distances can vary, based on time
            scaleLabel: {
              display: true,
              labelString: "Time"
            }
          }
        ],
        yAxes: [
          {
            id: "Temperature",
            position: "left",
            gridLines: {
              display: false
            },
            scaleLabel: {
              display: true,
              labelString: "Temperature (C)"
            }
          }
        ]
      }
    }
  },
  {
    label: "Power",
    id: "Power",
    handler: function(retval, d) {
      let elem = {};
      elem.y = parseFloat(d.entity.properties.data.stringValue);
      elem.x = moment(d.entity.properties.published_at.stringValue);

      // Check if the last element was greater than 10 minutes ago, we disjoint it then
      if (
        retval.length > 0 &&
        elem.x.unix() - moment(retval[retval.length - 1].x).unix() > 600
      ) {
        retval.push({
          y: NaN,
          x: elem.x
        });
      }
      retval.push(elem);
    },
    parser: function(label, id, data) {
      return chartBuilder(label, id, data);
    },
    element: function(data) {
      return <Graph data={data || {}} options={this.options} />;
    },
    options: {
      animation: {
        duration: 500
      },
      scales: {
        xAxes: [
          {
            gridLines: {
              display: false
            },
            type: "time",
            distribution: "linear", // Distances can vary, based on time
            scaleLabel: {
              display: true,
              labelString: "Time"
            }
          }
        ],
        yAxes: [
          {
            id: "Power",
            position: "left",
            gridLines: {
              display: false
            },
            scaleLabel: {
              display: true,
              labelString: "State of Charge (%)"
            }
          }
        ]
      }
    }
  },
  {
    label: "Location",
    id: "Location",
    handler: function(retval, d) {
      let NMEASeq = d.entity.properties.data.stringValue.split(",");
      let lat =
        parseInt(parseInt(NMEASeq[3]) / 100) +
        parseFloat(parseFloat(NMEASeq[3]) % 100) / 60;
      let lng =
        parseInt(parseInt(NMEASeq[5]) / 100) +
        parseFloat(parseFloat(NMEASeq[5]) % 100) / 60;
      lat = NMEASeq[4] === "S" ? -lat : lat;
      lng = NMEASeq[6] === "W" ? -lng : lng;
      let elem = { lat, lng };
      retval.push(elem);
    },
    parser: function(label, id, data) {
      return data;
    },
    element: function(data) {
      return <Map data={data || []} />;
    }
  }
];

export default datasets;