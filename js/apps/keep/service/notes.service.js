import { storageService } from '../../../services/async-storage-service.js';
export const notesService = { getNotes, addNote, removeNote, updateNote };

const NOTES_KEY = 'notes';
const gList = [
  { id: 'n101', type: 'note-txt', isPinned: true, color: 'color1', info: { txt: 'osher cappelli' } },
  {
    type: 'note-video',
    isPinned: false,
    color: 'color1',
    info: { txt: 'https://www.youtube.com/watch?v=kk0WRHV_vt8', videoId: 'kk0WRHV_vt8' },
    id: 'Yok4i',
  },

  {
    id: 'n104',
    type: 'note-txt',
    isPinned: true,
    color: 'color4',
    info: {
      txt: 'The Plage de Coco, or Coco Beach, is one of the less well-known and less frequented beaches in Nice. \nSo, if you are also looking for some relaxation during your stay, this is the place to be. \nUnlike the other beaches, Coco Beach is not just a pebble beach, but also a rocky beach. \nIt is quite unspoilt and at some points you can only get into the water via a ladder. \nThe way there is also a bit steeper, but the little effort definitely pays off in the end!',
    },
  },
  {
    id: 'n105',
    type: 'note-txt',
    isPinned: true,
    color: 'color5',
    info: { txt: 'object is a function that return data... right? 🤔 wait... fuck euv!' },
  },
  {
    id: 'n106',
    type: 'note-txt',
    isPinned: true,
    color: 'color6',
    info: {
      txt: 'dad jokes:\n* "I\'m afraid for the calendar. Its days are numbered." \n*"My wife said I should do lunges to stay in shape. That would be a big step forward." \n*"Why do fathers take an extra pair of socks when they go golfing?" "In case they get a hole in one!" \n*"Singing in the shower is fun until you get soap in your mouth. Then it\'s a soap opera." \n\n',
    },
  },
  {
    type: 'note-txt',
    isPinned: false,
    color: 'color1',
    info: {
      txt: 'credit card: 4580 0107 7065 5244\ncar: *4344\nemail: jojoCorona@gmail.com Joco123\nleumi: Gmpj1hks money123456789\n',
    },
    id: 'HxGKk',
  },
  {
    type: 'note-img',
    isPinned: false,
    color: 'color3',
    info: {
      txt: 'data:image/png;base64,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',
    },
    id: 'zNl9A',
  },
  {
    type: 'note-img',
    isPinned: false,
    color: 'color6',
    info: { txt: 'https://static.scientificamerican.com/sciam/cache/file/4FAC51BC-0AAA-49D6-821EDD4BA053B2F0.jpg' },
    id: 't0V16',
  },
  { type: 'note-txt', isPinned: false, color: 'color4', info: { txt: 'my birthday: 17.07.1988' }, id: 'wfEQ0' },
  {
    type: 'note-video',
    isPinned: false,
    color: 'color1',
    info: { txt: 'https://www.youtube.com/watch?v=fuhHU_BZXSk', videoId: 'fuhHU_BZXSk' },
    id: 'HXrmj',
  },
];

_init();

function _init() {
  let data = getNotes().then((notes) => {
    if (!notes.length) {
      data = gList;
      localStorage.setItem(NOTES_KEY, JSON.stringify(gList));
    }
  });
}

function getNotes() {
  return storageService.query(NOTES_KEY);
}

function addNote(note) {
  return storageService.post(NOTES_KEY, note).then(() => getNotes());
}

function removeNote(noteId) {
  return storageService.remove(NOTES_KEY, noteId).then(() => getNotes());
}

function updateNote(note) {
  return storageService.put(NOTES_KEY, note).then(() => getNotes());
}
