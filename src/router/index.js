import Vue from 'vue'
import VueRouter from 'vue-router'
import WVS from '../views/WVS.vue'
import NationProud from "../views/NationProud";
import HighestEducation from '../views/HighestEducation';
import IncomeEquality from "../views/IncomeEquality";
import HappinessFeel from "../views/HappinessFeel";
import MaritalStatus from "../views/MaritalStatus";
import EscapePoverty from "../views/EscapePoverty";
import SexualFreedom from "../views/SexualFreedom";
import ChildrenAmount from "../views/ChildrenAmount";

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
                path: 'EscapePoverty',
                component: EscapePoverty
            },
            {
                path: 'SexualFreedom',
                component: SexualFreedom
            },
            {
                path: 'ChildrenAmount',
                component: ChildrenAmount
            },
        ]
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
];

const router = new VueRouter({
    routes
});

export default router
