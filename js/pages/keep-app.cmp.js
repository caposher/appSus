import notePreview from '../apps/keep/cmps/note-preview.cmp.js';
export default {
  name: 'keep-app',
  template: `
    <section class="keep-app main-content flex justify-center">
        <div class="nots-container main-width">
          <notePreview v-for="(txt, idx) in temp" :key="idx" :txt="txt"/>
        </div>
    </section>
  `,
  data() {
    return {
      temp: [
        '1Lorem ipsum dolor sit amet consectetur ',
        '2Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima alias nobis illo esse iste eum culpa quaerat commodi excepturi aperiam suscipit praesentium incidunt, dignissimos voluptatem sit ea delectus, quos aut.',
        '3Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima alias nobis illo esse iste eum culpa quaerat commodi excepturi aperiam suscipit praesentium incidunt, dignissimos voluptatem sit ea delectus, quos autorem ipsum dolor sit amet consectetur adipisicing elit. Minima alias nobis illo esse iste eum culpa quaerat commodi excepturi aperiam suscipit praesentium incidunt, dignissimos voluptatem sit ea delectus, quos aut.',
        '4Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima alias nobis illo esse iste eum culpa quaerat commodi excepturi aperiam suscipit praesentium incidunt, dignissimos voluptatem sit ea delectus, quos aut.',
        '5Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima alias nobis illo esse iste eum culpa quaerat commodi excepturi aperiam suscipit praesentium incidunt, dignissimos voluptatem sit ea delectus, quos aut.',
        '6Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima alias nobis illo esse iste eum culpa quaerat commodi excepturi aperiam suscipit praesentium incidunt, dignissimos voluptatem sit ea delectus, quos aut.',
      ],
    };
  },
  components: {
    notePreview,
  },
};
