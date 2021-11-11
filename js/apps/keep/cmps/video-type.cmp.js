export default {
  props: ['url'],
  name: 'video-input',
  template: `
          <section class="video-input flex justify-center ">
          <!-- <iframe width="560" height="315" src="https://www.youtube.com/embed/L_XJ_s5IsQc" allow="picture-in-picture" allowfullscreen> </iframe> -->
          <iframe width="280" height="180" :src="convertToEmbaded" allowfullscreen> </iframe>
          </section>
      `,
  computed: {
    convertToEmbaded() {
      let videoId = this.url.split('?v=')[1];
      let newUrl = `https://www.youtube.com/embed/${videoId}`;
      return newUrl;
    },
  },
};
