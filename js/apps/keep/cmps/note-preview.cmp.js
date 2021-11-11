import textType from './text-type.cmp.js';
import imgType from './img-type.cmp.js';

export default {
  props: ['note'],
  name: 'note-preview',
  template: ` <section :class="[noteSize, noteColor]" class="note-preview flex flex-column content-center space-between">
                <text-type v-if="note.type === 'note-txt'" :txt="note.info.txt"/>
                <img-type v-if="note.type === 'note-img'" :url="note.info.txt"/>
                <div :class="noteToolsColor" class="note-tools">
                  <span @click="$emit('removed',note.id)"> <i class="far fa-trash-alt"></i> </span>
                  <span @click="$emit('showModel',note)"> <i class="far fa-edit"></i></span>
                  <span @click="showColors=true"> <i class="fas fa-palette"></i></span>
                  <div v-show='showColors' :class="noteToolsColor" class="pallete">
                      <div @click="changeColor(num)" class="pallete-color color" :class="'color'+ num" v-for="(num in colors" :key="num"  ></div>
                  </div>
                </div>

              </section>`,
  data() {
    return {
      colors: 6,
      showColors: false,
    };
  },
  methods: {
    changeColor(color) {
      this.note.color = `color${color}`;
      this.$emit('updated', this.note);
    },
  },
  computed: {
    noteSize() {
      let noteSize;
      switch (this.note.type) {
        case 'note-txt':
          const txtLen = this.note.info.txt.length;
          if (txtLen < 100) noteSize = 'small-note';
          else if (txtLen < 500) noteSize = 'medium-note';
          else noteSize = 'large-note';
          return noteSize;
          break;

        case 'note-img':
        case 'note-video':
          noteSize = 'large-note';
      }
    },
    noteColor() {
      this.showColors = false;
      return this.note.color;
    },
    noteToolsColor() {
      this.showColors = false;
      return `tool-${this.note.color}`;
    },
  },
  components: {
    textType,
    imgType,
  },
};
