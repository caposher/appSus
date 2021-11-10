import emailPreview from '../cmps/email-preview.cmp.js';

export default {
    props: ['emails'],
    template: `
        <ul class="emails-list">
                <email-preview v-for="email in emails" :key="email.id" :email = "email"/>
           
            </li>
        </ul>
    `,
    methods: {
    },
    components: {
        emailPreview
    }
};