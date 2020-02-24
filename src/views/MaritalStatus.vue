<template>
  <v-app id="inspire" style="margin: 0 60px">
    <h1 style="margin: 0 40px">Marital status</h1>
    <p style="margin: 0 40px">Are you currently ....</p>

    <MapMaritalStatus/>

    <div style="margin: 0 40px">
      <h1>Original data</h1>
      <TableMaritalStatus/>
    </div>
  </v-app>
</template>

<script>
    import TableMaritalStatus from "../components/TableMaritalStatus";
    import MapMaritalStatus from "../components/MapMaritalStatus";

    export default {
        name: 'MaritalStatus',
        components: {
            TableMaritalStatus,
            MapMaritalStatus
        },
    };
</script>