<template>
  <div id="chart-container">
    <fusioncharts
            :type="type"
            :width="width"
            :height="height"
            :dataFormat="dataFormat"
            :dataSource="dataSource"
    ></fusioncharts>
  </div>
</template>

<script>
  // import NationProudData from '../data/NationProud';
  let dataset = [];

  dataset = [
      {
          seriesname: "Ice Cream",
          anchorbgcolor: "#5D62B5",
          data: [
              {
                  x: "80",
                  y: "15000",
                  z: "24",
                  name: "Nike"
              },
              {
                  x: "60",
                  y: "18500",
                  z: "26",
                  name: "Adidas"
              },
          ]
      },
      {
          seriesname: "Beer",
          anchorbgcolor: "#29C3BE",
          data: [
              {
                  x: "50",
                  y: "19450",
                  z: "19",
                  name: "Puma"
              },
              {
                  x: "65",
                  y: "10500",
                  z: "8",
                  name: "Fila"
              },
          ]
      }
  ];

    export default {
        data: () => ({
            type: "bubble",
            width: "100%",
            height: "100%",
            dataFormat: "json",
            dataSource: {
                chart: {
                    theme: "fusion",
                    caption: "Sales & Profit Analysis",
                    subcaption: "For Last Quarter",
                    xaxisminvalue: "0",
                    xaxismaxvalue: "100",
                    yaxisminvalue: "0",
                    yaxismaxvalue: "30000",
                    xaxisname: "Average Price",
                    yaxisname: "Units Sold",
                    plottooltext: "$name : Profit Contribution: $zvalue%",
                    drawquadrant: "1",
                    quadrantlabeltl: "Low Price / High Sales",
                    quadrantlabeltr: "High Price / High Sales",
                    quadrantlabelbl: "Low Price / Low Sales",
                    quadrantlabelbr: "High Price / Low Sales",
                    quadrantxval: "54",
                    quadrantyval: "12000",
                    quadrantlinealpha: "50",
                    quadrantlinethickness: "2"
                },
                categories: [
                    {
                        category: [
                            {
                                label: "",
                                x: "0"
                            },
                            {
                                label: "1995-1999",
                                x: "20",
                                showverticalline: "1"
                            },
                            {
                                label: "2000-2004",
                                x: "40",
                                showverticalline: "1"
                            },
                            {
                                label: "2005-2009",
                                x: "60",
                                showverticalline: "1"
                            },
                            {
                                label: "2010-2014",
                                x: "80",
                                showverticalline: "1"
                            },
                            {
                                label: "",
                                x: "100",
                                showverticalline: "1"
                            }
                        ]
                    }
                ],
                dataset: dataset,
                trendlines: [
                    {
                        line: [
                            {
                                startvalue: "20000",
                                endvalue: "30000",
                                istrendzone: "1",
                                color: "#aaaaaa",
                                alpha: "14"
                            },
                            {
                                startvalue: "10000",
                                endvalue: "20000",
                                istrendzone: "1",
                                color: "#aaaaaa",
                                alpha: "7"
                            }
                        ]
                    }
                ]
            }
        })
    }
</script>