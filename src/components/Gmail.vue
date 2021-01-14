<template>  
    <div class="col-12">
        <div class="card social-block">
            Please login to your google account :
            <div>
                <div class="g-signin2" id="google-signin-button" data-onsuccess="onSignIn"></div>

            </div>

        </div>

        <div class="col-8">
            <h3>Inbox : </h3>
            <div class="card">
                <ul class="list-group list-group-flush">
                    <li v-for="mail in this.singeMailList" :key="mail.id" class="list-group-item">
                        
                  <div>
                      <div>
                        <u>Date</u>  :  <i>{{mail.date}}</i>
                      </div>
                      <div>
                          <u>Sent from</u> : {{mail.from}}
                      </div>
                      <div>
                        <u>Subject</u> : {{mail.subject}}
                    </div>
                    <div>
                        {{mail.snippet}}
                    </div>

                  </div>
                    </li>
                </ul>
            </div>

        </div>
    </div>
</template>


<script>
import axios from 'axios';



export default {
    name: 'Gmail',
    data() {
        return {
            profile:'',
            listEmail: '',
            token:'',
            user:'',
            mailList: '',
            nbOfMail:10,
            singeMailList:[]
            
        }
    },
    methods: {
        onSignIn(googleUser) {

            var profile = googleUser.getBasicProfile();

            this.token = googleUser.Bc.access_token;

            console.log("token du google user:", googleUser.access_token)

            console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
            console.log('Name: ' + profile.getName());
            console.log('Image URL: ' + profile.getImageUrl());
            console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
            console.log(googleUser);
            console.log(googleUser.Bc.access_token);
            this.profile = profile;
            this.getMails();
        },
        renderGoogle() {
            //eslint-disable-next-line
            gapi.signin2.render('google-signin-button', {
                scope:'https://mail.google.com/',
                onsuccess: this.onSignIn
            })
        },
        async getMails() {
            console.log("token de l'user google:",this.token);
            const res = await axios.get('https://gmail.googleapis.com/gmail/v1/users/'+this.profile.getId()+'/messages',
            {
                headers: {Authorization: `Bearer ${this.token}`},
                }
            );
            console.log(res);
            this.mailList = res.data.messages;
            console.log(this.mailList);
            this.getSingleMail();
            

        },
        async getSingleMail() {

        //    let size = this.mailList.length


            for (var i = 0 ; i < this.nbOfMail; i++) {
                // console.log(this.mailList[size-1-i].id)
                const res = await axios.get('https://gmail.googleapis.com/gmail/v1/users/'+this.profile.getId()+'/messages/'+this.mailList[i].id,
                {
                    headers: {Authorization: `Bearer ${this.token}`},
                    }
                );
                
                for (var j = 0; j < res.data.payload.headers.length; j++) {
                    // console.log(res.data.payload.headers[j].name)
                    // console.log(res.data.payload.headers[j].value)
                    if (res.data.payload.headers[j].name == "From") {
                        var from = res.data.payload.headers[j].value;
                    }
                    if (res.data.payload.headers[j].name == "Subject") {
                        var subject = res.data.payload.headers[j].value;
                    }
                    if (res.data.payload.headers[j].name == "Date") {
                        var date = res.data.payload.headers[j].value;
                    }
                }
                var bod = '';

                if (res.data.payload.parts) {
                    for (var k = 0; k < res.data.payload.parts.length; k++) {
                        console.log(res.data.payload.parts[k].body.mimeType)
                        if (res.data.payload.parts[k].mimeType == "text/plain") {
                            
                            try {
                                //eslint-disable-next-line
                                bod = atob(res.data.payload.parts[k].body.data.replace(/-/,'+').replace(/_/g,'/'));
                            }
                            catch (e) {
                                console.log(e)
                            }
                        }
                        


                    }

                    //eslint-disable-next-line
                    // bod = atob(test.replace(/-/,'+').replace(/_/g,'/'));

                }

                let newMail = {
                id: res.data.id,
                date: date,
                from: from,
                subject: subject,
                snippet: res.data.snippet,
                raw: res.data.raw,
                bod: bod
                
                }
                console.log(res.data)
                // console.log(newMail);

                // let str = atob(res.data.payload.parts[0].body.data);
                // console.log(str)
                this.singeMailList.push(newMail)
            }
            
            console.log(this.singeMailList)
        }

    },

    mounted() {
        window.addEventListener("google-loaded", this.renderGoogle);     
    }
} 


</script>