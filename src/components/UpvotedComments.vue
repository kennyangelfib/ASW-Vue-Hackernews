<template>

    <span>

        <span v-if user.username == this.username >
            <div v-for="index in contribution_list.length" :key="index">

                <tr class="athing">
                <td align="right" valign="top" class="title"><span class="rank"> {{index}}.</span></td>
                <td valign="top" class="votelinks">
                <center>

                    <button v-else-if="!contribution_list[index-1].uservotes.includes(user.username)" class="votearrow" v-bind:id="'vote' + contribution_list[index-1].id_contribution" v-on:click="votecontrib(contribution_list[index-1].id_contribution, index, user)" ></button>

                    <button v-else class="votearrowhidden" v-bind:id="'vote' + contribution_list[index-1].id_contribution"  v-on:click="votecontrib(contribution_list[index-1].id_contribution, index, user)"></button>

                    </center>
                </td>

                <td class="default">
                    <div style="margin-top:2px; margin-bottom:-10px;">
                        <span class="comhead">
                            <a :href="'/user?id=' + contribution_list[index-1].author" class="hnuser"> {{contribution_list[index-1].author}} </a>
                            <span class="age">
                                <a :href="'/item?id='+ contribution_list[index-1].id_contribution"> {{whenpublished(contribution_list[index-1].creation_date)}} </a> |

                            </span >

                            <span v-if="!contribution_list[index-1].uservotes.includes(user.username)">

                            <button class="votearrow" v-bind:id="'vote' + contribution_list[index-1].id_contribution" v-on:click="votecontrib(contribution_list[index-1].id_contribution, index, user)" ></button>
                            </span>
                            <span v-else >
                                <button class="votearrowhidden" v-bind:id="'vote' + contribution_list[index-1].id_contribution"  v-on:click="votecontrib(contribution_list[index-1].id_contribution, index, user)"></button>
                            </span>


                            <span class="par"> |

                                <a v-if="contribution[index-1].parent.id_contribution == None" href="item?id={{ contribution.contribution_ref.id_contribution}}">parent</a>

                                <a  v-else ="item?id={{ contribution[index-1].parent.id_contribution}}">parent</a>

                                <span class='storyon'> | on:
                                    <a :href="'/item?id='+ contribution_list[index-1].contribution_ref.id_contribution"  >{{contribution_list[index-1].contribution_ref.title}}</a>
                                </span>
                            </span>
                        </span>
                    </div>

                <br>
                    <div class="comment">
                        <span class="commtext c00">
                            {{ contribution_list[index-1].text }}
                    </span>
                        <div class='reply'></div>
                    </div>
                </td>
            </tr>
            <tr class="spacer" style="height:15px"></tr>

                {% if contribution.id_contribution not in voted %}
                                <button class="votearrow" id="vote{{ contribution.id_contribution }}" likehref='{{ contribution.get_api_like_url }}' userlike='{{ user.pk }}' contid='{{ contribution.id_contribution }}'></button>
                            {% else %}
                                <button class="votearrowhidden" id="votehidden{{ contribution.id_contribution }}" likehref='{{ contribution.get_api_like_url }}' userlike='{{ user.pk }}' contid='{{ contribution.id_contribution }}'></button>
                            {% endif %}
                        {% endif %}








        </span>



    </span>


    
</template>

<script>
import axios from "axios";
export default {
    name: "UpvotedComments",
    data(){
        return{
            user:{
                username:'faaraujo88',
                karma: 1
            },
            contribution_list: []
        };
    },
    methods:{
        whenpublished(creation_date){
            let y = '"'+ creation_date +'"';
            let dateStr = JSON.parse(y);
            let date = new Date(dateStr);
            var moment = require('moment')
            return moment(date).fromNow();
        },
        getContributionsAskUrl () {
            console.log("IncontributionsAsKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK")
            let config = {
                headers: {
                    Authorization: 'i4nplFBS.BtRmK5JuBZAEgHdd0KbVCMU5v8BwdGhg',
                }
            }
            // For now we are authentication with a provisional APIkey
            axios.get(
                "http://localhost:8000/api/newest", config
            ).then(response => {
                console.log("It went Ok----------------------------------------")
                //console.log(response.data);
                this.contribution_list = response.data;
            }).catch((error) => {
                console.log(error);
            })
        },

        votecontrib(idcontrib, ind,user) {

            axios({
                method: 'post',
                url: 'http://localhost:8000/api/contributions/' + idcontrib + '/votes',
                headers: {
                    Authorization: 'i4nplFBS.BtRmK5JuBZAEgHdd0KbVCMU5v8BwdGhg'
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
                url: 'http://localhost:8000/api/contributions/' + idcontrib + '/votes',
                headers: {
                    Authorization: 'i4nplFBS.BtRmK5JuBZAEgHdd0KbVCMU5v8BwdGhg'
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
        }
    },
    mounted () {
        this.getContributionsAskUrl();
    }


};
</script>

<style scoped>

</style>