export default {
  name: 'app-header',
  template: `
    <header class="app-header">
    <h2>AppSus</h2>
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/email">Email</router-link>
      <router-link to="/keep">Keep</router-link>
    </nav>
    </header>
    `,
};
