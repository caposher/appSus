// import { eventBus } from "../../../services/event-bus-service";
// import { emailService } from "../service/email-service";

export default {
    name: 'email-folder-list',
    props: ['emails'],
    template: `
        <section class="side email-folders">
            <button class="compose" @click="composeEmail"><img src="" />Compose</button>

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
            this.currFolder = folder;
            this.$emit('folderUpdate', folder);
        },
        composeEmail() {
            this.$emit('compose');
            this.$router.push('compose');//

            // if (this.isDraftOpen) return
            // eventBus.$emit('openCompose')
            // eventBus.$emit('composeEmail')
            // this.isDraft = true;
        }
    },
    computed: {
        styleClassFolder() {
            return 'mark-folder';
        }
    }
}