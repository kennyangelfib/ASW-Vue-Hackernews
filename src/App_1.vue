<template>
  <div id="app">
    <header>
    <div class="inner">
            <router-link to="/">
                <img class="logo" src="https://news.ycombinator.com/y18.gif"/>
            </router-link>
            <router-link v-bind:to="'/news'" id='Hackernews'>Hacker News</router-link>
            <router-link v-bind:to="'/new'">News</router-link>
            <router-link v-bind:to="'/ask'" >Ask</router-link>
            <router-link v-bind:to="'/threads?username='+ user.username" v-if="haveToken">Threads</router-link>
            <router-link v-bind:to="'/submit'">Submit</router-link>
            <router-link id="user" v-bind:to="'/user?username=' + user.username">{{user.username}}({{user.karma}})</router-link>
            <router-link  v-bind:to="'/logout'">Log out</router-link>
            <router-link v-if="haveToken == false"  v-bind:to="'/login'">Log in</router-link>
    </div>
    </header>
    
  </div>
</template>
<script>
let token = localStorage.getItem('vue-authenticate.vueauth_token');
export default {
  name: 'app',
  computed: {
      haveToken() {
        token = false;
        return token != null;
      }
  },
  data(){
    return{
      user:{
        username:'userprove',
        karma: 1
      }
    }
  }
}
</script>

<style scoped>
header {
  width: 100%;

  background-color: #f60;
  position: fixed;
  z-index: 999;
}
.inner {
  width: 100%;
  /* text-align: auto; */
  padding: 15px 5px;
  color: white;
  box-sizing: border-box;
  margin: 0 auto;
}

header a {
  color: hsla(0,0%,100%,.8);
  transition: color .15s ease;
  display: inline-block;
  font-weight: 300;
  letter-spacing: .075em;
  margin-right: 1.8em;
}

a {
  text-decoration: none;
}

header a.router-link-exact-active {
  color: #fff;
  font-weight: 400;
}

header a:hover {
  color: #fff;
}

#Hackernews {
  color: black;
}
.logo{
  border: 1px white solid;
}

.left{
  text-align: left;
}
.right{
  float: right; 
  text-align: right;
}
</style>


