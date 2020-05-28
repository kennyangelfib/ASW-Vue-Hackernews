<template>
  <tr>
    <td>
      <table class="itemlist" cellspacing="0" cellpadding="0" border="0">
        <tbody>
          <tr>
            <td>
              <table class="fatitem" border="0">
                <tbody>
                  <tr class="athing" id="2">
                    <td align="right" valign="top" class="title">
                      <span class="rank"></span>
                    </td>
                    <td valign="top" class="votelinks">
                      <center>
                        <button
                          class="votearrow"
                          id="vote2"
                          likehref="/votepost/2"
                          userlike="7"
                          contid="2"
                        ></button>
                      </center>
                    </td>
                    <td class="title">
                      <!-- URL  -->
                      <a
                        v-if="url"
                        :href="contribution.url"
                        class="storylink"
                        rel="nofollow"
                      >{{contribution.title}}</a>
                      <a v-else :href="contribution.url" class="storylink" rel="nofollow">ASK HN:</a>

                      <span v-if="url" class="sitebit comhead">
                        (
                        <a :href="contribution.url">
                          <span class="sitestr">{{contribution.url}}</span>
                        </a>)
                      </span>
                      <span v-else class="sitebit comhead">
                        <a href>
                          <span class="sitestr">{{contribution.title}}</span>
                        </a>
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td colspan="2"></td>
                    <td class="subtext">
                      <span class="score" id="score2" points="0">
                        {{getPoints(contribution.points)}}
                      </span> by
                      <a
                        :href="'/user?id='+ contribution.author"
                        class="hnuser"
                      >{{contribution.author}}</a>

                      <span class="age">
                        <a :href="'/item?id=' + contribution.id_contribution"> {{whenpublished(contribution.creation_date)}}</a> |
                      </span>

                      <button
                        class="unvotehidden"
                        id="unvotehidden2"
                        likehref="/votepost/2"
                        userlike="7"
                        contid="2"
                      >| unvote |</button>

                      <a href="/item?id=2">3 comments</a>
                    </td>
                  </tr>
                  <tr v-if="url == false">
                    <td colspan="2"></td>
                    <td>{{contribution.text}}</td>
                  </tr>
                  <tr style="height:2px"></tr>
                  <tr>
                    <td colspan="2"></td>
                    <td></td>
                  </tr>
                  <tr style="height:10px"></tr>

                  <tr>
                    <td colspan="2"></td>
                    <td>
                      <form method="get" action="">
                        <textarea id="text_comment" rows="6" cols="60"></textarea>
                        <input type="hidden" name="id" :value="'id'+ contribution.id_contribution" />
                        <br />
                        <br />
                        <input type="submit" value="add comment" />
                      </form>
                    </td>
                  </tr>
                </tbody>
              </table>
              <br />
              <br />
              <table border="0" class="comment-tree">
                <tbody>
                  <tr class="athing comtr">
                    <td>
                      <table border="0">
                        <tbody>
                          <tr>
                            <td class="ind">
                              <img src="https://news.ycombinator.com/s.gif" height="1" width="0" />
                            </td>
                            <td valign="top" class="votelinks">
                              <center>
                                <button
                                  class="votearrow"
                                  id="vote3"
                                  likehref="/votepost/3"
                                  userlike="7"
                                  contid="3"
                                ></button>
                              </center>
                            </td>
                            <td class="default">
                              <div style="margin-top:2px; margin-bottom:-10px;">
                                <span class="comhead">
                                  <a
                                    href="/user?id=kennyangelsytem15"
                                    class="hnuser"
                                  >kennyangelsytem15</a>
                                  <span class="age">
                                    <a href="/reply?id=3">21 days ago</a>
                                  </span>

                                  <button
                                    class="unvotehidden"
                                    id="unvotehidden3"
                                    likehref="/votepost/3"
                                    userlike="7"
                                    contid="3"
                                  >unvote</button>
                                </span>
                              </div>
                              <br />
                              <div class="comment">
                                <span class="commtext c00">
                                  Es una muy util
                                  <div class="reply">
                                    <p>
                                      <font size="1">
                                        <u>
                                          <a href="/reply?id=3">reply</a>
                                        </u>
                                      </font>
                                    </p>
                                  </div>
                                </span>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>

                  <tr class="athing comtr" id="22872337">
                    <td>
                      <table border="0">
                        <tbody>
                          <tr>
                            <td class="ind">
                              <img src="https://news.ycombinator.com/s.gif" height="1" width="20" />
                            </td>
                            <td valign="top" class="votelinks">
                              <center>
                                <button
                                  class="votearrow"
                                  id="vote4"
                                  likehref="/votepost/4"
                                  userlike="7"
                                  contid="4"
                                ></button>
                              </center>
                            </td>
                            <td class="default">
                              <div style="margin-top:2px; margin-bottom:-10px;">
                                <span class="comhead">
                                  <span class="storyon"></span>

                                  <a
                                    href="/user?id=kennyangelsystem"
                                    class="hnuser"
                                  >kennyangelsystem</a>
                                  <span class="age">
                                    <a href="/reply?id=4">21 days ago</a>
                                  </span>
                                  <span class="storyon"></span>

                                  <button
                                    class="unvotehidden"
                                    id="unvotehidden4"
                                    likehref="/votepost/4"
                                    userlike="7"
                                    contid="4"
                                  >unvote</button>
                                </span>
                              </div>
                              <br />

                              <div class="comment">
                                <span class="commtext c00">si ciertamente</span>

                                <div class="reply">
                                  <p>
                                    <font size="1">
                                      <u>
                                        <a href="/reply?id=4">reply</a>
                                      </u>
                                    </font>
                                  </p>
                                </div>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>

                  <tr class="athing comtr">
                    <td>
                      <table border="0">
                        <tbody>
                          <tr>
                            <td class="ind">
                              <img src="https://news.ycombinator.com/s.gif" height="1" width="0" />
                            </td>
                            <td valign="top" class="votelinks">
                              <center>
                                <button
                                  class="votearrow"
                                  id="vote7"
                                  likehref="/votepost/7"
                                  userlike="7"
                                  contid="7"
                                ></button>
                              </center>
                            </td>
                            <td class="default">
                              <div style="margin-top:2px; margin-bottom:-10px;">
                                <span class="comhead">
                                  <a
                                    href="/user?id=kennyangelsystem"
                                    class="hnuser"
                                  >kennyangelsystem</a>
                                  <span class="age">
                                    <a href="/reply?id=7">21 days ago</a>
                                  </span>

                                  <button
                                    class="unvotehidden"
                                    id="unvotehidden7"
                                    likehref="/votepost/7"
                                    userlike="7"
                                    contid="7"
                                  >unvote</button>
                                </span>
                              </div>
                              <br />
                              <div class="comment">
                                <span class="commtext c00">
                                  hello
                                  <div class="reply">
                                    <p>
                                      <font size="1">
                                        <u>
                                          <a href="/reply?id=7">reply</a>
                                        </u>
                                      </font>
                                    </p>
                                  </div>
                                </span>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
              <br />
              <br />
            </td>
          </tr>
        </tbody>
      </table>
    </td>
  </tr>
</template>
<script>
import axios from "axios";
export default {
  name: "Item",
  computed: {},
  data() {
    return {
      contribution: [],
      user_info: [],
      all_comments: [],
      url: Boolean
    };
  },
  methods: {
    getContributionInfo(id) {
      let config = {
        headers: {
          Authorization: "0AybBTtF.DEPlrYQmMtvA7rUDluh9l8TihvbryNPU"
        }
      };
      // For now we are authentication with a provisional APIkey
      axios
        .get(`https://hackers-asw.herokuapp.com/api/urls/${id}`, config)
        .then(response => {
          console.log("It went getcontrib");
          console.log(response.data);
          this.contribution = response.data;
        })
        .catch(error => {
          console.log(error.status);

          axios
            .get(`https://hackers-asw.herokuapp.com/api/asks/${id}`, config)
            .then(response => {
              console.log("estic ASKSSS");
              this.url = false;
              console.log(response.data);
              this.contribution = response.data;
            })
            .catch(error => {
              console.log(error);
            });

          console.log(error);
        });
    },
    getUrlparams() {
      let url = new URL(window.location.href);
      console.log("hola");

      return url.searchParams.get("id");
    },
    getPoints(npoints) {
        if(npoints > 1) return `${npoints} points`;
        return `${npoints} point`;
        

    },
    whenpublished(creation_date) {
      let y = '"' + creation_date + '"';
      let dateStr = JSON.parse(y);
      let date = new Date(dateStr);
      var moment = require("moment");
      return moment(date).fromNow();
    }
  },
  mounted() {
    //this.getProfileInfo(this.user.username);
    this.getContributionInfo(this.getUrlparams());
    this.url = true;
  }
};
</script>
<style>
@import "../assets/CSS/style.css";
</style>