// import Vue from 'vue'
// import App from './App.vue'

// Vue.config.productionTip = false

// new Vue({
//   render: h => h(App),
// }).$mount('#app')

import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App.vue'
import { routes } from './routes';
import VueAuthenticate from 'vue-authenticate'
import VueAxios from 'vue-axios'
import axios from 'axios';
import { store } from './store/store'
import { authMixin } from './mixins/authMixin';
Vue.use(VueRouter);
Vue.use(VueAxios, axios)
Vue.use(VueAuthenticate, {
  // baseUrl: 'http://localhost:8000',
  storageType: 'localStorage',
  tokenPath: 'token',
  providers: {
    google: {
      clientId:'987660212455-uuo96gos9oerg9bioldf7pgh21rsjjrq.apps.googleusercontent.com',
      redirectUri: 'http://localhost:8081/',
      url: 'http://localhost:8000/api/login/social/token_user/',
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
  if (to.name !== 'Login'){
      if(!isAuthenticated){
        next({ name: 'Login' });
      }
      else if(!(await authMixin.methods.checkToken("google"))) {
          console.log("Ohh token invalido, hacemos login");
          next({ name: 'Login' });
      }
      else next();
  }
  else next();
  // next();
});

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount("#app")
