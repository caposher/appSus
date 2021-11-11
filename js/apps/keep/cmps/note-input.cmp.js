export default {
  name: 'note-input',
  template: ` <section class="note-input flex justify-center ">
                <div class="input-container main-width flex ">
                  <!-- <input type="text" v-model="note.info.txt" placeHolder="Enter text here">        -->
                  <textarea type="text"   v-model="note.info.txt" placeHolder="Enter text here"/>       
                  <span @click="newNote"><i class="fas fa-chevron-circle-right"></i></span>
                  <!-- <img @click="newNote" src="imgs/go.png">           -->
                  <ul class="flex">
                    <li  v-for="item in inputTypes" :key="item">
                      <span><i :class="'fas ' + item "></i></span>
                    </li>
                  </ul>
                </div>
              </section>`,
  data() {
    return {
      note: {
        type: 'text',
        isPinned: false,
        info: {
          txt: '',
        },
      },
      inputTypes: ['fa-font', 'fa-file-image', 'fa-video'],
    };
  },
  methods: {
    newNote() {
      if (this.note.info.txt) {
        this.$emit('new-note', this.note);
        this.note = {
          type: 'text',
          isPinned: false,
          info: {
            txt: '',
          },
        };
      }
    },
  },
  computed: {},
};
