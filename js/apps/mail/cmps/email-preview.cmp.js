import { emailService } from "../service/email-service.js";
// import { eventBus } from "../../../services/event-bus-service";

export default {
    name: 'email-preview',
    props: ['email'],
    template: `
    <!-- <section> -->
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
    <!-- <li v-if= "showEmail" class="email-show" >
        <div class="peek-header flex space-between">
             <h3 class="peek-subject"> {{ email.subject }} </h3>
             <div class=peek-controls>
                <router-link :to="'email/' + email.id"> <i class="fas fa-expand"></i> </router-link>
                <button @click.stop="replyToEmail" title="Replay"> <i class="fas fa-reply"></i> </button>
                <button @click.stop="saveAsNote" title = "Save as a Note" > <i class="fas fa-paper-plane"></i> </button >
                <button @click.stop="deleteEmail(email.id)" title = "Delete" > <i class="fas fa-trash"></i> </button >
            </div >
         </div >
         <p class="peek-from"> {{ email.from }} <span> <{{ email.fromEmail }}> </span> </p>
         <p class="peek-body"> {{ email.body }} </p>
     </li> -->
  
<!-- </section> -->
    `,
    computed: {
        formattedDate() {
            var dateObj = new Date();
            var month = dateObj.getUTCMonth() + 1; //months from 1-12
            var day = dateObj.getUTCDate();
            var year = dateObj.getUTCFullYear();
            var newdate = day + "/" + month + "/" + year;
            // return newdate;
            return new Date().toString().slice(4, 7) + ' ' + day; //month
            // var date = new Date(this.email.sentAt);
            // return (this.email.sentAt) ? date.toLocaleString() : '';
        },
        formattedBodyText() {
            return this.email.body.slice(0, 40);
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