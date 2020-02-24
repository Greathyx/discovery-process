<template>
  <v-app id="inspire">
    <h1 style="margin: 0 40px">How many children do you have</h1>
    <p style="margin: 0 40px">Have you had children? In almost affirmative, how many?</p>

    <MapChildrenAmount/>

    <div style="margin: 0 40px">
      <h1>Original data</h1>
      <TableChildrenAmount/>
    </div>
  </v-app>
</template>

<script>
    import TableChildrenAmount from "../components/TableChildrenAmount";
    import MapChildrenAmount from "../components/MapChildrenAmount";

    export default {
        name: 'ChildrenAmount',
        components: {
            TableChildrenAmount,
            MapChildrenAmount
        },
    };
</script>