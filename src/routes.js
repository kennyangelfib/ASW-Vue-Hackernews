import Home from '@/components/Home';
import Login from '@/components/Login'
import Dismiss from '@/components/Dismiss';
import Ask from '@/components/Ask';
import Newest from '@/components/Newest';
import Submit from '@/components/Submit';
import Submission from '@/components/Submission';
// import Router from 'vue-router';

export const routes = [
    {
        path: '/login' ,
        name: 'Login',
        component: Login 
    },
    {   
        path: '/dismiss',
        name: 'Dismiss',
        component: Dismiss 
    },
    {
        path: '/' ,
        name: 'Home',
        component: Home 
    },
    {
        path: '/news' ,
        name: 'News',
        component: Home
    },
    {
        path: '/newest' ,
        name: 'Newest',
        component: Newest 
    },
    {
        path: '/ask' ,
        name: 'Ask',
        component: Ask 
    },
    // {
    //     path: '/threads' ,
    //     name: 'Threads',
    //     component: Threads
    // },
    // {
    //     path: '/user',
    //     name: 'User',
    //     component: User
    // },
    {
        path: '/submit',
        name: 'Submit',
        component: Submit
    },
    {
        path: '/submitted',
        name: 'Submission',
        component: Submission
    },
    // {
    //     path: '/item',
    //     name: 'Item',
    //     component: Item
    // }
];

//  export default routes;