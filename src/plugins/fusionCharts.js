import Vue from 'vue';
import VueFusionCharts from 'vue-fusioncharts';
// import FusionCharts modules and resolve dependency
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
import FusionMaps from 'fusioncharts/fusioncharts.maps';
import World from 'fusioncharts/maps/fusioncharts.world';
import WorldWithCountries from 'fusionmaps/maps/fusioncharts.worldwithcountries';

Vue.use(VueFusionCharts, FusionCharts, Charts, FusionTheme,
    FusionMaps, World, WorldWithCountries);

export default {
    VueFusionCharts,
    FusionCharts,
    Charts,
    FusionTheme,
    FusionMaps,
    World,
    WorldWithCountries
}