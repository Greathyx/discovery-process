<template>
  <v-app id="inspire" style="margin: 0 60px">
    <h1>How much freedom of choice and control</h1>
    <p>Some people feel they have completely free choice and control over their lives, while other people feel that what
      they do has no real effect on what happens to them. Please use this scale where 1 means "none at all" and 10 means
      "a great deal" to indicate how much freedom of choice and control you feel you have over the way your life turns
      out.</p>
    <TableSexualFreedom/>
  </v-app>
</template>

<script>
    import TableSexualFreedom from "../components/TableFreedom";

    export default {
        name: 'Freedom',
        components: {
            TableSexualFreedom,
        },
    };
</script>