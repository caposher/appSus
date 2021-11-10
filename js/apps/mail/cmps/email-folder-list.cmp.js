export default {
    template: `
        <section class="email-folders">
            <button class="compose">+ Compose</button>
            <div class="inbox">
                <span> <i class="fas fa-inbox"></i> </span> 
                Inbox
            </div>
            <div class="starred">
                <span> <i class="fas fa-star"></i> </span>
                Starred
            </div>
            <div class="sent">
                <span> <i class="fas fa-share-square"></i> </span>
                Sent
            </div>
            <div class="drafts">
                <span> <i class="fab fa-firstdraft"></i> </span>
                Drafts
            </div>
            <div class="deleted">
                <span> <i class="fas fa-trash"></i> </span>
                Trash
            </div>
        </section>
    `
}