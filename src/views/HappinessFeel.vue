<template>
  <v-app id="inspire" style="margin: 0 60px">
    <h1>Feeling of happiness</h1>
    <p>Taking all things together, would you say you are:</p>
    <TableHappinessFeel/>
  </v-app>
</template>

<script>
    import TableHappinessFeel from "../components/TableHappinessFeel";

    export default {
        name: 'HappinessFeel',
        components: {
            TableHappinessFeel,
        },
    };
</script>