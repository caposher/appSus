import { emailService } from "../service/email-service.js";
// import { eventBus } from "../../../services/event-bus-service";

export default {
    name: 'email-preview',
    props: ['email'],
    template: `
    <!-- <section class="email-row-container"> -->
    <li class="email-preview-container" :class="classIsRead">
            <button @click.stop="toggleStar">
                    <span class="stars" :class="classStar"></span>
            </button>
            <div class="from"> {{ email.from }} </div>
            <div class="subject"> {{ formattedSubjectText }} </div>
            <div class="body"> - {{ formattedBodyText }} </div>
            <div class="sent-at"> {{ formattedDate }} </div>
            <div class="email-buttons">
                <button @click= "toggleRead"> <i :class="classStyleRead"></i> </button>
                <!-- <i class="fas fa-envelope-open-text"></i> -->
                <button @click= "deleteEmail(email.id)"> <i class="fas fa-trash"></i> </button>
            </div>
    </li>
  
<!-- </section> -->
    `,
    computed: {
        formattedDate() {
            var dateObj = new Date();
            var month = dateObj.getUTCMonth() + 1; //months from 1-12
            var day = dateObj.getUTCDate();
            var year = dateObj.getUTCFullYear();
            var newdate = day + "/" + month + "/" + year;
            return newdate;
            // return new Date().toString().slice(4, 7); //month
            // var date = new Date(this.email.sentAt);
            // return (this.email.sentAt) ? date.toLocaleString() : '';
        },
        formattedBodyText() {
            return this.email.body.slice(0, 30);
        },
        formattedSubjectText() {
            return this.email.body.slice(0, 10);
        },
        classStyleRead() {
            if (this.email.isRead) return 'fas fa-envelope-open'
            else return 'fas fa-envelope'
        },
        classStar() {
            if (this.email.isStarred) return 'fas fa-star checked'
            else return 'far fa-star'
        },
        classIsRead() {
            if (this.email.isRead) return 'read';
            else return 'unread';
        }

    },


    methods: {
        toggleRead() {
            console.log('test');
            this.email.isRead = !this.email.isRead
            emailService.updateEmail(this.email)
                .then(email => this.email = email);
        },
        toggleStar() {
            console.log('test');
            this.email.isStarred = !this.email.isStarred;
            emailService.updateEmail(this.email)
                .then(email => this.email = email);

        },
        deleteEmail(emailId) {
            this.$emit('remove', emailId);
        },
    },

    components: {


    }


}