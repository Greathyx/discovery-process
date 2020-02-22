<template>
  <v-app id="inspire">
    <v-app-bar
            app
            clipped-left
    >
      <v-toolbar-title style="width: 200px">Discovery Process</v-toolbar-title>
      <v-tabs color="teal" id="tab">
        <v-tab>
          <router-link to="/WVS/NationProud" class="link">WVS Online Analysis</router-link>
        </v-tab>
        <v-tab>
          <router-link to="/news" class="link">My Discovery Process</router-link>
        </v-tab>
      </v-tabs>
    </v-app-bar>

    <router-view/>

  </v-app>
</template>

<script>
    export default {
        name: 'App',

        components: {},

        data: () => ({}),

        created() {
            this.$vuetify.theme.dark = false;
        },
    };
</script>

<style>
  #tab a {
    /*font-weight: bold;*/
    text-decoration: none;
    color: inherit;
  }

  #tab a.router-link-exact-active {
    text-decoration: none;
    color: inherit;
  }

  .link {
    height: 64px;
    align-items: center;
    display: flex;
    /*font-size: 1rem;*/
    font-size: 0.875rem;
  }
</style>
