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
    import SexualFreedom from "../data/SexualFreedom";
    let data_1995_1999 = [];

    export default {
        mounted() {
            for (let i = 0; i < SexualFreedom["1995_1999"].length; i++) {
                const element = {
                    name: SexualFreedom["1995_1999"][i]["Country"],
                    3: SexualFreedom["1995_1999"][i]["Tend to agree"] + "%",
                    2: SexualFreedom["1995_1999"][i]["Neither,it depends"] + "%",
                    1: SexualFreedom["1995_1999"][i]["Tend to disagree"] + "%",
                    0: SexualFreedom["1995_1999"][i]["Not know"] + "%",
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
                    {text: 'Tend to agree (3)', value: '3'},
                    {text: 'Neither,it depends (2)', value: '2'},
                    {text: 'Tend to disagree (1)', value: '1'},
                    {text: 'Don´t know (0)', value: '0'},
                ],
                data_1995_1999: data_1995_1999
            }
        },
    }
</script>