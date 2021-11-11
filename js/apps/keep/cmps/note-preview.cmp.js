export default {
  props: ['note'],
  name: 'note-preview',
  template: ` <section :class="noteSize" class="note-preview flex flex-column content-center space-between">
                <div  class="notes-container">
                  <p>{{note.info.txt}}</p>
                </div>
                <div class="note-tools">
                  <img @click="$emit('removed',note.id)" src="imgs/delete.png"/>
                  <img @click="$emit('edit',note.id)" src="imgs/edit.png"/>
                </div>
              </section>`,

  computed: {
    noteSize() {
      let noteSize;
      const txtLen = this.note.info.txt.length;
      if (txtLen < 100) noteSize = 'small-note';
      else if (txtLen < 300) noteSize = 'medium-note';
      else noteSize = 'large-note';
      return noteSize;
    },
  },
};
