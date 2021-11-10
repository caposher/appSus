import { router } from './routes.js';
import AppHeader from './cmps/app-header.cmp.js';
import AppFooter from './cmps/app-footer.cmp.js';

const options = {
  el: '#app',
  router,
  template: `
            <section>
                <app-header/>
                <router-view />
                <app-footer/>
            </section>
`,
  components: { AppHeader, AppFooter },
};

new Vue(options);
