<template>
  <table border="0" class="comment-tree">
    <tbody>
      <tr v-for="fulla in node" :key=fulla class="athing comtr">
        <td>
          <table border="0">
            <tbody>
              <tr>
                <td class="ind">
                  <img src="https://news.ycombinator.com/s.gif" height="1" :width="20" />
                </td>
                <td valign="top" class="votelinks">
                  <center>
                    <button class="votearrow"></button>
                  </center>
                </td>
                <td class="default">
                  <div style="margin-top:2px; margin-bottom:-10px;">
                    <span class="comhead">
                      <a href class="hnuser">{{comment.author}}</a>
                      <span class="age">
                        <a href>  {{whenpublished(comment.creation_date)}}</a>
                      </span> |
                      <a href>edit</a> |
                      <a href>delete</a>
                      <button class="unvotehidden">unvote</button>
                    </span>
                  </div>
                  <br />
                  <div class="comment">
                    <span class="commtext c00">
                      {{comment.text}}
                      <div class="reply">
                        <p>
                          <font size="1">
                            <u>
                              <a href>reply</a>
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
</template>

<script>
export default {
  name: "node",
  props: {
    node: Object
  },
  methods:{
      whenpublished(creation_date) {
      let y = '"' + creation_date + '"';
      let dateStr = JSON.parse(y);
      let date = new Date(dateStr);
      var moment = require("moment");
      return moment(date).fromNow();
    },
    calculaEspai(){
        return this.espai * 20;
    }
  },
  mounted() {
    //this.getProfileInfo(this.user.username);
    console.log(this.node)
  }
};
</script>