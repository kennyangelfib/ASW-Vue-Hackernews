<template>
    <span>
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
                                    <button v-else-if="!contribution_list[index-1].uservotes.includes(user.username)" class="votearrow" v-bind:id="'vote' + contribution_list[index-1].id_contribution" v-on:click="votecontrib(contribution_list[index-1].id_contribution, index, user)" ></button>

                                    <button v-else class="votearrowhidden" v-bind:id="'vote' + contribution_list[index-1].id_contribution"  v-on:click="votecontrib(contribution_list[index-1].id_contribution, index, user)"></button>

                    </center>
                </td>
                <td class="title">
                <a :href="'/item?id='+ contribution_list[index-1].id_contribution" class="storylink" rel="nofollow">ASK HN: {{contribution_list[index-1].title}}</a>
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
</template>
<script>
//import VueJwtDecode from 'vue-jwt-decode';
import axios from "axios";
export default {
    name: 'Ask',
    computed:{ 
    },
    data(){
        return{
            user:{
                username:'kenny.angel.alejandro',
                karma: 1
            },
            contribution_list: []
        }
    },
    methods:{
        whenpublished(creation_date){
            let y = '"'+ creation_date +'"';
            let dateStr = JSON.parse(y);
            let date = new Date(dateStr);
            var moment = require('moment')
            return moment(date).fromNow();
        },
        getContributionsAsk (){
            console.log("IncontributionsAsKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK")
            let config = {
                headers: {
                    Authorization: 'J56g50Vu.zX5Ax15Z7MJ1am1npKRhc7bzxLSznPa1',
                }
            }
            // For now we are authentication with a provisional APIkey
            axios.get(
                "http://localhost:8000/api/asks",config
            ).then(response => {
                console.log("It went Ok----------------------------------------")
                //console.log(response.data);
                this.contribution_list = response.data;
            }).catch((error) => {
                    console.log(error);
            });
        }
    },
    mounted(){
        this.getContributionsAsk();
    }
}
</script>
<style>
    @import '../assets/CSS/style.css';
</style>