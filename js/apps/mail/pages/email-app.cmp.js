import { emailService } from '../service/email-service.js';
import emailList from '../cmps/email-list.cmp.js';
import emailFolderList from '../cmps/email-folder-list.cmp.js';
import emailFilter from '../cmps/email-filter.cmp.js';
import { eventBus } from "../../../services/event-bus-service.js";


export default {
    template: `
        <section class="email-app app-main">
            <email-folder-list @folderUpdate="openRelevantFolder" :emails="emails"/>
            <div class="email-content">
                <email-filter @filtered="setFilter"/>
                <email-list @removeEmail="removeEmailFromList" :emails="emailsToShow" />
            </div>
        </section>
    `,
    data() {
        return {
            emails: null,
            filterBy: null,
            folder: 'inbox'
        };
    },

    created() {
        this.loadEmails();
    },
    methods: {
        loadEmails() {
            emailService.query()
                .then(emails => {
                    console.log(emails);
                    this.emails = emails;
                });
        },

        setFilter(filterBy) {
            this.filterBy = filterBy;
        },
        removeEmailFromList(emailId) {
            emailService.removeEmail(emailId)
                .then(() => {
                    this.emails = this.emails.filter(email => email.id !== emailId)
                    const msg = {
                        txt: `Email was removed`,
                        type: 'success'
                    };
                    eventBus.$emit('showMsg', msg);
                })
                .catch(err => {
                    console.log('err', err);
                    const msg = {
                        txt: 'Error. Please try later',
                        type: 'error'
                    };
                    eventBus.$emit('showMsg', msg);
                })
        },
        openRelevantFolder(folder) {
            this.folder = folder;
            // if (folder === 'inbox') this.emails = this.emails;
            // else if (folder === 'starred') {
            //     this.emails = this.emails.filter(email => email.isStarred);
            // }
            // else if (folder === 'sent') {
            //     this.emails = this.emails.filter(email => email.isSent);
            // }
            // else if (folder === 'drafts') {
            //     this.emails = this.emails.filter(email => email.isDraft);
            // }
            // if (folder === 'trash') {
            //     this.emails = this.emails.filter(email => email.isDeleted);
            // }
        }

    },

    computed: {
        emailsToShow() {
            // console.log(filterBy.emailStatus);
            if (!this.filterBy) return this.emails;
            // console.log('this.filterBy.text', this.filterBy.text);
            const searchStr = this.filterBy.text.toLowerCase();
            // console.log('searchStr', searchStr);
            let emailsToShow = this.emails;
            if (this.filterBy.emailStatus === 'read')
                emailsToShow = emailsToShow.filter(email => email.isRead);
            else if (this.filterBy.emailStatus === 'unread')
                emailsToShow = emailsToShow.filter(email => !email.isRead);

            // folders addition
            if (this.folder === 'starred') {
                emailsToShow = emailsToShow.filter(email => email.isStarred);
            }
            if (this.folder === 'sent') {
                emailsToShow = emailsToShow.filter(email => email.isSent);
            }
            // else if (folder === 'drafts') {
            //     emailsToShow = this.emails.filter(email => email.isDraft);
            // }
            emailsToShow = emailsToShow.filter(email =>
                (email.body.toLowerCase().includes(searchStr)) || (email.subject.toLowerCase().includes(searchStr)));


            // console.log('emailsToShow', emailsToShow);
            return emailsToShow;
        },


    },

    components: {
        emailList,
        emailFolderList,
        emailFilter

    }

}