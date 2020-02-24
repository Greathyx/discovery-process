import Vue from 'vue'
import VueRouter from 'vue-router'
import WVS from '../views/WVS.vue'
import NationProud from "../views/NationProud";
import HighestEducation from '../views/HighestEducation';
import IncomeEquality from "../views/IncomeEquality";
import HappinessFeel from "../views/HappinessFeel";
import MaritalStatus from "../views/MaritalStatus";
import HealthState from "../views/HealthState";
import Freedom from "../views/Freedom";
import ChildrenAmount from "../views/ChildrenAmount";
import DiscoveryProcess from "../views/DiscoveryProcess";

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'WVS',
        component: WVS,
        redirect: '/WVS/NationProud'
    },
    {
        path: '/WVS',
        name: 'WVS',
        component: WVS,
        children: [
            {
                path: 'NationProud',
                component: NationProud
            },
            {
                path: 'HighestEducation',
                component: HighestEducation
            },
            {
                path: 'IncomeEquality',
                component: IncomeEquality
            },
            {
                path: 'HappinessFeel',
                component: HappinessFeel
            },
            {
                path: 'MaritalStatus',
                component: MaritalStatus
            },
            {
                path: 'HealthState',
                component: HealthState
            },
            {
                path: 'Freedom',
                component: Freedom
            },
            {
                path: 'ChildrenAmount',
                component: ChildrenAmount
            },
        ]
    },
    {
        path: '/DiscoveryProcess',
        name: 'DiscoveryProcess',
        component: DiscoveryProcess
    }
];

const router = new VueRouter({
    routes
});

export default router
