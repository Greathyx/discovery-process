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
          <v-flex shrink style="width: 90%">
            <h1>My discovery process</h1>
            <p>A "discovery process" is the story of the analysis told in pictures and words. My discovery process
              consists of the GLOBAL DATA page and this page. This is just one example to
              illustrate what discovery I can make through the interactive charts I create.</p>
            <p>Let's take China for example:</p>
            <v-timeline
                    :align-top="alignTop"
                    :dense="dense"
                    :reverse="reverse"
            >
              <v-timeline-item>
                <span slot="opposite">1995-1999</span>
                <v-card class="elevation-2">
                  <!--                  <v-card-title class="headline">1995-1999</v-card-title>-->
                  <v-card-text>
                    1. More than 20% people were not very proud of their country.<br/>
                    2. Over 20% people haven't attended school or completed primary school.<br/>
                    3. Nearly 40% people claim income should be more equal, which means it wasn't equal at that
                    time.<br/>
                    4. However, nearly 83% people feel happy.<br/>
                    5. Over 80% people got married. Few people chose to live together as married or get divorced.<br/>
                    6. Less than 6% people felt they are not healthy.<br/>
                    7. Over 50% people have 2 or more children.<br/>
                  </v-card-text>
                </v-card>
              </v-timeline-item>

              <v-timeline-item>
                <span slot="opposite">2000-2004</span>
                <v-card class="elevation-2">
                  <!--                  <v-card-title class="headline">2000-2004</v-card-title>-->
                  <v-card-text>
                    1. More people felt less proud of their country. Particularly, less percentage of people felt very
                    proud of their country.<br/>
                    2. More people got educated.<br/>
                    3. Nearly 20% people claimed larger income differences, which is weird.<br/>
                    4. Less people felt happy.<br/>
                    5. More people got married. The amount of single people decreased.<br/>
                    6. Less people felt healthy. <br/>
                    7. More people felt they could not do what they choose to.<br/>
                    8. People gave more birth, especially second birth.<br/>
                  </v-card-text>
                </v-card>
              </v-timeline-item>

              <v-timeline-item>
                <span slot="opposite">2005-2009</span>
                <v-card class="elevation-2">
                  <!--                  <v-card-title class="headline">2005-2009</v-card-title>-->
                  <v-card-text>
                    1. The education level of the country kept going up. Nearly 40% people achieved secondary university
                    preparatory level, which become historical peak.<br/>
                    2. Incomes became more equal than before.<br/>
                    3. There were more single people than before.<br/>
                    4. 21% people had a great deal of freedom to make their own decisions and control themselves.<br/>
                  </v-card-text>
                </v-card>
              </v-timeline-item>

              <v-timeline-item>
                <span slot="opposite">2010-2014</span>
                <v-card class="elevation-2">
                  <!--                  <v-card-title class="headline">2010-2014</v-card-title>-->
                  <v-card-text>
                    1. Nearly 50% people achieved secondary technical level, which means the average cultural level got
                    improved.<br/>
                    2. More people claimed incomes should be more equal, which means incomes were not as equal as before
                    at that time.<br/>
                    3. People who felt happy increased, compared with before.<br/>
                    4. The percent of married people got to a historical peak.<br/>
                    5. More people felt healthy. <br/>
                    6. People became more controlled and felt more free.<br/>
                    7. The percentage of people who chose to give birth decreased.<br/>
                  </v-card-text>
                </v-card>
              </v-timeline-item>
            </v-timeline>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
    export default {
        name: 'DiscoveryProcess',

        data: () => ({}),
    };
</script>