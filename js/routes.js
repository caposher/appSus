import homePage from './pages/home-page.cmp.js';
import emailPage from '../js/apps/mail/pages/email-app.cmp.js';
import keepPage from './pages/keep-app.cmp.js';
import emailDetails from './apps/mail/pages/email-details.cmp.js';

const routes = [
  {
    path: '/',
    component: homePage,
  },
  {
    path: '/books',
    component: homePage,
  },
  {
    path: '/email',
    component: emailPage,
  },
  {
    path: '/email/:emailId',
    component: emailDetails,
  },
  {
    path: '/keep',
    component: keepPage,
  },
];

export const router = new VueRouter({ routes });
