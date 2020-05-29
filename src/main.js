import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App.vue'
import { routes } from './routes';
import VueAuthenticate from 'vue-authenticate'
import VueAxios from 'vue-axios'
import axios from 'axios';
import { store } from './store/store'
import tree from './components/Tree.vue'
import node from './components/Node.vue'
// import { authMixin } from './mixins/authMixin';
Vue.component('tree', tree);
Vue.component('node', node);
Vue.use(VueRouter);
Vue.use(VueAxios, axios)
Vue.use(VueAuthenticate, {
  baseUrl: 'https://hackers-asw.herokuapp.com',
  storageType: 'localStorage',
  tokenPath: 'token',
  providers: {
    google: {
      clientId:'987660212455-uuo96gos9oerg9bioldf7pgh21rsjjrq.apps.googleusercontent.com',
      redirectUri: 'http://localhost:8080/',
      url: 'https://hackers-asw.herokuapp.com/api/login/social/token_user/',
    }
  }
});
const router = new VueRouter({
  mode: 'history',
  routes,  
});
let token = localStorage.getItem('vue-authenticate.vueauth_token');
let isAuthenticated = (token != null);
// isAuthenticated = false
router.beforeEach( async (to, from,next) => {
  console.log("Tiene token?")
  console.log(isAuthenticated)
  console.log("viene de :")
  console.log(from);
  console.log("vamos a ")
  console.log(to);
  if(from.path == '/' && to.name=='Home'){
    if(!isAuthenticated && localStorage.getItem("Auth_state") !== "PROCESS"){
      console.log("uh nononono you must go log in first");
      return next({ name: 'Login' });
    }
    console.log("Despues de login si vamos a Home")
    return next();
  }
  if (to.name !== 'Login'){
      console.log(`Nos dirigimos a ${to.name}`)
    if(!isAuthenticated){
        console.log("You are not authenticated, you will be redirect to login");
        return next({ name: 'Login' });
    }
    console.log(`OK puedes ir a ${to.name}`)
    return next();
  }
  else return next();
});

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount("#app")
