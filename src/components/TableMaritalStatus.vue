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
    import MaritalStatus from "../data/MaritalStatus";
    let data_1995_1999 = [];

    export default {
        mounted() {
            for (let i = 0; i < MaritalStatus["1995_1999"].length; i++) {
                const element = {
                    name: MaritalStatus["1995_1999"][i]["Country"],
                    6: MaritalStatus["1995_1999"][i]["Married"] + "%",
                    5: MaritalStatus["1995_1999"][i]["Living together as married"] + "%",
                    4: MaritalStatus["1995_1999"][i]["Divorced"] + "%",
                    3: MaritalStatus["1995_1999"][i]["Separated"] + "%",
                    2: MaritalStatus["1995_1999"][i]["Widowed"] + "%",
                    1: MaritalStatus["1995_1999"][i]["Single"] + "%",
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
                    {text: 'Married (6)', value: '6'},
                    {text: 'Living together as married (5)', value: '5'},
                    {text: 'Divorced (4)', value: '4'},
                    {text: 'Separated (3)', value: '3'},
                    {text: 'Widowed (2)', value: '2'},
                    {text: 'Single (1)', value: '1'},
                ],
                data_1995_1999: data_1995_1999
            }
        },
    }
</script>