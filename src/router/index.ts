import Vue from 'vue';
import VueRouter, {RouteConfig} from 'vue-router';
import Money from '@/views/Money.vue';
import Labels from '@/views/Labels.vue';
import Statistics from '@/views/Statistics.vue';
import Error404 from '@/views/Error404.vue';
import EditLabel from '@/views/EditLabel.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
    {
        path: '/',
        redirect: '/money'
    },
    {
        path: '/money',
        component: Money
    },
    {
        path: '/statistics',
        component: Statistics
    },
    {
        path: '/labels',
        component: Labels
    },
    {
        path:'/labels/edit',
        component:EditLabel
    },
    {
        path: '*',
        component: Error404
    },
];

const router = new VueRouter({
    routes
});

export default router;
