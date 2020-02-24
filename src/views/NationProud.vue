<template>
  <v-app id="inspire">
    <h1 style="margin: 0 40px">How proud of nationality</h1>
    <p style="margin: 0 40px">How proud are you to be [Nationality]?:</p>

    <MapNationProud/>

    <div style="margin: 0 40px">
      <h1>Original data</h1>
      <TableNationProud/>
    </div>
  </v-app>
</template>

<script>
    import MapNationProud from "../components/MapNationProud";
    import TableNationProud from "../components/TableNationProud";

    export default {
        name: 'NationProud',
        components: {
            MapNationProud,
            TableNationProud,
        },
    };
</script>