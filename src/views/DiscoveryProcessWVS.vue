<template>
  <v-app id="inspire">
    <v-content>
      <v-container
              fluid
              fill-height
      >
        <v-layout
                align-center
                justify-center
        >
          <v-flex shrink id="flex">
            <h1 style="margin-bottom: 20px">Discovery process through
              <a href="http://www.worldvaluessurvey.org/WVSOnline.jsp">
                WVS Database</a>
            </h1>
            <h3>Step 1 - Select a time period.</h3>
            <v-img style="width: 100%" :src="require('../pics/step1.png')"></v-img>

            <h3 style="margin-top: 20px">Step 2 - Select countries whose data you are interested in.</h3>
            <v-img style="width: 100%" :src="require('../pics/step2.png')"></v-img>

            <h3 style="margin-top: 20px">Step 3 - Select the questions surveyed that you want to learn from.</h3>
            <v-img style="width: 100%" :src="require('../pics/step3.png')"></v-img>

            <h3 style="margin-top: 20px">Step 4.1 - See the results.</h3>
            <v-img style="width: 100%" :src="require('../pics/step4.png')"></v-img>

            <h3 style="margin-top: 20px">Step 4.2 - Also the time series results (take Argentina and Australia for examples).</h3>
            <v-img style="width: 100%" :src="require('../pics/step4_2.png')"></v-img>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
    export default {
        name: 'DiscoveryProcessWVS',

        data: () => ({}),
    };
</script>

<style>
  #flex a {
    text-decoration: none;
    color: #009688;
  }

  #flex a:hover {
    text-decoration: underline;
  }
</style>
