
export default {
    props: ['email'],
    template: `
    <li class="email-preview-container">
            <input ref="checkbox" type="checkbox"/>
            <div class="stars">
                    <span class="fa fa-star" :class="">

                    </span>
            </div>
            <div class="from"> {{ email.from }} </div>
            <div class="subject"> {{ email.subject }} </div>
            <div class="body"> - {{ email.body }} </div>
            <div class="sentAt"> {{ formattedDate }} </div>
            <div class="email-buttons">
                <button> <i class="fas fa-envelope"></i> </button>
                <button> <i class="fas fa-trash"></i> </button>
            </div>
</li>
    `,
    computed: {
        formattedDate() {
            var date = new Date(this.email.sentAt);
            return (this.email.sentAt) ? date.toLocaleString() : '';
        },

    },


}