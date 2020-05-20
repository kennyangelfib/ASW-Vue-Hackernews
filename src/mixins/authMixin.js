// import axios from 'axios';
// export const authMixin = {
//     methods: {
//         checkToken: function(redirect){
//             console.log(redirect);
//             axios.post("http://localhost:8000/api/check/", {"token": localStorage.getItem("vue-authenticate.vueauth_token")}).then((response) => {
//             console.log(response.data)
//                 if (!response.data.status) window.location.href = '/';//redirect({ path: path })
//             }).catch((error) => {
//                     console.log(error);
//             });
//         },
//         authenticate: function(provider) {
//             this.$auth.authenticate(provider, {provider: "google-oauth2"}).then(function (response) {
//                     console.log(response.data);
//                     console.log("Works!");
//                     window.location.href = '/dashboard';
//             }).catch(function(error) {
//                 console.log(error);
//             });
//         }
//     }
// }

import axios from 'axios';
export const authMixin = {
    methods: {
        checkToken: async function(){
            let res = await axios.post("http://localhost:8000/api/check/", {"token": localStorage.getItem("vue-authenticate.vueauth_token")
            }).then(function (response) {
                console.log("inside")
                return response.data.status;
            }).catch((error) => {
                    console.log(error);
                    return false;
            });
            return await res;
        },
        authenticate: function(provider) {
            this.$auth.authenticate(provider, {provider: "google-oauth2"}).then(function (response) {
                    console.log(response.data);
                    console.log("Works!");
                    window.location.href = '/dashboard';
            }).catch(function(error) {
                console.log(error);
            });
        }
    }
}