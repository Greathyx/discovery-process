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
    import EscapePoverty from "../data/EscapePoverty";
    let data_1995_1999 = [];

    export default {
        mounted() {
            for (let i = 0; i < EscapePoverty["1995_1999"].length; i++) {
                const element = {
                    name: EscapePoverty["1995_1999"][i]["Country"],
                    2: EscapePoverty["1995_1999"][i]["They have a chance"] + "%",
                    1: EscapePoverty["1995_1999"][i]["There is very little chance"] + "%",
                    0: EscapePoverty["1995_1999"][i]["Not know"] + "%",
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
                    {text: 'They have a chance (2)', value: '2'},
                    {text: 'There is very little chance (1)', value: '1'},
                    {text: 'Not know (0)', value: '0'},
                ],
                data_1995_1999: data_1995_1999
            }
        },
    }
</script>