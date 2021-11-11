export default {
  props: ['note'],
  name: 'note-preview',
  template: ` <section :class="[noteSize, noteColor]" class="note-preview flex flex-column content-center space-between">
                <div  class="notes-container">
                  <p>{{note.info.txt}}</p>
                </div>
                <div :class="noteToolsColor" class="note-tools">
                  <span @click="$emit('removed',note.id)"> <i class="far fa-trash-alt"></i> </span>
                  <span @click="$emit('edit',note.id)"> <i class="far fa-edit"></i></span>
                  <span @click="showColor=true"> <i class="fas fa-palette"></i></span>
                  <div v-show='showColor' :class="noteToolsColor" class="pallete">
                      <div @click="changeColor(num)" class="pallete-color color" :class="'color'+ num" v-for="(num in colors" :key="num"  ></div>
                  </div>
                </div>
              </section>`,
  data() {
    return {
      colors: 6,
      selected: 1,
      showColor: false,
    };
  },
  methods: {
    changeColor(color) {
      this.note.color = color;
      //TODO:update server
    },
  },
  computed: {
    noteSize() {
      let noteSize;
      const txtLen = this.note.info.txt.length;
      if (txtLen < 100) noteSize = 'small-note';
      else if (txtLen < 300) noteSize = 'medium-note';
      else noteSize = 'large-note';
      return noteSize;
    },
    noteColor() {
      this.showColor = false;
      return `color${this.note.color}`;
    },
    noteToolsColor() {
      this.showColor = false;
      return `color-tool${this.note.color}`;
    },
  },
};
