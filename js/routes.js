import homePage from './pages/home-page.cmp.js';
import emailPage from './pages/email-app.cmp.js';
import keepPage from './pages/keep-app.cmp.js';

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
    path: '/keep',
    component: keepPage,
  },
];

export const router = new VueRouter({ routes });
