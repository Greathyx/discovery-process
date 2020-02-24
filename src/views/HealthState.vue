<template>
  <v-app id="inspire" style="margin: 0 60px">
    <h1>State of health (subjective)</h1>
    <p>All in all, how would you describe your state of health these days? Would you say it is...</p>
    <TableHealthState/>
  </v-app>
</template>

<script>
    import TableHealthState from "../components/TableHealthState";

    export default {
        name: 'HealthState',
        components: {
            TableHealthState,
        },
    };
</script>