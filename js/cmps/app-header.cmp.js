export default {
  name: 'app-header',
  template: `
    <header class="app-header">
      <div class="header-logo flex item-center">
    <img src="imgs/icon.png">
    <h2>AppSus</h2>
</div >
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/email">Email</router-link>
      <router-link to="/keep">Keep</router-link>
    </nav>
    </header>
    `,
};
