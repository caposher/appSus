// import { emailService } from "../services/email.service.js";

export default {
    props: ['composeEmail'],
    template: `
        <section v-if="composeEmail" class="email-compose">
            <div class="compose-header">
                <h3> New Message </h3> 
                <button @click="exitCompose" class="exit-btn"> <i class="fas fa-times"></i> </button>
            </div>
            <form class="input-container" @submit.prevent="sendEmail">
                <div class="compose-to"> 
                    <input class="input-email" ref="to" type="email" v-model="email.to" placeholder="To"/>    
                </div>
                <div class="compose-subject"> 
                    <input class="input-subject" type="text" v-model="email.subject" placeholder="Subject"/>    
                </div>
                <div class="compose-body"> 
                    <textarea class="text-area-body" rows="15" type="text" v-model="email.body" placeholder="Compose email">
                    </textarea>    
                </div>
                <div class="compose-buttons-container"> 
                    <!-- <button class="send-email-btn" :disabled="!isValid" @click.stop="sendMail"> Send </button> -->
                    <button class="send-email-btn"> Send </button>
                    <button class="del-compose-email-btn" @click="deleteAndClose"> <i class="fas fa-trash"></i> </button>
                </div>
            </form>
        </section>
    `,

    data() {
        return {
            email: null,
            saveDraft: false

        }
    },
    created() {
        this.email = {
            to: '',
            subject: '',
            body: ''
        }
    },

    monuted() {
        this.$refs.to.focus();

    },
    methods: {
        exitCompose() {
            // this.saveDraft();
            // this.$router.push('/email');
            // composeEmail = false;
            this.$emit('close');
            this.$router.push('/email')
        },
        sendEmail() {
            this.$emit('send', this.email);
            this.$router.push('/email')
        },
        deleteAndClose() {
            this.$emit('deleteCompose');
            this.$router.push('/email')

        },
    },

}









