<template>
  <v-app id="inspire" style="margin: 0 60px">
    <h1 style="margin: 0 40px">Highest educational level attained</h1>
    <p style="margin: 0 40px">highest educational level attained respondent (8 categories)</p>

    <MapHighestEducation/>

    <div style="margin: 0 40px">
      <h1>Original data</h1>
      <TableHighestEducation/>
    </div>
  </v-app>
</template>

<script>
    import TableHighestEducation from "../components/TableHighestEducation";
    import MapHighestEducation from "../components/MapHighestEducation";

    export default {
        name: 'HighestEducation',
        components: {
            TableHighestEducation,
            MapHighestEducation
        },
    };
</script>