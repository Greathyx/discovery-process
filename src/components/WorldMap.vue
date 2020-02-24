<template>
  <div id="chart-container">
    <fusioncharts
            :type="type"
            :width="width"
            :height="height"
            :dataFormat="dataFormat"
            :dataSource="dataSource"
            ref="fc"
    ></fusioncharts>
  </div>
</template>

<script>
    import worldMapData from '../data/worldMapData';
    import HappinessFeel from "../data/HappinessFeel";

    let dataset = [];
    let i_1995_1999 = -1;
    let i_2000_2004 = -1;
    let i_2005_2009 = -1;
    let i_2010_2014 = -1;


    for (let i = 0; i < HappinessFeel["1995_1999"].length; i++) {
        if (HappinessFeel["1995_1999"][i]["Country"] === "China") {
            i_1995_1999 = i;
        }
    }
    for (let i = 0; i < HappinessFeel["2000_2004"].length; i++) {
        if (HappinessFeel["2000_2004"][i]["Country"] === "China") {
            i_2000_2004 = i;
        }
    }
    for (let i = 0; i < HappinessFeel["2005_2009"].length; i++) {
        if (HappinessFeel["2005_2009"][i]["Country"] === "China") {
            i_2005_2009 = i;
        }
    }
    for (let i = 0; i < HappinessFeel["2010_2014"].length; i++) {
        if (HappinessFeel["2010_2014"][i]["Country"] === "China") {
            i_2010_2014 = i;
        }
    }

    for (let i = 0; i < 4; i++) {
        dataset = [
            {
                "seriesname": "Feeling of Happiness - Very happy",
                "data": [
                    {
                        "value": i_1995_1999 === -1 ? 0 : HappinessFeel["1995_1999"][i_1995_1999]["Very happy"]
                    },
                    {
                        "value": i_2000_2004 === -1 ? 0 : HappinessFeel["2000_2004"][i_2000_2004]["Very happy"]
                    },
                    {
                        "value": i_2005_2009 === -1 ? 0 : HappinessFeel["2005_2009"][i_2005_2009]["Very happy"]
                    },
                    {
                        "value": i_2010_2014 === -1 ? 0 : HappinessFeel["2010_2014"][i_2010_2014]["Very happy"]
                    }
                ]
            },
            {
                "seriesname": "Feeling of Happiness - Quite happy",
                "data": [
                    {
                        "value": i_1995_1999 === -1 ? 0 : HappinessFeel["1995_1999"][i_1995_1999]["Quite happy"]
                    },
                    {
                        "value": i_2000_2004 === -1 ? 0 : HappinessFeel["2000_2004"][i_2000_2004]["Quite happy"]
                    },
                    {
                        "value": i_2005_2009 === -1 ? 0 : HappinessFeel["2005_2009"][i_2005_2009]["Quite happy"]
                    },
                    {
                        "value": i_2010_2014 === -1 ? 0 : HappinessFeel["2010_2014"][i_2010_2014]["Quite happy"]
                    }
                ]
            },
            {
                "seriesname": "Feeling of Happiness - Not very happy",
                "data": [
                    {
                        "value": i_1995_1999 === -1 ? 0 : HappinessFeel["1995_1999"][i_1995_1999]["Not very happy"]
                    },
                    {
                        "value": i_2000_2004 === -1 ? 0 : HappinessFeel["2000_2004"][i_2000_2004]["Not very happy"]
                    },
                    {
                        "value": i_2005_2009 === -1 ? 0 : HappinessFeel["2005_2009"][i_2005_2009]["Not very happy"]
                    },
                    {
                        "value": i_2010_2014 === -1 ? 0 : HappinessFeel["2010_2014"][i_2010_2014]["Not very happy"]
                    }
                ]
            },
            {
                "seriesname": "Feeling of Happiness - Not at all happy",
                "data": [
                    {
                        "value": i_1995_1999 === -1 ? 0 : HappinessFeel["1995_1999"][i_1995_1999]["Not at all happy"]
                    },
                    {
                        "value": i_2000_2004 === -1 ? 0 : HappinessFeel["2000_2004"][i_2000_2004]["Not at all happy"]
                    },
                    {
                        "value": i_2005_2009 === -1 ? 0 : HappinessFeel["2005_2009"][i_2005_2009]["Not at all happy"]
                    },
                    {
                        "value": i_2010_2014 === -1 ? 0 : HappinessFeel["2010_2014"][i_2010_2014]["Not at all happy"]
                    }
                ]
            },
            {
                "seriesname": "Feeling of Happiness - Not know",
                "data": [
                    {
                        "value": i_1995_1999 === -1 ? 0 : HappinessFeel["1995_1999"][i_1995_1999]["Not know"]
                    },
                    {
                        "value": i_2000_2004 === -1 ? 0 : HappinessFeel["2000_2004"][i_2000_2004]["Not know"]
                    },
                    {
                        "value": i_2005_2009 === -1 ? 0 : HappinessFeel["2005_2009"][i_2005_2009]["Not know"]
                    },
                    {
                        "value": i_2010_2014 === -1 ? 0 : HappinessFeel["2010_2014"][i_2010_2014]["Not know"]
                    }
                ]
            }
        ]
    }

    console.log(dataset);

    export default {
        data() {
            return {
                type: "worldwithcountries",
                renderAt: "chart-container",
                width: "90%",
                height: "90%",
                dataFormat: "json",
                dataSource: worldMapData,
            }
        },
        methods: {
            configureLink: function (chart) {
                this.chartInstance = chart; // Save it for further use

                // Configure Drilldown attributes
                this.chartInstance.configureLink({
                    type: "msstackedcolumn2d",
                    width: "90%",
                    height: "150%",
                    overlayButton: {
                        message: 'Back',
                        fontColor: '#333333',
                        bgColor: '#fef2f3',
                        borderColor: '#333333',
                    }
                })
            }
        },
        mounted: function () {
            // this.$refs.fc gets the vue-fusionchart component
            this.configureLink(this.$refs.fc.chartObj);
        }
    };
</script>