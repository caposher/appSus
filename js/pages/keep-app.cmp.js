import { notesService } from '../apps/keep/service/notes.service.js';
import notePreview from '../apps/keep/cmps/note-preview.cmp.js';
export default {
  name: 'keep-app',
  template: `
    <section v-if="notes" class="keep-app main-content flex justify-center">
        <div class="nots-container main-width">
          <notePreview v-for="(note, idx) in notes" :key="idx" :txt="note"/>
        </div>
    </section>
  `,
  data() {
    return {
      notes: null,
    };
  },
  created() {
    notesService.getNotes().then((notes) => (this.notes = notes));
  },
  components: {
    notePreview,
  },
};
