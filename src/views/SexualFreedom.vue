<template>
  <v-app id="inspire" style="margin: 0 60px">
    <h1>Enjoy sexual freedom</h1>
    <p>If someone said that individuals should have the chance to enjoy complete sexual freedom without being
      restricted, would you tend to agree or disagree?</p>
    <TableSexualFreedom/>
  </v-app>
</template>

<script>
    import TableSexualFreedom from "../components/TableSexualFreedom";

    export default {
        name: 'SexualFreedom',
        components: {
            TableSexualFreedom,
        },
    };
</script>