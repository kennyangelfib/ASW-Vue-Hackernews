<template>
    <div>
        <div v-if="haveToken == false">
            <div>
                You  need to do a login. Our logging is suported by Google
            </div>
            <div>
                <button @click="authenticate('google')">Login</button>
            </div>
        </div>
        <div v-else>
            <div>
                You are already logged in.
            </div>
        </div>
    </div>
</template>
<script>
import { authMixin } from '../mixins/authMixin'
let token = localStorage.getItem('vue-authenticate.vueauth_token');
export default {
    mixins: [ authMixin ],
    computed: {
      haveToken() {
        // token = null;
        return token != null;
      }
    }
}
</script>
