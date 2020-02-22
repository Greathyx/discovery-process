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
    import HighestEducation from "../data/HighestEducation";
    let data_1995_1999 = [];

    export default {
        mounted() {
            for (let i = 0; i < HighestEducation["1995_1999"].length; i++) {
                const element = {
                    name: HighestEducation["1995_1999"][i]["Country"],
                    8: HighestEducation["1995_1999"][i]["University degree"] + "%",
                    7: HighestEducation["1995_1999"][i]["Some university education"] + "%",
                    6: HighestEducation["1995_1999"][i]["Secondary university preparatory"] + "%",
                    5: HighestEducation["1995_1999"][i]["Secondary university preparatory incomplete"] + "%",
                    4: HighestEducation["1995_1999"][i]["Secondary technical/vocational"] + "%",
                    3: HighestEducation["1995_1999"][i]["Secondary technical/vocational incomplete"] + "%",
                    2: HighestEducation["1995_1999"][i]["Primary"] + "%",
                    1: HighestEducation["1995_1999"][i]["Primary incomplete"] + "%",
                    0: HighestEducation["1995_1999"][i]["None"] + "%",
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
                    {text: 'University degree (8)', value: '8'},
                    {text: 'Some university education (7)', value: '7'},
                    {text: 'Secondary university preparatory (6)', value: '6'},
                    {text: 'Secondary university preparatory incomplete (5)', value: '5'},
                    {text: 'Secondary technical/vocational (4)', value: '4'},
                    {text: 'Secondary technical/vocational incomplete (3)', value: '3'},
                    {text: 'Primary (2)', value: '2'},
                    {text: 'Primary incomplete (1)', value: '1'},
                    {text: 'None (0)', value: '0'},
                ],
                data_1995_1999: data_1995_1999
            }
        },
    }
</script>