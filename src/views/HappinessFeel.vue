<template>
  <v-app id="inspire">
    <h1 style="margin: 0 40px">Feeling of happiness</h1>
    <p style="margin: 0 40px">Taking all things together, would you say you are:</p>

    <MapHappinessFeel/>

    <div style="margin: 0 40px">
      <h1>Original data</h1>
      <TableHappinessFeel/>
    </div>
  </v-app>
</template>

<script>
    import TableHappinessFeel from "../components/TableHappinessFeel";
    import MapHappinessFeel from "../components/MapHappinessFeel";

    export default {
        name: 'HappinessFeel',
        components: {
            TableHappinessFeel,
            MapHappinessFeel
        },
    };
</script>