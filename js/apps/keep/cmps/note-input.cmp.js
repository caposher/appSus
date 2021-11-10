export default {
  name: 'note-input',
  template: ` <section class="note-input flex justify-center ">
                <div class="input-container main-width flex ">
                  <!-- <input type="text" v-model="note.info.txt" placeHolder="Enter text here">        -->
                  <textarea type="text"   v-model="note.info.txt" placeHolder="Enter text here"/>       
                  <img @click="newNote" src="imgs/go.png">          
                  <ul class="flex">
                    <li  v-for="item in inputTypes" :key="item">
                      <img :src="'imgs/'+item + '.png'">
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
      inputTypes: ['font', 'gallery', 'youtube'],
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
};
