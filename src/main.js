import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
import fusion_charts from './plugins/fusionCharts';

Vue.config.productionTip = false;

new Vue({
  router,
  vuetify,
  fusion_charts,
  render: h => h(App)
}).$mount('#app');
