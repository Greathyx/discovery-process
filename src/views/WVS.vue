<template>
  <v-app id="inspire">
    <v-navigation-drawer
            v-model="drawer"
            app
            clipped
    >
      <v-list dense id="tab2">
        <router-link to="/WVS/NationProud" class="link">
          <v-list-item link>
            <v-list-item-content>
              <v-list-item-title>How proud of nationality</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </router-link>

        <router-link to="/WVS/HighestEducation" class="link">
          <v-list-item link>
            <v-list-item-content>
              <v-list-item-title>Highest educational level attained</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </router-link>

        <router-link to="/WVS/IncomeEquality" class="link">
          <v-list-item link>
            <v-list-item-content>
              <v-list-item-title>Income equality</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </router-link>

        <router-link to="/WVS/HappinessFeel" class="link">
          <v-list-item link>
            <v-list-item-content>
              <v-list-item-title>Feeling of Happiness</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </router-link>

        <router-link to="/WVS/MaritalStatus" class="link">
          <v-list-item link>
            <v-list-item-content>
              <v-list-item-title>Marital Status</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </router-link>

        <router-link to="/WVS/HealthState" class="link">
          <v-list-item link>
            <v-list-item-content>
              <v-list-item-title>State of health (subjective)</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </router-link>

        <router-link to="/WVS/Freedom" class="link">
          <v-list-item link>
            <v-list-item-content>
              <v-list-item-title>Freedom of Choice and Control</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </router-link>

        <router-link to="/WVS/ChildrenAmount" class="link">
          <v-list-item link>
            <v-list-item-content>
              <v-list-item-title>Children Amount</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </router-link>
      </v-list>
    </v-navigation-drawer>

    <v-content>
      <v-container
              fluid
              fill-height
      >
        <v-layout
                align-center
                justify-center
        >
          <v-flex shrink>
            <router-view/>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>

  </v-app>
</template>

<script>
    export default {
        name: 'WVS',

        data: () => ({
            drawer: true,
        }),
    };
</script>

<style>
  #tab2 a {
    /*font-weight: bold;*/
    text-decoration: none;
    color: inherit;
  }

  #tab2 a.router-link-exact-active {
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
