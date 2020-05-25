<template>
  <tr>
    <td>
      <table class="itemlist" cellspacing="0" cellpadding="0" border="0">
        <tbody>
          <tr>
            <td>
              <form >
                <input
                  type="hidden"
                  name="csrfmiddlewaretoken"
                  value="IAVjup6HQxGj4n1rhiZ8TYYBetHIUsOouchMUPwl2j091AOnayyFWN3Qmv0nllMg"
                />
                <table border="0" cellpadding="0" cellspacing="0">
                  <tbody>
                    <tr>
                      <td bgcolor="#ffffaa">
                        <table cellpadding="5" width="100%">
                          <tbody>
                            <tr>
                              <td>
                                Please put a valid address in the email field, or we won't be able to
                                send you a new password if you forget yours. Your address is only
                                visible to you and us. Crawlers and other users can't see it.
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table border="0">
                  <tbody>
                    <tr class="athing">
                      <td valign="top">user:</td>
                      <td timestamp="1585266333">
                        <a href class="hnuser">{{user.username}}</a>
                      </td>
                    </tr>
                    <tr>
                      <td valign="top">created:</td>
                      <td>
                        <a href>{{whenpublished(user_info.created)}}</a>
                      </td>
                    </tr>
                    <tr>
                      <td valign="top">karma:</td>
                      <td>{{user_info.karma}}</td>
                    </tr>

                    <tr>
                      <td>
                        <label for="id_about">About:</label>
                      </td>
                      <td>
                        <textarea name="id_about_" cols="40" rows="10" maxlength="500" id="id_about_" v-model="user_info.about" />
                      </td>
                    </tr>

                    <tr>
                      <td valign="top">API Key:</td>
                      <td>RkC1s7tZ.NALtij3kDJInbTSJaQiXyVslWhQJBMi7</td>
                    </tr>

                    <tr>
                      <td></td>
                      <td>
                        <a href="submitted?id=adrianromaniglesias">
                          <u>submissions</u>
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td></td>
                      <td>
                        <a href="threads?id=adrianromaniglesias ">
                          <u>comments</u>
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td></td>
                      <td>
                        <a href="/upvoted?id=adrianromaniglesias">
                          <u>upvoted submissions</u>
                        </a> /
                        <a href="/upvotedcomments?id=adrianromaniglesias&amp;comments=t">
                          <u>comments</u>
                        </a>
                        &nbsp;
                        <span style="font-style:italic">(private)</span>
                      </td>
                    </tr>
                    <tr>
                      <td></td>
                    </tr>
                    <tr>
                      <td>
                        <br />
                        <input type="submit" value="update" v-on:click="updateAbout()"/>
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <br />
                        <br />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </form>
            </td>
          </tr>
        </tbody>
      </table>
    </td>
  </tr>
</template>
<script>
//import VueJwtDecode from 'vue-jwt-decode';
import axios from "axios";
export default {
  name: "Profile",
  computed: {},
  data() {
    return {
      user: {
        username: localStorage.getItem("username"),
        karma: 1
      },
      user_info: []
    };
  },

  methods: {
    getProfileInfo() {
      console.log(
        "IncontributionsAsKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK"
      );
      let config = {
        headers: {
          Authorization: "RkC1s7tZ.NALtij3kDJInbTSJaQiXyVslWhQJBMi7"
        }
      };
      // For now we are authentication with a provisional APIkey
      axios
        .get(
          "https://hackers-asw.herokuapp.com/api/profile/adrianromaniglesias",
          config
        )
        .then(response => {
          console.log("It went okUSER");
          console.log(response.data);
          this.user_info = response.data;
        })
        .catch(error => {
          console.log(error);
        });
    },
    updateAbout() {
        let about =  document.getElementById("id_about_").value
         let config = {
        headers: {
          Authorization: "RkC1s7tZ.NALtij3kDJInbTSJaQiXyVslWhQJBMi7"
        }
      };
      // For now we are authentication with a provisional APIkey
      axios
        .put(
          "https://hackers-asw.herokuapp.com/api/profile/adrianromaniglesias",{"about" : `${about}` },
          config
        )
        .then(response => {
          console.log("It went okUSER");
          console.log(response.data);
          this.user_info = response.data;
        })
        .catch(error => {
          console.log(error);
        });


    },
    whenpublished(creation_date){
            let y = '"'+ creation_date +'"';
            let dateStr = JSON.parse(y);
            let date = new Date(dateStr);
            var moment = require('moment')
            return moment(date).fromNow();
        }
  },

  mounted() {
    this.getProfileInfo();
  }
};
</script>
<style>
@import "../assets/CSS/style.css";
</style>