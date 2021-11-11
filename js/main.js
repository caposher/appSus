import { router } from './routes.js';
import AppHeader from './cmps/app-header.cmp.js';
import AppFooter from './cmps/app-footer.cmp.js';
import userMsg from './cmps/user-msg.cmp.js';

const options = {
  el: '#app',
  router,
  template: `
            <section>
                <user-msg/>
                <app-header/>
                <router-view />
                <app-footer/>
            </section>
`,
  components: { AppHeader, AppFooter, userMsg },
};

new Vue(options);
