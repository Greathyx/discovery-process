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
    import HappinessFeel from "../data/HappinessFeel";
    let data_1995_1999 = [];

    export default {
        mounted() {
            for (let i = 0; i < HappinessFeel["1995_1999"].length; i++) {
                const element = {
                    name: HappinessFeel["1995_1999"][i]["Country"],
                    4: HappinessFeel["1995_1999"][i]["Very happy"] + "%",
                    3: HappinessFeel["1995_1999"][i]["Quite happy"] + "%",
                    2: HappinessFeel["1995_1999"][i]["Not very happy"] + "%",
                    1: HappinessFeel["1995_1999"][i]["Not at all happy"] + "%",
                    0: HappinessFeel["1995_1999"][i]["Not know"] + "%",
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
                    {text: 'Secondary technical/vocational (4)', value: '4'},
                    {text: 'Secondary technical/vocational incomplete (3)', value: '3'},
                    {text: 'Primary (2)', value: '2'},
                    {text: 'Primary incomplete (1)', value: '1'},
                    {text: 'Don´t know (0)', value: '0'},
                ],
                data_1995_1999: data_1995_1999
            }
        },
    }
</script>