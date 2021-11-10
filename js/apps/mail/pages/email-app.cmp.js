import { emailService } from '../service/email-service.js';
import emailList from '../cmps/email-list.cmp.js';
import emailFolderList from '../cmps/email-folder-list.cmp.js';
import emailFilter from '../cmps/email-filter.cmp.js';

export default {
    template: `
        <section class="email-app app-main">
            <email-folder-list/>
            <div class="email-content">
                <email-filter @filtered="setFilter"/>
                <email-list :emails="emailsToShow" />
            </div>
        </section>
    `,
    data() {
        return {
            emails: null,
            filterBy: null
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

    },

    computed: {
        emailsToShow() {
            if (!this.filterBy) return this.emails;
            // console.log('this.filterBy.text', this.filterBy.text);
            const searchStr = this.filterBy.text.toLowerCase();
            // console.log('searchStr', searchStr);
            const emailsToShow = this.emails.filter(email => {
                return (email.body.toLowerCase().includes(searchStr)) || email.subject.toLowerCase().includes(searchStr);
            })

            // console.log('emailsToShow', emailsToShow);
            return emailsToShow;
        }
    },
    components: {
        emailList,
        emailFolderList,
        emailFilter

    }

}