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
    import IncomeEquality from "../data/IncomeEquality";
    let data_1995_1999 = [];

    export default {
        mounted() {
            for (let i = 0; i < IncomeEquality["1995_1999"].length; i++) {
                const element = {
                    name: IncomeEquality["1995_1999"][i]["Country"],
                    10: IncomeEquality["1995_1999"][i]["We need larger income differences as incentives"] + "%",
                    9: IncomeEquality["1995_1999"][i]["9"] + "%",
                    8: IncomeEquality["1995_1999"][i]["8"] + "%",
                    7: IncomeEquality["1995_1999"][i]["7"] + "%",
                    6: IncomeEquality["1995_1999"][i]["6"] + "%",
                    5: IncomeEquality["1995_1999"][i]["5"] + "%",
                    4: IncomeEquality["1995_1999"][i]["4"] + "%",
                    3: IncomeEquality["1995_1999"][i]["3"] + "%",
                    2: IncomeEquality["1995_1999"][i]["2"] + "%",
                    1: IncomeEquality["1995_1999"][i]["Incomes should be made more equal"] + "%",
                    0: IncomeEquality["1995_1999"][i]["Not know"] + "%",
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
                    {text: 'We need larger income differences as incentives (10)', value: '10'},
                    {text: '9', value: '9'},
                    {text: '8', value: '8'},
                    {text: '7', value: '7'},
                    {text: '6', value: '6'},
                    {text: '5', value: '5'},
                    {text: '4', value: '4'},
                    {text: '3', value: '3'},
                    {text: '2', value: '2'},
                    {text: 'Incomes should be made more equal (1)', value: '1'},
                    {text: 'Don´t know (0)', value: '0'},
                ],
                data_1995_1999: data_1995_1999
            }
        },
    }
</script>
