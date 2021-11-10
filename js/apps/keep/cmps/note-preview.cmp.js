export default {
  props: ['note'],
  name: 'note-preview',
  template: ` <section class="note-preview flex flex-column content-center space-between">
                <div class="notes-container">
                  <p>{{note.info.txt}}</p>
                </div>
                <div class="note-tools">
                  <button @click="$emit('removed',note.id)">🗑️</button>
                </div>
              </section>`,
};
