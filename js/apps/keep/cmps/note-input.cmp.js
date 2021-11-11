export default {
  name: 'note-input',
  template: ` <section class="note-input flex justify-center ">
                <div class="input-container main-width flex ">
                  <textarea type="text"  v-model="note.info.txt" :placeHolder="[[setUserTxt]]"/>  
                <span @click="newNote"><i class="fas fa-chevron-circle-right"></i></span>
                  <ul class="flex">
                    <li  v-for="(item,idx) in inputTypes" :key="idx">
                      <span><i @click="changeType(item,idx)" :class="'fas ' + item.font "></i></span>
                    </li>
                  </ul>
                </div>
              </section>`,
  data() {
    return {
      note: {
        type: 'note-txt',
        isPinned: false,
        color: 'color1',
        info: {
          txt: '',
        },
      },
      typeIdx: 0,
      inputTypes: [
        { font: 'fa-font', type: 'note-txt', requestTxt: 'text' },
        { font: 'fa-file-image', type: 'note-img', requestTxt: 'image URL' },
        { font: 'fa-video', type: 'note-video', requestTxt: 'video URL' },
      ],
    };
  },
  methods: {
    changeType(item, idx) {
      console.log('item.type', item.type);
      this.note.type = item.type;
      this.typeIdx = idx;
    },
    newNote() {
      if (this.note.info.txt) {
        this.$emit('new-note', this.note);
        this.note = {
          type: 'note-txt',
          isPinned: false,
          color: 'color1',
          info: {
            txt: '',
          },
        };
      }
    },
  },
  computed: {
    setUserTxt() {
      return `Enter ${this.inputTypes[this.typeIdx].requestTxt} here`;
    },
  },
};
