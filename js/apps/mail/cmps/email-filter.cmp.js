export default {
    template: `
        <div class="email-filter">
            <input class="input-search" @input="filter" v-model="filterBy.text" type="text" placeholder="Search...">
            <select class="filter-select" v-model="filterBy.isRead" >
                   <option value='' selected>All</option>
                   <option value='true'>Read</option>
                   <option value='false'>Unread</option>
             </select>
        </div>
    `,
    data() {
        return {
            filterBy: {
                text: '',
                isRead: ''
            }
        };
    },
    methods: {
        filter() {
            this.$emit('filtered', { ...this.filterBy });

        }
    }
}
