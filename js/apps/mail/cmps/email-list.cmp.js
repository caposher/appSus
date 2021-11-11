import emailPreview from '../cmps/email-preview.cmp.js';

export default {
    name: 'email-list',
    props: ['emails'],
    template: `
        <ul class="emails-list">
                <email-preview @remove="deleteEmail" v-for="email in emails" :key="email.id" :email = "email"/>
           
            <!-- </li> -->
        </ul>
    `,
    methods: {
        deleteEmail(emailId) {
            this.$emit('removeEmail', emailId);
        }
    },
    components: {
        emailPreview
    }
};