import { notesService } from '../apps/keep/service/notes.service.js';
import notePreview from '../apps/keep/cmps/note-preview.cmp.js';
import noteInput from '../apps/keep/cmps/note-input.cmp.js';

export default {
  name: 'keep-app',
  template: `
    <section v-if="notes" class="keep-app main-content flex flex-column item-center ">
        <noteInput @new-note="setNewNote"/>
        <div class="nots-container main-width">
          <notePreview @removed="removedNote" v-for="note in notes" :key="note.id" :note="note"/>
        </div>
    </section>
  `,
  data() {
    return {
      notes: null,
    };
  },
  created() {
    this.getNotes();
  },
  methods: {
    getNotes() {
      notesService.getNotes().then((notes) => (this.notes = notes));
    },
    removedNote(id) {
      notesService.removeNote(id).then(() => this.getNotes());
    },
    setNewNote(note) {
      notesService.addNote(note).then(() => this.getNotes());
    },
  },

  components: {
    notePreview,
    noteInput,
  },
};
