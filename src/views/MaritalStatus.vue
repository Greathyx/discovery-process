<template>
  <v-app id="inspire" style="margin: 0 60px">
    <h1>Marital status</h1>
    <p>Are you currently ....</p>
    <TableMaritalStatus/>
  </v-app>
</template>

<script>
    import TableMaritalStatus from "../components/TableMaritalStatus";

    export default {
        name: 'MaritalStatus',
        components: {
            TableMaritalStatus,
        },
    };
</script>