export default {
  props: ['note'],
  name: 'note-editor',
  template: `
    <section v-if="updatedNote" class="note-editor">
        <div @click="closeModel" class="shadow-bg"></div>
        <div  :class="note.color" class="model flex flex-column justify-center item-center">
          <img v-if="updatedNote.type === 'note-img'" :src="note.info.txt">
          <iframe v-if="updatedNote.type === 'note-video'" :src="'https://www.youtube.com/embed/'+ note.info.videoId" allowfullscreen> </iframe>
          <textarea type="text" :class="'tool-'+note.color" v-model="updatedNote.info.txt" placeHolder="Enter text here"/>
            <button @click="closeModel">close</button>
        </div>
        </div> -->
    </section>
    `,
  data() {
    return {
      showModel: false,
      updatedNote: null,
    };
  },
  created() {
    this.updatedNote = this.note;
  },
  methods: {
    closeModel() {
      this.$emit('updated', { ...this.updatedNote });
      this.updatedNote = null;
    },
  },
};
