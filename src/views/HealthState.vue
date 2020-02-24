<template>
  <v-app id="inspire" style="margin: 0 60px">
    <h1 style="margin: 0 40px">State of health (subjective)</h1>
    <p style="margin: 0 40px">All in all, how would you describe your state of health these days? Would you say it is...</p>

    <MapHealthState/>

    <div style="margin: 0 40px">
      <h1>Original data</h1>
      <TableHealthState/>
    </div>
  </v-app>
</template>

<script>
    import TableHealthState from "../components/TableHealthState";
    import MapHealthState from "../components/MapHealthState";

    export default {
        name: 'HealthState',
        components: {
            TableHealthState,
            MapHealthState
        },
    };
</script>