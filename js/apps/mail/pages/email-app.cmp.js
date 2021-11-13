import { emailService } from '../service/email-service.js';
import emailList from '../cmps/email-list.cmp.js';
import emailFolderList from '../cmps/email-folder-list.cmp.js';
import emailFilter from '../cmps/email-filter.cmp.js';
import { eventBus } from '../../../services/event-bus-service.js';
import emailCompose from '../cmps/email-compose.cmp.js';
import { notesService } from '../../keep/service/notes.service.js';

export default {
  template: `
        <section v-if="emails" class="email-app main-content">
            <email-folder-list @folderUpdate="openRelevantFolder" @compose="isCompose"
             :emails="emails"/>

             <!-- <nav @click="toggleFilters" class = "nav-container" >
                <button  class="menu-btn" >☰</button>
            </nav> -->
            <div class="email-content">
                <!-- <button class="menu-btn" v-on:click="toggleMenu">☰</button> -->
                <email-filter @filtered="setFilter"/>
                <email-list @removeEmail="removeEmailFromList" @sendEmailAsNote="sendAsNote" :emails="emailsToShow" />
                <email-compose v-if="composeEmail" :composeEmail = "composeEmail" @close="closeComposeEmail" @send="sendEmail" @deleteCompose="composeEmail=false"/>
            </div>
        </section>
    `,
  data() {
    return {
      emails: null,
      filterBy: {
        emailStatus: '',
        text: '',
      },
      folder: 'inbox',
      composeEmail: false,
      // emailToCompose: null,
      unreadEmails: 0,
      showList: false,
    };
  },

  created() {
    this.loadEmails();
    // this.filterBy.emailStatus = '';
  },
  methods: {
    loadEmails() {
      emailService.query().then((emails) => {
        // console.log(emails);
        this.emails = emails;
      });
    },

    setFilter(filterBy) {
      this.filterBy = filterBy;
    },
    removeEmailFromList(emailId) {
      emailService
        .removeEmail(emailId)
        .then(() => {
          this.emails = this.emails.filter((email) => email.id !== emailId);
          // this.composeEmail = false;
          const msg = {
            txt: `Email was removed`,
            type: 'success',
          };
          eventBus.$emit('showMsg', msg);
        })
        .catch((err) => {
          console.log('err', err);
          const msg = {
            txt: 'Error. Please try later',
            type: 'error',
          };
          eventBus.$emit('showMsg', msg);
        });
    },
    openRelevantFolder(folder) {
      this.folder = folder;
      console.log('folder', folder);
    },
    isCompose() {
      this.composeEmail = true;
    },
    closeComposeEmail() {
      // this.emailToCompose = null;
      this.composeEmail = false;
    },
    sendAsNote(email) {
      var note = notesService.getEmptyNote();
      note.isPinned = true;
      note.info.txt = `Email from ${email.from} + Subject - ${email.subject}` + '\n' + `Message: "${email.body}"`;
      notesService.addNote(note);
      this.$router.push('/keep');
    },
    sendEmail(email) {
      email.isSent = true;
      emailService
        .sendEmail(email)
        .then(() => {
          // console.log(email);
          // this.emails = this.emails.filter(email => email.isSent)
          this.composeEmail = false;
          this.folder = 'sent';
          this.emails = this.emails.filter((email) => email.isSent);

          const msg = {
            txt: `Email was sent`,
            type: 'success',
          };
          eventBus.$emit('showMsg', msg);
        })
        .catch((err) => {
          console.log('err', err);
          const msg = {
            txt: 'Error. Please try later',
            type: 'error',
          };
          eventBus.$emit('showMsg', msg);
        });
    },
    toggleMenu() {
      this.openNav = !this.openNav;
    },
  },

  computed: {
    emailsToShow() {
      // console.log('filterBy.emailStatus', this.filterBy);
      // var emailsToShow = this.emails;
      if (!this.filterBy) return this.emails;
      // console.log('this.filterBy.text', this.filterBy.text);
      const searchStr = this.filterBy.text.toLowerCase();
      // console.log('searchStr', searchStr);
      var emailsToShow = this.emails;
      // console.log('emailsToShow', emailsToShow);

      // console.log('emailsToShow', emailsToShow);

      if (this.filterBy.emailStatus !== '') {
        if (this.filterBy.emailStatus === 'read') emailsToShow = emailsToShow.filter((email) => email.isRead);
        else if (this.filterBy.emailStatus === 'unread') emailsToShow = emailsToShow.filter((email) => !email.isRead);
        // console.log('emailsToShow', emailsToShow);

        // return emailsToShow;
      }
      //
      // folders addition // added
      if (this.folder === 'inbox') {
        emailsToShow = emailsToShow.filter((email) => !email.isSent && !email.isDeleted && !email.isDraft);
      }
      //changed
      else if (this.folder === 'starred') {
        emailsToShow = emailsToShow.filter((email) => email.isStarred);
      } else if (this.folder === 'sent') {
        emailsToShow = emailsToShow.filter((email) => email.isSent && !email.isDeleted);
      } else if (this.folder === 'trash') {
        emailsToShow = this.emails.filter((email) => email.isDeleted);
        console.log('emailsIsTrashed', emailsToShow);
      } else if (this.folder === 'drafts') {
        emailsToShow = this.emails.filter((email) => email.isDraft && !email.isSent);
        console.log('emailsIsDrafts', emailsToShow);
      }
      // emailsToShow = emailsToShow.filter(email =>
      //     (email.body.toLowerCase().includes(searchStr)) || (email.subject.toLowerCase().includes(searchStr)));

      emailsToShow = emailsToShow.filter(
        (email) => email.body.toLowerCase().includes(searchStr) || email.subject.toLowerCase().includes(searchStr)
      );
      return emailsToShow;
    },
  },
  watch: {
    folder() {
      this.loadEmails();
      var emailsShow;
      if (this.folder === 'inbox') {
        emailsShow = this.emails.filter((email) => !email.isSent);
        this.emails = emailsShow;
      } else if (this.folder === 'starred') {
        emailsShow = this.emails.filter((email) => email.isStarred);
        this.emails = emailsShow;
        console.log(emailsShow);
      } else if (this.folder === 'sent') {
        emailsShow = this.emails.filter((email) => email.isSent);
        this.emails = emailsShow;
        console.log(emailsShow);
      } else if (this.folder === 'drafts') {
        emailsShow = this.emails.filter((email) => email.isDraft);
        this.emails = emailsShow;
        console.log(emailsShow);
      }

      console.log(emailsShow);
      // return emailsShow;
    },
  },

  components: {
    emailList,
    emailFolderList,
    emailFilter,
    emailCompose,
  },
};
