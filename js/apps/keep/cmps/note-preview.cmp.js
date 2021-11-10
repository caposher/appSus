export default {
  props: ['txt'],
  name: 'note-preview',
  template: ` <section class="note-preview">
                <div class="notes-container">
                  <p>{{txt}}</p>
                </div>
              </section>`,
};
