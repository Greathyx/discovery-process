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
    import EscapePoverty from "../data/HealthState";
    let data_1995_1999 = [];
    let data_2000_2004 = [];
    let data_2005_2009 = [];
    let data_2010_2014 = [];

    export default {
        mounted() {
            for (let i = 0; i < EscapePoverty["1995_1999"].length; i++) {
                const element = {
                    name: EscapePoverty["1995_1999"][i]["Country"],
                    5: EscapePoverty["1995_1999"][i]["Very good"] + "%",
                    4: EscapePoverty["1995_1999"][i]["Good"] + "%",
                    3: EscapePoverty["1995_1999"][i]["Fair"] + "%",
                    2: EscapePoverty["1995_1999"][i]["Poor"] + "%",
                    1: EscapePoverty["1995_1999"][i]["Very poor"] + "%",
                    0: EscapePoverty["1995_1999"][i]["Not know"] + "%",
                };
                data_1995_1999.push(element);
            }

            for (let i = 0; i < EscapePoverty["2000_2004"].length; i++) {
                const element = {
                    name: EscapePoverty["2000_2004"][i]["Country"],
                    5: EscapePoverty["2000_2004"][i]["Very good"] + "%",
                    4: EscapePoverty["2000_2004"][i]["Good"] + "%",
                    3: EscapePoverty["2000_2004"][i]["Fair"] + "%",
                    2: EscapePoverty["2000_2004"][i]["Poor"] + "%",
                    1: EscapePoverty["2000_2004"][i]["Very poor"] + "%",
                    0: EscapePoverty["2000_2004"][i]["Not know"] + "%",
                };
                data_2000_2004.push(element);
            }

            for (let i = 0; i < EscapePoverty["2005_2009"].length; i++) {
                const element = {
                    name: EscapePoverty["2005_2009"][i]["Country"],
                    5: EscapePoverty["2005_2009"][i]["Very good"] + "%",
                    4: EscapePoverty["2005_2009"][i]["Good"] + "%",
                    3: EscapePoverty["2005_2009"][i]["Fair"] + "%",
                    2: EscapePoverty["2005_2009"][i]["Poor"] + "%",
                    1: EscapePoverty["2005_2009"][i]["Very poor"] + "%",
                    0: EscapePoverty["2005_2009"][i]["Not know"] + "%",
                };
                data_2005_2009.push(element);
            }

            for (let i = 0; i < EscapePoverty["2010_2014"].length; i++) {
                const element = {
                    name: EscapePoverty["2010_2014"][i]["Country"],
                    5: EscapePoverty["2010_2014"][i]["Very good"] + "%",
                    4: EscapePoverty["2010_2014"][i]["Good"] + "%",
                    3: EscapePoverty["2010_2014"][i]["Fair"] + "%",
                    2: EscapePoverty["2010_2014"][i]["Poor"] + "%",
                    1: "0%",
                    0: EscapePoverty["2010_2014"][i]["Not know"] + "%",
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
                    {text: 'Very good (5)', value: '5'},
                    {text: 'Good (4)', value: '4'},
                    {text: 'Fair (3)', value: '3'},
                    {text: 'Poor (2)', value: '2'},
                    {text: 'Very poor (1)', value: '1'},
                    {text: 'Not know (0)', value: '0'},
                ],
                data_1995_1999: data_1995_1999,
                data_2000_2004: data_2000_2004,
                data_2005_2009: data_2005_2009,
                data_2010_2014: data_2010_2014
            }
        },
    }
</script>