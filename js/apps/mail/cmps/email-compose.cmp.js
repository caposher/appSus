// import { emailService } from "../services/email.service.js";
// import { eventBus, EVENT_SHOW_MSG } from '../../../services/event-bus.service.js';

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

            <!-- <form class="input-container" @submit.prevent="sendEmail">
                <input v-model="email.name" type="text" placeholder="To" required @input="debounce(saveDraft, 1000)" />
                <input v-model="email.subject" type="text" @keydown.enter.prevent placeholder="Subject" @input="debounce(saveDraft, 1000)" />
                <textarea v-model="email.body" placeholder="Compose email" @input="debounce(saveDraft, 1000)"></textarea>
                <section class="button-container">
                    <button type="submit" class="send-btn" title="Send email">Send</button>
                    <button type="button" @click="deleteDraft" class="delete-btn" title="Discard draft">
                        <i class="fas fa-trash-alt"></i>
                    </button>
                </section>
            </form> -->
        <!-- </section> -->
    `,
    //   <section v-if="email" class="email-compose">
    //   <header :class="headerClass" class="flex align-center space-between" >
    //       <h3>{{headerMsg}}</h3>
    //       <button @click="exitCompose" class="exit-btn"><i class="fas fa-times"></i></button>
    //   </header>
    //   <form class="input-container" @submit.prevent="sendEmail">
    //       <input v-model="email.name" type="text" placeholder="To" required @input="debounce(saveDraft, 1000)" />
    //       <input v-model="email.subject" type="text" @keydown.enter.prevent placeholder="Subject" @input="debounce(saveDraft, 1000)" />
    //       <textarea v-model="email.body" placeholder="Compose email" @input="debounce(saveDraft, 1000)"></textarea>
    //       <section class="button-container flex align-center space-between">
    //           <button type="submit" class="send-btn" title="Send email">Send</button>
    //           <button type="button" @click="deleteDraft" class="delete-btn" title="Discard draft">
    //               <i class="fas fa-trash-alt"></i>
    //           </button>
    //       </section>
    //   </form>
    // </section>




    //       <div class="email-compose flex column" :class="minimized">
    //       <div @click.stop="minimize" class="compose-header flex space-between align-center"> 
    //           <p> New Message </p> 
    //           <div class="header-controls flex">
    //               <button @click.stop="minimize" title="Minimize"> <i class="far" :class="minimizedIcon"></i> </button>
    //               <button @click.stop="saveAsDraft" title="Save and close"> <i class="fas fa-times"></i> </button>
    //           </div>
    //       </div>
    //       <section v-show="!minimizedMode">
    //           <div class="compose-to"> 
    //               <input type="email" ref="emailInput" v-model="emailToSend.to" name="composeTo" placeholder="To">    
    //           </div>
    //           <div class="compose-subject"> 
    //               <input type="text" name="composeSubject" v-model="emailToSend.subject" placeholder="Subject">    
    //           </div>
    //           <div class="compose-body"> 
    //               <textarea rows="15" type="text" v-model="emailToSend.body" ref="bodyInput" name="composeSubject" placeholder="Compose email" />    
    //           </div>
    //           <div class="compose-footer flex space-between align-center"> 
    //               <button :disabled="!isValid" title="Send" @click.stop="sendMail"> Send </button>
    //               <button @click="backToEmail" title="Discard draft"> <i class="fas fa-trash"></i> </button>
    //           </div>
    //       </section>
    //   </div>
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

    // },
    // computed: {
    //     headerClass() {
    //         return (this.isSaveDraft) ? 'draft' : '';
    //     },
    //     headerMsg() {
    //         return (this.isSaveDraft) ? 'Draft saved' : 'New Message';
    //     }
    // },
    mounted() {
        // console.log('REFS:', this.$refs);
        // this.$refs.to.focus();

    },
    methods: {
        exitCompose() {
            // this.saveDraft();
            // this.$router.push('/email');
            // composeEmail = false;
            this.$emit('close');
        },
        sendEmail() {
            this.$emit('send', this.email);
        },
        deleteAndClose() {
            this.$emit('deleteCompose');
        },
    },

}










    //     sendEmail() {
    //         if (!this.email.name.includes('@')) this.email.name += '@gmail.com';
    //         emailService.sendEmail(this.email)
    //             .then(() => {
    //                 eventBus.$emit(EVENT_SHOW_MSG, { txt: 'Email was sent', type: 'success' });
    //             });
    //         this.$router.push('/email/');
    //     },
    //     deleteDraft() {
    //         emailService.deleteEmail(this.email.id)
    //             .then(() => {
    //                 eventBus.$emit(EVENT_SHOW_MSG, { txt: 'Draft was discarded', type: 'success' });
    //             });
    //         this.$router.push('/email/');
    //     },
    //     saveDraft() {
    //         if (this.email.name || this.email.subject || this.email.body) {
    //             emailService.saveEmailDraft(this.email)
    //                 .then(() => {
    //                     this.isSaveDraft = true;
    //                     setTimeout(() => {
    //                         this.isSaveDraft = false;
    //                     }, 2000);
    //                 });
    //         }
    //     },

    //     exitCompose() {
    //         this.saveDraft();
    //         this.$router.push('/email');
    //     },
    //     debounce(func, time) {
    //         if (this.timeout) clearTimeout(this.timeout);
    //         this.timeout = setTimeout(func, time);
    //     }
