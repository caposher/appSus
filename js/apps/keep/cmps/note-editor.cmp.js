export default {
  props: ['note'],
  name: 'note-editor',
  template: `
    <section v-if="updatedNote" class="note-editor">
        <div @click="closeModel" class="shadow-bg"></div>
        <div v-if="updatedNote.type === 'note-txt'" class="model flex flex-column justify-center">
        <textarea type="text" v-model="updatedNote.info.txt" placeHolder="Enter text here"/>
        <button @click="closeModel">close</button>
        </div>
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
