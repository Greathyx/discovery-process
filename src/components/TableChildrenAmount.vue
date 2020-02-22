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
    import ChildrenAmount from "../data/ChildrenAmount";
    let data_1995_1999 = [];

    export default {
        mounted() {
            for (let i = 0; i < ChildrenAmount["1995_1999"].length; i++) {
                const element = {
                    name: ChildrenAmount["1995_1999"][i]["Country"],
                    8: ChildrenAmount["1995_1999"][i]["8 + children"] + "%",
                    7: ChildrenAmount["1995_1999"][i]["7 children"] + "%",
                    6: ChildrenAmount["1995_1999"][i]["6 children"] + "%",
                    5: ChildrenAmount["1995_1999"][i]["5 children"] + "%",
                    4: ChildrenAmount["1995_1999"][i]["4 children"] + "%",
                    3: ChildrenAmount["1995_1999"][i]["3 children"] + "%",
                    2: ChildrenAmount["1995_1999"][i]["2 children"] + "%",
                    1: ChildrenAmount["1995_1999"][i]["1 child"] + "%",
                    0: ChildrenAmount["1995_1999"][i]["None"] + "%",
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
                    {text: '8+ children (8)', value: '8'},
                    {text: '7 children (7)', value: '7'},
                    {text: '6 children (6)', value: '6'},
                    {text: '5 children (5)', value: '5'},
                    {text: '4 children (4)', value: '4'},
                    {text: '3 children (3)', value: '3'},
                    {text: '2 children (2)', value: '2'},
                    {text: '1 child (1)', value: '1'},
                    {text: 'None (0)', value: '0'},
                ],
                data_1995_1999: data_1995_1999
            }
        },
    }
</script>