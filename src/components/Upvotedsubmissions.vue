<template>
    <span>
        <span v-if="user.username == getUrlparams()">
            <div v-for="index in contribution_list.length" :key="index">
            <tr class="athing">
                <td align="right" valign="top" class="title"><span class="rank"> {{index}}.</span></td>
                <td valign="top" class="votelinks">
                    <center>
                        <span v-if="contribution_list[index-1].author == user.username" style="text-align=center">
                            <font color="#ff6600" >*</font>
                            <img height="1" width="14">
                        </span>
                        <span v-else>
                            <button class="votearrow"/>
                        </span>    
                   <!-- Here should evaluate if it's voted or not by the user -->
                        <!-- <span v-else-if="">
                                {% if contribution.id_contribution not in voted %}
                                    <button class="votearrow" id="vote{{ contribution.id_contribution }}" likehref='{{ contribution.get_api_like_url }}' userlike='{{ user.pk }}' contid='{{ contribution.id_contribution }}'></button>
                                {% else %}
                                    <button class="votearrowhidden" id="votehidden{{ contribution.id_contribution }}" likehref='{{ contribution.get_api_like_url }}' userlike='{{ user.pk }}' contid='{{ contribution.id_contribution }}'></button>
                                {% endif %}
                            </span>
                            {% endif %} -->
                    </center>
                </td>
                <td class="title">
                    <span v-if="contribution_list[index - 1].type == 'ASK'">
                        <a :href="'/item?id=' + contribution_list[index - 1].id_contribution" class="storylink" rel="nofollow">ASK HN: {{contribution_list[index - 1].title}}</a>
                    </span>
                    <span v-else>
                        <a :href="contribution_list[index - 1].url">{{contribution_list[index - 1].title}} ({{getbasepath(contribution_list[index - 1].url)}})</a>
                    </span>
                </td>
                
            </tr>
            <!-- <tr class="spacer" style="height:2px"></tr> -->
            <tr>
                <td colspan="2"></td>
                <td class="subtext">
                    <span class="score">{{contribution_list[index-1].points}} </span>
                    <span v-if="contribution_list[index-1].points == 1"> point </span> 
                    <span v-else> points </span>    
                    by 
                    <a :href="'/user?id=' + contribution_list[index-1].author"> {{contribution_list[index-1].author}} </a>
                    <span class="age">
                        <!-- "2020-05-06T18:05:21.582592" -->
                        <!-- <a :href="'/item?id='+ contribution_list[index-1].id_contribution"> {{whenpublished("2020-05-06T18:05:21.582592")}} </a> | -->
                        <a :href="'/item?id='+ contribution_list[index-1].id_contribution"> {{whenpublished(contribution_list[index-1].creation_date)}} </a> |
                    </span>  
                    <span v-if="contribution_list[index-1].author == user.username"> 
                        <a :href="'/edit?id='+ contribution_list[index-1].id_contribution">edit</a> |
                        <a :href="'/delete-confirm?id='+ contribution_list[index-1].id_contribution">delete</a>
                    </span>
                    <span v-else> 
                        <!-- Here should evaluate if it's voted or not by the user -->
                        <!-- {% if contribution.id_contribution in voted %} 
                            <button class="unvote" id="unvote{{ contribution.id_contribution }}" likehref='{{ contribution.get_api_like_url }}' userlike='{{ user.pk }}' contid='{{ contribution.id_contribution }}'>unvote |</button> 
                            {% else %}
                        <button class="unvotehidden" id="unvotehidden{{ contribution.id_contribution }}" likehref='{{ contribution.get_api_like_url }}' userlike='{{ user.pk }}' contid='{{ contribution.id_contribution }}'>unvote |</button>
                        {% endif %} -->
                        <a :href="'/item?id='+ contribution_list[index-1].id_contribution">
                            <span v-if="contribution_list[index-1].comments==0">
                                discuss
                            </span>   
                            <span v-else-if="contribution_list[index-1].comments==1">
                                1 comment
                            </span>
                            <span v-else>
                                {{contribution_list[index-1].comments }} comments
                            </span>
                        </a>   
                    </span>
                </td>
            </tr>
            <tr class="spacer" style="height:10px"></tr>                
        </div>
        </span>

        <span v-else >
            <p>You can't see this</p>
        </span>
    </span>
</template>

<script>
    import axios from "axios";
    import apitools from "../mixins/apitools.js";
    export default {
        name: 'Upvotedsubmissions',
        data(){
            return{
                user:{
                    username: localStorage.getItem('username'),
                    karma: 1
                },
                contribution_list: []
            };
        },
        methods:{
            getbasepath(url){
            return url.split('//')[1].split('/')[0]
            },
            whenpublished(creation_date){
                let y = '"'+ creation_date +'"';
                let dateStr = JSON.parse(y);
                let date = new Date(dateStr);
                var moment = require('moment')
                return moment(date).fromNow();
            },
            getContributionsAskUrl (username){
                let config = {
                    headers: {
                        Authorization: apitools.getApikey(),
                    }
                }
                axios.get(
                    `https://hackers-asw.herokuapp.com/api/upvotedSubmissions/${username}`,config
                ).then(response => {
                    console.log(response.data)
                    this.contribution_list = response.data;
                }).catch((error) => {
                    console.log(error);
                });
            },

            votecontrib(idcontrib, ind,user) {
                axios({
                    method: 'post',
                    url: 'https://hackers-asw.herokuapp.com/api/contributions/' + idcontrib + '/votes',
                    headers: {
                        Authorization: apitools.getApikey(),
                    }
                }).then(response => {
                    console.log("We are voting to contrib" +idcontrib)
                    console.log(response.data);
                    console.log("Beforeeee" +idcontrib)
                    console.log(this.contribution_list[ind-1].uservotes)
                    console.log("After" +idcontrib)
                    console.log(this.contribution_list[ind-1].uservotes.push(user.username))
                    console.log(this.contribution_list[ind-1].uservotes)
                    ++this.contribution_list[ind-1].points
                }).catch((error) => {
                    console.log(error);
                })
            },
            unvotecontrib(idcontrib, ind,user) {
                axios({
                    method: 'delete',
                    url: 'https://hackers-asw.herokuapp.com/api/contributions/' + idcontrib + '/votes',
                    headers: {
                        Authorization: apitools.getApikey(),
                    }
                }).then(response => {
                    console.log("We are UNvoting to contrib" +idcontrib)
                    console.log(response.data);
                    console.log(this.contribution_list[ind-1].uservotes)
                    var index = this.contribution_list[ind-1].uservotes.indexOf(user.username)
                    console.log("index is" +index)
                    console.log("Beforeeee" +idcontrib)
                    console.log(this.contribution_list[ind-1].uservotes)
                    if (index > -1) {
                        this.contribution_list[ind-1].uservotes.splice(index, 1)
                    }
                    --this.contribution_list[ind-1].points
                    console.log("After" +idcontrib)
                    console.log(this.contribution_list[ind-1].uservotes)
                }).catch((error) => {
                    console.log(error);
                })
            },
            getUrlparams() {
                let url = new URL(window.location.href);
                console.log("hola");
                console.log(url.searchParams.get("id"))
                return url.searchParams.get("id");
            },
        },
        mounted () {
            this.getContributionsAskUrl(this.getUrlparams());
            //this.votecontrib();
            //this.unvotecontrib();
        }
    };

</script>

<style scoped>

</style>