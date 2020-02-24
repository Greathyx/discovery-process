<template>
  <v-app id="inspire" style="margin: 0 20px">
    <h1>How proud of nationality</h1>
    <p>How proud are you to be [Nationality]?:</p>
<!--    <ChartNationProud/>-->
    <TableNationProud/>
  </v-app>
</template>

<script>
    // import ChartNationProud from "../components/ChartNationProud";
    import TableNationProud from "../components/TableNationProud";

    export default {
        name: 'NationProud',
        components: {
            // ChartNationProud,
            TableNationProud,
        },
    };
</script>