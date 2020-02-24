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
    import MaritalStatus from "../data/MaritalStatus";
    let data_1995_1999 = [];
    let data_2000_2004 = [];
    let data_2005_2009 = [];
    let data_2010_2014 = [];

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

            for (let i = 0; i < MaritalStatus["2000_2004"].length; i++) {
                const element = {
                    name: MaritalStatus["2000_2004"][i]["Country"],
                    6: MaritalStatus["2000_2004"][i]["Married"] + "%",
                    5: MaritalStatus["2000_2004"][i]["Living together as married"] + "%",
                    4: MaritalStatus["2000_2004"][i]["Divorced"] + "%",
                    3: MaritalStatus["2000_2004"][i]["Separated"] + "%",
                    2: MaritalStatus["2000_2004"][i]["Widowed"] + "%",
                    1: MaritalStatus["2000_2004"][i]["Single"] + "%",
                };
                data_2000_2004.push(element);
            }

            for (let i = 0; i < MaritalStatus["2005_2009"].length; i++) {
                const element = {
                    name: MaritalStatus["2005_2009"][i]["Country"],
                    6: MaritalStatus["2005_2009"][i]["Married"] + "%",
                    5: MaritalStatus["2005_2009"][i]["Living together as married"] + "%",
                    4: MaritalStatus["2005_2009"][i]["Divorced"] + "%",
                    3: MaritalStatus["2005_2009"][i]["Separated"] + "%",
                    2: MaritalStatus["2005_2009"][i]["Widowed"] + "%",
                    1: MaritalStatus["2005_2009"][i]["Single/Never married"] + "%",
                };
                data_2005_2009.push(element);
            }

            for (let i = 0; i < MaritalStatus["2010_2014"].length; i++) {
                const element = {
                    name: MaritalStatus["2010_2014"][i]["Country"],
                    6: MaritalStatus["2010_2014"][i]["Married"] + "%",
                    5: MaritalStatus["2010_2014"][i]["Living together as married"] + "%",
                    4: MaritalStatus["2010_2014"][i]["Divorced"] + "%",
                    3: MaritalStatus["2010_2014"][i]["Separated"] + "%",
                    2: MaritalStatus["2010_2014"][i]["Widowed"] + "%",
                    1: MaritalStatus["2010_2014"][i]["Single"] + "%",
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
                    {text: 'Married (6)', value: '6'},
                    {text: 'Living together as married (5)', value: '5'},
                    {text: 'Divorced (4)', value: '4'},
                    {text: 'Separated (3)', value: '3'},
                    {text: 'Widowed (2)', value: '2'},
                    {text: 'Single (1)', value: '1'},
                ],
                data_1995_1999: data_1995_1999,
                data_2000_2004: data_2000_2004,
                data_2005_2009: data_2005_2009,
                data_2010_2014: data_2010_2014
            }
        },
    }
</script>