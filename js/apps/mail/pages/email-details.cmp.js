import { emailService } from '../service/email-service.js';
import { eventBus } from '../../../services/event-bus-service.js';
import emailFolderList from '../cmps/email-folder-list.cmp.js';
import emailFilter from '../cmps/email-filter.cmp.js';


export default {
    template: `
        <section v-if="email" class="email-details email-app app-main"> 

        <email-folder-list/>

             <!-- <nav @click = "toggleFilters" class = "nav-container" >
                <button  class="menu-btn" >☰</button> -->
            <div class="email-content">
                <!-- <button class="menu-btn" v-on:click="toggleMenu">☰</button> -->
                <email-filter/>

            <!-- <button @click="sayAndClose" >X</button> -->
            <!-- <button @click="sayAndClose"><router-link :to="/email/"><i class="fas fa-long-arrow-alt-left"></i></router-link></button>  -->

            <button @click="sayAndClose"><i class="fas fa-long-arrow-alt-left"></i></button> 
            
            <h2>{{email.subject}}</h2>
            <div class="email-name">
                <h4>{{email.name}}</h4>
                <p>{{email.from}}</p>
            </div>
            <p>{{email.body}}</p>
            </div>

        </section>
    `,
    data() {
        return {
            email: null
        }
    },

    created() {
        this.loadEmail()
    },

    methods: {
        loadEmail() {
            const emailId = this.$route.params.emailId;
            console.log(this.$route.params.emailId);
            emailService.getById(emailId)
                .then(email => {
                    this.email = email;
                    console.log('email', this.email);

                })
        },

        sayAndClose() {
            console.log('Just saying');
            this.$router.push('/email');
            this.email = null;

        },
    },
    components: {
        emailFolderList,
        emailFilter,
    }
}

