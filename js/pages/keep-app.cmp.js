import { notesService } from '../apps/keep/service/notes.service.js';
import notePreview from '../apps/keep/cmps/note-preview.cmp.js';
import noteInput from '../apps/keep/cmps/note-input.cmp.js';
import noteEditor from '../apps/keep/cmps/note-editor.cmp.js';

export default {
  name: 'keep-app',
  template: `
    <section v-if="notes" class="keep-app main-content flex flex-column item-center ">
      <note-editor v-if="noteInModel" :note="noteInModel" @updated="editNote"/>
        <noteInput @new-note="setNewNote"/>
        <div class="notes-container main-width">
          <notePreview @removed="removedNote" @updated="editNote" @showModel="showModel" v-for="note in notes" :key="note.id" :note="note"/>
        </div>
    </section>
  `,
  data() {
    return {
      notes: null,
      noteInModel: null,
    };
  },
  created() {
    notesService.getNotes().then(this.setNotes);
  },
  methods: {
    setNotes(notes) {
      notes.sort((note) => (note.isPinned ? -1 : 1));
      this.notes = notes;
    },
    removedNote(id) {
      notesService.removeNote(id).then(this.setNotes);
    },
    setNewNote(note) {
      notesService.addNote(note).then(this.setNotes);
    },
    editNote(note) {
      notesService.updateNote(note).then(this.setNotes);
      this.noteInModel = null;
    },

    showModel(note) {
      this.noteInModel = note;
      console.log('this.noteInModel ', this.noteInModel);
    },
  },
  components: {
    notePreview,
    noteInput,
    noteEditor,
  },
};
