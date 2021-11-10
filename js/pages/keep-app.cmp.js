import { notesService } from '../apps/keep/service/notes.service.js';
import notePreview from '../apps/keep/cmps/note-preview.cmp.js';
export default {
  name: 'keep-app',
  template: `
    <section v-if="notes" class="keep-app main-content flex justify-center">
        <div class="nots-container main-width">
          <notePreview @removed="removedNode" v-for="note in notes" :key="note.id" :note="note"/>
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
    removedNode(id) {
      notesService.removeNote(id).then(() => this.getNotes());
    },
  },

  components: {
    notePreview,
  },
};
