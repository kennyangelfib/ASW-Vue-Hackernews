import Home from './components/Home.vue';
import Dismiss from './components/Dismiss.vue';
import Dashboard from './components/Dashboard.vue';
// import Router from 'vue-router';


export const routes = [
    {
        path: '/' ,
        name: 'Login',
        component: Home 
    },
    {   
        path: '/dismiss',
        name: 'Dismiss',
        component: Dismiss 
    },
    { 
        path: '/dashboard',
        name: 'Dashboard',
        component: Dashboard,
    }
];

//  export default routes;