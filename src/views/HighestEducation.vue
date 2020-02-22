<template>
  <v-app id="inspire" style="margin: 0 60px">
    <h1>Highest educational level attained</h1>
    <p>highest educational level attained respondent (8 categories)</p>
    <TableHighestEducation/>
  </v-app>
</template>

<script>
    import TableHighestEducation from "../components/TableHighestEducation";

    export default {
        name: 'HighestEducation',
        components: {
            TableHighestEducation,
        },
    };
</script>