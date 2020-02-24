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
    import HighestEducation from "../data/HighestEducation";
    let data_1995_1999 = [];
    let data_2000_2004 = [];
    let data_2005_2009 = [];
    let data_2010_2014 = [];

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

            for (let i = 0; i < HighestEducation["2000_2004"].length; i++) {
                const element = {
                    name: HighestEducation["2000_2004"][i]["Country"],
                    8: HighestEducation["2000_2004"][i]["University degree"] + "%",
                    7: HighestEducation["2000_2004"][i]["Some university education"] + "%",
                    6: HighestEducation["2000_2004"][i]["Secondary university preparatory"] + "%",
                    5: HighestEducation["2000_2004"][i]["Secondary university preparatory incomplete"] + "%",
                    4: HighestEducation["2000_2004"][i]["Secondary technical/vocational"] + "%",
                    3: HighestEducation["2000_2004"][i]["Secondary technical/vocational incomplete"] + "%",
                    2: HighestEducation["2000_2004"][i]["Primary"] + "%",
                    1: HighestEducation["2000_2004"][i]["Primary incomplete"] + "%",
                    0: HighestEducation["2000_2004"][i]["None"] + "%",
                };
                data_2000_2004.push(element);
            }

            for (let i = 0; i < HighestEducation["2005_2009"].length; i++) {
                const element = {
                    name: HighestEducation["2005_2009"][i]["Country"],
                    8: HighestEducation["2005_2009"][i]["University degree"] + "%",
                    7: HighestEducation["2005_2009"][i]["Some university education"] + "%",
                    6: HighestEducation["2005_2009"][i]["Secondary university preparatory"] + "%",
                    5: HighestEducation["2005_2009"][i]["Secondary university preparatory incomplete"] + "%",
                    4: HighestEducation["2005_2009"][i]["Secondary technical/vocational"] + "%",
                    3: HighestEducation["2005_2009"][i]["Secondary technical/vocational incomplete"] + "%",
                    2: HighestEducation["2005_2009"][i]["Primary"] + "%",
                    1: HighestEducation["2005_2009"][i]["Primary incomplete"] + "%",
                    0: HighestEducation["2005_2009"][i]["None"] + "%",
                };
                data_2005_2009.push(element);
            }

            for (let i = 0; i < HighestEducation["2010_2014"].length; i++) {
                const element = {
                    name: HighestEducation["2010_2014"][i]["Country"],
                    8: HighestEducation["2010_2014"][i]["University degree"] + "%",
                    7: HighestEducation["2010_2014"][i]["Some university education"] + "%",
                    6: HighestEducation["2010_2014"][i]["Secondary university preparatory"] + "%",
                    5: HighestEducation["2010_2014"][i]["Secondary university preparatory incomplete"] + "%",
                    4: HighestEducation["2010_2014"][i]["Secondary technical/vocational"] + "%",
                    3: HighestEducation["2010_2014"][i]["Secondary technical/vocational incomplete"] + "%",
                    2: HighestEducation["2010_2014"][i]["Primary"] + "%",
                    1: HighestEducation["2010_2014"][i]["Primary incomplete"] + "%",
                    0: HighestEducation["2010_2014"][i]["None"] + "%",
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
                    {text: 'University degree (8)', value: '8'},
                    {text: 'Some university education (7)', value: '7'},
                    {text: 'Secondary university preparatory (6)', value: '6'},
                    {text: 'Secondary university preparatory incomplete (5)', value: '5'},
                    {text: 'Secondary technical/vocational (4)', value: '4'},
                    {text: 'Secondary technical/vocational incomplete (3)', value: '3'},
                    {text: 'Complete primary school (2)', value: '2'},
                    {text: 'Incomplete primary school (1)', value: '1'},
                    {text: 'No formal education (0)', value: '0'},
                ],
                data_1995_1999: data_1995_1999,
                data_2000_2004: data_2000_2004,
                data_2005_2009: data_2005_2009,
                data_2010_2014: data_2010_2014
            }
        },
    }
</script>