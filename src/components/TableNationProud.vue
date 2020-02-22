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
            :items="data_1995_1999"
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
            :items="data_1995_1999"
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
            :items="data_1995_1999"
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
    import NationProudData from "../data/NationProud";
    let data_1995_1999 = [];

    export default {
        mounted() {
            for (let i = 0; i < NationProudData["1995_1999"].length; i++) {
                const element = {
                    name: NationProudData["1995_1999"][i]["Country"],
                    5: NationProudData["1995_1999"][i]["Very proud"] + "%",
                    4: NationProudData["1995_1999"][i]["Quite proud"] + "%",
                    3: NationProudData["1995_1999"][i]["Not very proud"] + "%",
                    2: NationProudData["1995_1999"][i]["Not at all proud"] + "%",
                    1: NationProudData["1995_1999"][i]["I am not [nationality]"] + "%",
                    0: NationProudData["1995_1999"][i]["Not know"] + "%",
                };
                data_1995_1999.push(element);
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
                    {text: 'Very proud (5)', value: '5'},
                    {text: 'Quite proud (4)', value: '4'},
                    {text: 'Not very proud (3)', value: '3'},
                    {text: 'Not at all proud (2)', value: '2'},
                    {text: 'I am not [nationality] (1)', value: '1'},
                    {text: 'Don´t know (0)', value: '0'},
                ],
                data_1995_1999: data_1995_1999
            }
        },
    }
</script>
