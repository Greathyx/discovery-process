<template>
  <v-app id="inspire" style="margin: 0 60px">
    <h1>Chance to escape from poverty</h1>
    <p>In your opinion, do most poor people in this country have a chance of escaping from poverty, or is there very
      little of chance escaping?</p>
    <TableEscapePoverty/>
  </v-app>
</template>

<script>
    import TableEscapePoverty from "../components/TableEscapePoverty";

    export default {
        name: 'EscapePoverty',
        components: {
            TableEscapePoverty,
        },
    };
</script>