<template>
<div>
    <div  v-for="comment in node" :key=comment>
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
                              <a :href="'http://localhost:8080/reply?id=' + comment.id_contribution">reply</a>
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
 <tree v-if="comment.replies && comment.replies.length"
                    :node="comment.replies"></tree>
 </div>
</div>
    
</template>

<script>
export default {
  name: "tree",
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
    }
  },
  mounted() {
    //this.getProfileInfo(this.user.username);
    console.log(this.node)
  }
};
</script>