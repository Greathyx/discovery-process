<template>
  <div>
    <v-data-table
            :headers="headers"
            :items="data_1995_1999"
            class="elevation-1"
            style="margin:20px 0"
    >
      <template v-slot:top>
        <v-toolbar flat color="white">
          <v-toolbar-title>Year 1995 - 1999</v-toolbar-title>
        </v-toolbar>
      </template>
    </v-data-table>

    <v-data-table
            :headers="headers"
            :items="data_2000_2004"
            class="elevation-1"
            style="margin:20px 0"
    >
      <template v-slot:top>
        <v-toolbar flat color="white">
          <v-toolbar-title>Year 2000 - 2004</v-toolbar-title>
        </v-toolbar>
      </template>
    </v-data-table>

    <v-data-table
            :headers="headers"
            :items="data_2005_2009"
            class="elevation-1"
            style="margin:20px 0"
    >
      <template v-slot:top>
        <v-toolbar flat color="white">
          <v-toolbar-title>Year 2005 - 2009</v-toolbar-title>
        </v-toolbar>
      </template>
    </v-data-table>

    <v-data-table
            :headers="headers"
            :items="data_2010_2014"
            class="elevation-1"
            style="margin:20px 0"
    >
      <template v-slot:top>
        <v-toolbar flat color="white">
          <v-toolbar-title>Year 2010 - 2014</v-toolbar-title>
        </v-toolbar>
      </template>
    </v-data-table>
  </div>
</template>

<script>
    import Freedom from "../data/Freedom";
    let data_1995_1999 = [];
    let data_2000_2004 = [];
    let data_2005_2009 = [];
    let data_2010_2014 = [];

    export default {
        mounted() {
            for (let i = 0; i < Freedom["1995_1999"].length; i++) {
                const element = {
                    name: Freedom["1995_1999"][i]["Country"],
                    9: Freedom["1995_1999"][i]["A great deal of choice"] + "%",
                    8: Freedom["1995_1999"][i]["8"] + "%",
                    7: Freedom["1995_1999"][i]["7"] + "%",
                    6: Freedom["1995_1999"][i]["6"] + "%",
                    5: Freedom["1995_1999"][i]["5"] + "%",
                    4: Freedom["1995_1999"][i]["4"] + "%",
                    3: Freedom["1995_1999"][i]["3"] + "%",
                    2: Freedom["1995_1999"][i]["2"] + "%",
                    1: Freedom["1995_1999"][i]["No choice at all"] + "%",
                    0: Freedom["1995_1999"][i]["Not know"] + "%",
                };
                data_1995_1999.push(element);
            }

            for (let i = 0; i < Freedom["2000_2004"].length; i++) {
                const element = {
                    name: Freedom["2000_2004"][i]["Country"],
                    9: Freedom["2000_2004"][i]["A great deal of choice"] + "%",
                    8: Freedom["2000_2004"][i]["8"] + "%",
                    7: Freedom["2000_2004"][i]["7"] + "%",
                    6: Freedom["2000_2004"][i]["6"] + "%",
                    5: Freedom["2000_2004"][i]["5"] + "%",
                    4: Freedom["2000_2004"][i]["4"] + "%",
                    3: Freedom["2000_2004"][i]["3"] + "%",
                    2: Freedom["2000_2004"][i]["2"] + "%",
                    1: Freedom["2000_2004"][i]["No choice at all"] + "%",
                    0: Freedom["2000_2004"][i]["Not know"] + "%",
                };
                data_2000_2004.push(element);
            }

            for (let i = 0; i < Freedom["2005_2009"].length; i++) {
                const element = {
                    name: Freedom["2005_2009"][i]["Country"],
                    9: Freedom["2005_2009"][i]["A great deal of choice"] + "%",
                    8: Freedom["2005_2009"][i]["8"] + "%",
                    7: Freedom["2005_2009"][i]["7"] + "%",
                    6: Freedom["2005_2009"][i]["6"] + "%",
                    5: Freedom["2005_2009"][i]["5"] + "%",
                    4: Freedom["2005_2009"][i]["4"] + "%",
                    3: Freedom["2005_2009"][i]["3"] + "%",
                    2: Freedom["2005_2009"][i]["2"] + "%",
                    1: Freedom["2005_2009"][i]["No choice at all"] + "%",
                    0: Freedom["2005_2009"][i]["Not know"] + "%",
                };
                data_2005_2009.push(element);
            }

            for (let i = 0; i < Freedom["2010_2014"].length; i++) {
                const element = {
                    name: Freedom["2010_2014"][i]["Country"],
                    9: Freedom["2010_2014"][i]["A great deal of choice"] + "%",
                    8: Freedom["2010_2014"][i]["8"] + "%",
                    7: Freedom["2010_2014"][i]["7"] + "%",
                    6: Freedom["2010_2014"][i]["6"] + "%",
                    5: Freedom["2010_2014"][i]["5"] + "%",
                    4: Freedom["2010_2014"][i]["4"] + "%",
                    3: Freedom["2010_2014"][i]["3"] + "%",
                    2: Freedom["2010_2014"][i]["2"] + "%",
                    1: Freedom["2010_2014"][i]["No choice at all"] + "%",
                    0: Freedom["2010_2014"][i]["Not know"] + "%",
                };
                data_2010_2014.push(element);
            }
        },

        data() {
            return {
                headers: [
                    {
                        text: 'Country',
                        align: 'left',
                        sortable: false,
                        value: 'name',
                    },
                    {text: 'A great deal of choice (9)', value: '9'},
                    {text: '8', value: '8'},
                    {text: '7', value: '7'},
                    {text: '6', value: '6'},
                    {text: '5', value: '5'},
                    {text: '4', value: '4'},
                    {text: '3', value: '3'},
                    {text: '2', value: '2'},
                    {text: 'No choice at all (1)', value: '1'},
                    {text: 'Don´t know (0)', value: '0'},
                ],
                data_1995_1999: data_1995_1999,
                data_2000_2004: data_2000_2004,
                data_2005_2009: data_2005_2009,
                data_2010_2014: data_2010_2014
            }
        },
    }
</script>