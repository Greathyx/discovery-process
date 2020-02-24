<template>
  <v-app id="inspire" style="margin: 0 60px">
    <h1 style="margin: 0 40px">Income equality</h1>
    <p style="margin: 0 40px">Now I'd like you to tell me your views on various issues. How would you place your views on this scale? 1 means
      you agree completely with the statement on the left; 10 means you agree completely with the statement on the
      right; and if your views fall somewhere in between, you can choose any number in between.</p>

    <MapIncomeEquality/>

    <div style="margin: 0 40px">
      <h1>Original data</h1>
      <TableIncomeEquality/>
    </div>
  </v-app>
</template>

<script>
    import TableIncomeEquality from "../components/TableIncomeEquality";
    import MapIncomeEquality from "../components/MapIncomeEquality";

    export default {
        name: 'IncomeEquality',
        components: {
            TableIncomeEquality,
            MapIncomeEquality
        },
    };
</script>