import { emailService } from '../service/email-service.js';
import { eventBus } from '../../../services/event-bus-service.js';

export default {
  props: ['composeEmail'],
  template: `
        <section v-if="composeEmail" class="email-compose">
            <div class="compose-header">
                <h3> New Message </h3> 
                <button @click="exitAndSaveDraft" class="exit-btn"> <i class="fas fa-times"></i> </button>
            </div>
            <form class="email-input-container" @submit.prevent="sendEmail">
                <div class="compose-to"> 
                    <input class="input-email" ref="to" type="email" v-model="email.to" placeholder="To" @input="debounce(saveDraft,5000)"/>    
                </div>
                <div class="compose-subject"> 
                    <input class="input-subject" type="text" v-model="email.subject" placeholder="Subject" @input="debounce(saveDraft,5000)"/>    
                </div>
                <div class="compose-body"> 
                    <textarea class="text-area-body" rows="15" type="text" v-model.trim="email.body" placeholder="Compose email" @input="debounce(saveDraft,5000)">
                    </textarea>    
                </div>
                <div class="compose-buttons-container"> 
                    <!-- <button class="send-email-btn" :disabled="!isValid" @click.stop="sendMail"> Send </button> -->
                    <button class="send-email-btn"> Send </button>
                    <button type="button" class="del-compose-email-btn" @click="deleteCompose"> <i class="fas fa-trash"></i> </button>
                </div>
            </form>
        </section>
    `,

  data() {
    return {
      email: null,
      // saveDraft: false
      isSaveDraft: false,
    };
  },
  created() {
    this.email = {
      to: '',
      subject: '',
      body: '',
    };
  },

  monuted() {
    this.$refs.to.focus();
  },
  methods: {
    // exitAndSaveDraft() {
    //     // this.saveDraft();
    //     // this.$router.push('/email');
    //     // composeEmail = false;
    //     this.$emit('close');
    //     this.$router.push('/email')

    sendEmail() {
      this.$emit('send', this.email);
      this.$router.push('/email');
    },
    deleteCompose() {
      this.$emit('deleteCompose');
      this.$router.push('/email');
    },
    exitAndSaveDraft() {
      this.saveDraft();
      this.$emit('close');
      this.$router.push('/email');
    },
    debounce(func, time) {
      if (this.timeout) clearTimeout(this.timeout);
      this.timeout = setTimeout(func, time);
    },
    saveDraft() {
      if (this.email.to || this.email.subject || this.email.body) {
        this.email.isDraft = true;
        // emailService.saveEmailDraft(this.email)
        emailService
          .sendEmail(this.email)
          .then(() => {
            this.isSaveDraft = true;
            const msg = {
              txt: `Email was added to Drafts`,
              type: 'success',
            };
            eventBus.$emit('showMsg', msg);
            setTimeout(() => {
              this.isSaveDraft = false;
            }, 5000);
          })
          .catch((err) => {
            console.log('err', err);
            const msg = {
              txt: 'Error. Please try later',
              type: 'error',
            };
            eventBus.$emit('showMsg', msg);
          });

        // this.$router.push('/email');
      }
    },
  },
};
