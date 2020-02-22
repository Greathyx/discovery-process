<template>
  <v-app id="inspire" style="margin: 0 60px">
    <h1>Income equality</h1>
    <p>Now I'd like you to tell me your views on various issues. How would you place your views on this scale? 1 means
      you agree completely with the statement on the left; 10 means you agree completely with the statement on the
      right; and if your views fall somewhere in between, you can choose any number in between.</p>
    <TableIncomeEquality/>
  </v-app>
</template>

<script>
    import TableIncomeEquality from "../components/TableIncomeEquality";

    export default {
        name: 'IncomeEquality',
        components: {
            TableIncomeEquality,
        },
    };
</script>