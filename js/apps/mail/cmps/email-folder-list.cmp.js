export default {
    name: 'email-folder-list',
    props: ['emails'],
    template: `
        <section class="email-folders">
            <button class="compose"><img src="" />Compose</button>

            <div class="inbox" @click= "openFolder('inbox')" :class="styleClassFolder">
                <span> <i class="fas fa-inbox"></i> </span> 
                Inbox
            </div>
            <div class="starred" @click= "openFolder('starred')" :class="styleClassFolder">
                <span> <i class="fas fa-star"></i> </span>
                Starred
            </div>
            <div class="sent" @click= "openFolder('sent')" :class="styleClassFolder">
                <span> <i class="fas fa-share-square"></i> </span>
                Sent
            </div>
            <div class="drafts" @click= "openFolder('drafts')" :class="styleClassFolder">
                <span> <i class="fab fa-firstdraft"></i> </span>
                Drafts
            </div>
            <div class="deleted" @click= "openFolder('trash')" :class="styleClassFolder">
                <span> <i class="fas fa-trash"></i> </span>
                Trash
            </div>
        </section>
    `,
    data() {
        return {
            currFolder: 'inbox',
        }
    },
    methods: {
        openFolder(folder) {
            // if (!this.filterBy) return this.emails;
            // // console.log('this.filterBy.text', this.filterBy.text);
            // const searchStr = this.filterBy.text.toLowerCase();
            // // console.log('searchStr', searchStr);
            // let emailsToShow = this.emails;
            // if (this.filterBy.emailStatus === 'read')
            //     emailsToShow = emailsToShow.filter(email => email.isRead === true);
            // else if (this.filterBy.emailStatus === 'unread')
            //     emailsToShow = emailsToShow.filter(email => email.isRead === false);

            // emailsToShow = emailsToShow.filter(email =>
            //     (email.body.toLowerCase().includes(searchStr)) || (email.subject.toLowerCase().includes(searchStr)));
            // emailsToShow = emailsToShow;

            // // console.log('emailsToShow', emailsToShow);
            // return emailsToShow;

            this.currFolder = folder;
            this.$emit('folderUpdate', this.currFolder);
        }
    },
    computed: {
        styleClassFolder() {
        }
    }
}