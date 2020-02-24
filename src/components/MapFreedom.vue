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
    import jsonData from '../data/Freedom';

    const country_list = ["China", "Singapore", "Japan", "Argentina", "Australia", "Brazil",
        "Bulgaria", "Colombia", "Chile", "Georgia", "India", "Mexico", "New Zealand", "Pakistan",
        "Peru", "Philippines", "Poland", "Romania", "Russia", "Serbia", "Slovenia",
        "South Africa", "South Korea", "Spain", "Sweden", "Turkey", "Ukraine", "United States",
        "Uruguay"];
    const country_id_list = [101, 119, 107, 25, 175, 27, 135, 29, 28, 103, 104, 16, 181, 116,
        35, 117, 159, 161, 118, 163, 165, 80, 110, 166, 167, 173, 169, 23, 37];
    const country_abbr_list = ["CN", "SG", "JP", "AR", "AU", "BR", "BG", "CO", "CL", "GE", "IN",
        "MX", "NZ", "PK", "PE", "PH", "PL", "RO", "RU", "CS", "SI", "ZA", "KR", "ES", "SE", "TK",
        "UA", "US", "UY"];

    let data = [];
    for (let i = 0; i < country_id_list.length; i++) {
        let element = {
            "id": "" + country_id_list[i],
            "value": 1,
            "FontSize": "12",
            "FontColor": "#383838",
            "FontBold": "1",
            "showLabel": "1",
            "useSNameInLabels": "1",
            "link": "newchart-json-" + country_abbr_list[i]
        };
        data.push(element);
    }

    let linkedData = [];
    for (let i = 0; i < country_list.length; i++) {
        let i_1995_1999 = -1;
        let i_2000_2004 = -1;
        let i_2005_2009 = -1;
        let i_2010_2014 = -1;

        for (let j = 0; j < jsonData["1995_1999"].length; j++) {
            if (jsonData["1995_1999"][j]["Country"] === country_list[i]) {
                i_1995_1999 = j;
            }
        }
        for (let j = 0; j < jsonData["2000_2004"].length; j++) {
            if (jsonData["2000_2004"][j]["Country"] === country_list[i]) {
                i_2000_2004 = j;
            }
        }
        for (let j = 0; j < jsonData["2005_2009"].length; j++) {
            if (jsonData["2005_2009"][j]["Country"] === country_list[i]) {
                i_2005_2009 = j;
            }
        }
        for (let j = 0; j < jsonData["2010_2014"].length; j++) {
            if (jsonData["2010_2014"][j]["Country"] === country_list[i]) {
                i_2010_2014 = j;
            }
        }

        let element = {
            "id": "" + country_abbr_list[i],
            "linkedchart": {
                "chart": {
                    "caption": "Situation Change from 1995-2014",
                    "showvalues": "1",
                    "decimals": "1",
                    "numbersuffix": "%",
                    "valuefontcolor": "#FFFFFF",
                    "plottooltext": "Percentage from <b>$seriesName</b> in $label was <b>$dataValue</b>",
                    "theme": "fusion"
                },
                "categories": [
                    {
                        "category": [
                            {
                                "label": "1995-1999"
                            },
                            {
                                "label": "2000-2004"
                            },
                            {
                                "label": "2005-2009"
                            },
                            {
                                "label": "2010-2014"
                            }
                        ]
                    }
                ],
                "dataset": [
                    {
                        "seriesname": "No choice at all",
                        "data": [
                            {
                                "value": i_1995_1999 === -1 ? 0 : jsonData["1995_1999"][i_1995_1999]["No choice at all"]
                            },
                            {
                                "value": i_2000_2004 === -1 ? 0 : jsonData["2000_2004"][i_2000_2004]["No choice at all"]
                            },
                            {
                                "value": i_2005_2009 === -1 ? 0 : jsonData["2005_2009"][i_2005_2009]["No choice at all"]
                            },
                            {
                                "value": i_2010_2014 === -1 ? 0 : jsonData["2010_2014"][i_2010_2014]["No choice at all"]
                            }
                        ]
                    },
                    {
                        "seriesname": "2",
                        "data": [
                            {
                                "value": i_1995_1999 === -1 ? 0 : jsonData["1995_1999"][i_1995_1999]["2"]
                            },
                            {
                                "value": i_2000_2004 === -1 ? 0 : jsonData["2000_2004"][i_2000_2004]["2"]
                            },
                            {
                                "value": i_2005_2009 === -1 ? 0 : jsonData["2005_2009"][i_2005_2009]["2"]
                            },
                            {
                                "value": i_2010_2014 === -1 ? 0 : jsonData["2010_2014"][i_2010_2014]["2"]
                            }
                        ]
                    },
                    {
                        "seriesname": "3",
                        "data": [
                            {
                                "value": i_1995_1999 === -1 ? 0 : jsonData["1995_1999"][i_1995_1999]["3"]
                            },
                            {
                                "value": i_2000_2004 === -1 ? 0 : jsonData["2000_2004"][i_2000_2004]["3"]
                            },
                            {
                                "value": i_2005_2009 === -1 ? 0 : jsonData["2005_2009"][i_2005_2009]["3"]
                            },
                            {
                                "value": i_2010_2014 === -1 ? 0 : jsonData["2010_2014"][i_2010_2014]["3"]
                            }
                        ]
                    },
                    {
                        "seriesname": "4",
                        "data": [
                            {
                                "value": i_1995_1999 === -1 ? 0 : jsonData["1995_1999"][i_1995_1999]["4"]
                            },
                            {
                                "value": i_2000_2004 === -1 ? 0 : jsonData["2000_2004"][i_2000_2004]["4"]
                            },
                            {
                                "value": i_2005_2009 === -1 ? 0 : jsonData["2005_2009"][i_2005_2009]["4"]
                            },
                            {
                                "value": i_2010_2014 === -1 ? 0 : jsonData["2010_2014"][i_2010_2014]["4"]
                            }
                        ]
                    },
                    {
                        "seriesname": "5",
                        "data": [
                            {
                                "value": i_1995_1999 === -1 ? 0 : jsonData["1995_1999"][i_1995_1999]["5"]
                            },
                            {
                                "value": i_2000_2004 === -1 ? 0 : jsonData["2000_2004"][i_2000_2004]["5"]
                            },
                            {
                                "value": i_2005_2009 === -1 ? 0 : jsonData["2005_2009"][i_2005_2009]["5"]
                            },
                            {
                                "value": i_2010_2014 === -1 ? 0 : jsonData["2010_2014"][i_2010_2014]["5"]
                            }
                        ]
                    },
                    {
                        "seriesname": "6",
                        "data": [
                            {
                                "value": i_1995_1999 === -1 ? 0 : jsonData["1995_1999"][i_1995_1999]["6"]
                            },
                            {
                                "value": i_2000_2004 === -1 ? 0 : jsonData["2000_2004"][i_2000_2004]["6"]
                            },
                            {
                                "value": i_2005_2009 === -1 ? 0 : jsonData["2005_2009"][i_2005_2009]["6"]
                            },
                            {
                                "value": i_2010_2014 === -1 ? 0 : jsonData["2010_2014"][i_2010_2014]["6"]
                            }
                        ]
                    },
                    {
                        "seriesname": "7",
                        "data": [
                            {
                                "value": i_1995_1999 === -1 ? 0 : jsonData["1995_1999"][i_1995_1999]["7"]
                            },
                            {
                                "value": i_2000_2004 === -1 ? 0 : jsonData["2000_2004"][i_2000_2004]["7"]
                            },
                            {
                                "value": i_2005_2009 === -1 ? 0 : jsonData["2005_2009"][i_2005_2009]["7"]
                            },
                            {
                                "value": i_2010_2014 === -1 ? 0 : jsonData["2010_2014"][i_2010_2014]["7"]
                            }
                        ]
                    },
                    {
                        "seriesname": "8",
                        "data": [
                            {
                                "value": i_1995_1999 === -1 ? 0 : jsonData["1995_1999"][i_1995_1999]["8"]
                            },
                            {
                                "value": i_2000_2004 === -1 ? 0 : jsonData["2000_2004"][i_2000_2004]["8"]
                            },
                            {
                                "value": i_2005_2009 === -1 ? 0 : jsonData["2005_2009"][i_2005_2009]["8"]
                            },
                            {
                                "value": i_2010_2014 === -1 ? 0 : jsonData["2010_2014"][i_2010_2014]["8"]
                            }
                        ]
                    },
                    {
                        "seriesname": "9",
                        "data": [
                            {
                                "value": i_1995_1999 === -1 ? 0 : jsonData["1995_1999"][i_1995_1999]["9"]
                            },
                            {
                                "value": i_2000_2004 === -1 ? 0 : jsonData["2000_2004"][i_2000_2004]["9"]
                            },
                            {
                                "value": i_2005_2009 === -1 ? 0 : jsonData["2005_2009"][i_2005_2009]["9"]
                            },
                            {
                                "value": i_2010_2014 === -1 ? 0 : jsonData["2010_2014"][i_2010_2014]["9"]
                            }
                        ]
                    },
                    {
                        "seriesname": "A great deal",
                        "data": [
                            {
                                "value": i_1995_1999 === -1 ? 0 : jsonData["1995_1999"][i_1995_1999]["A great deal of choice"]
                            },
                            {
                                "value": i_2000_2004 === -1 ? 0 : jsonData["2000_2004"][i_2000_2004]["A great deal of choice"]
                            },
                            {
                                "value": i_2005_2009 === -1 ? 0 : jsonData["2005_2009"][i_2005_2009]["A great deal of choice"]
                            },
                            {
                                "value": i_2010_2014 === -1 ? 0 : jsonData["2010_2014"][i_2010_2014]["A great deal of choice"]
                            }
                        ]
                    },
                    {
                        "seriesname": "Not know",
                        "data": [
                            {
                                "value": i_1995_1999 === -1 ? 0 : jsonData["1995_1999"][i_1995_1999]["Not know"]
                            },
                            {
                                "value": i_2000_2004 === -1 ? 0 : jsonData["2000_2004"][i_2000_2004]["Not know"]
                            },
                            {
                                "value": i_2005_2009 === -1 ? 0 : jsonData["2005_2009"][i_2005_2009]["Not know"]
                            },
                            {
                                "value": i_2010_2014 === -1 ? 0 : jsonData["2010_2014"][i_2010_2014]["Not know"]
                            }
                        ]
                    }
                ]
            }
        };
        linkedData.push(element);
    }

    export default {
        data() {
            return {
                type: "worldwithcountries",
                renderAt: "chart-container",
                width: "1200",
                height: "800",
                dataFormat: "json",
                dataSource: {
                    "chart": {
                        "caption": "World-wide Situation of Freedom of Choice and Control",
                        "subcaption": "data from WVS Database and Gapminder",
                        "entitytooltext": "$lname",
                        "showLegend": "0",
                        "entityFillHoverColor": "#D7DDFF",
                        "theme": "fusion",
                        "nullEntityColor": "#C2C2D6",
                        "nullEntityAlpha": "50",
                        "hoverOnNull": "0"
                    },
                    "colorrange": {
                        "gradient": "0",
                        "color": [
                            {
                                "minvalue": "1",
                                "maxvalue": "10",
                                "color": "#1976D2"
                            }
                        ]
                    },
                    "data": data,
                    "linkeddata": linkedData
                }
            }
        },
        methods: {
            configureLink: function (chart) {
                this.chartInstance = chart; // Save it for further use

                // Configure Drilldown attributes
                this.chartInstance.configureLink({
                    type: "stackedcolumn2d",
                    width: "1000",
                    height: "700",
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
    }
</script>