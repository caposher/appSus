// import emailFolderList from '../cmps/email-folder-list.cmp.js';

export default {
  name: 'email-filter',
  template: `
        <div class="email-filter">

            <!-- <email-folder-list class="email-folders email-folders-mobile" v-if="openNav"/> -->
            <!-- <button class="menu-btn" v-on:click="toggleMenu">☰</button> -->

            <!-- <i class="fas fa-search"></i> -->
            <input class="input-search" @input="filter" v-model="filterBy.text" type="text" placeholder="Search..." />
            <select class="filter-select" v-model="filterBy.emailStatus" @change="filter" >
                   <option value="" selected>All</option>
                   <option value="read">Read</option>
                   <option value="unread">Unread</option>
             </select>
        </div>
    `,
  data() {
    return {
      filterBy: {
        text: '',
        emailStatus: '',
      },
      openNav: false,
    };
  },
  methods: {
    filter() {
      // console.log(this.filterBy.emailStatus);
      this.$emit('filtered', { ...this.filterBy });
    },
    // toggleMenu() {
    //     this.openNav = !this.openNav
    // },
    // sort(){
    //     this.$emit('sorted', this.sortBy);
    // }
  },
  components: {
    // emailFolderList
  },
};
