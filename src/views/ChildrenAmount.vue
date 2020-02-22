<template>
  <v-app id="inspire" style="margin: 0 60px">
    <h1>How many children do you have</h1>
    <p>Have you had children? In almost affirmative, how many?</p>
    <TableChildrenAmount/>
  </v-app>
</template>

<script>
    import TableChildrenAmount from "../components/TableChildrenAmount";

    export default {
        name: 'ChildrenAmount',
        components: {
            TableChildrenAmount,
        },
    };
</script>