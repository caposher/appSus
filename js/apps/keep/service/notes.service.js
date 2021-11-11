import { storageService } from '../../../services/async-storage-service.js';
export const notesService = { getNotes, addNote, removeNote, updateNote };

const NOTES_KEY = 'notes';
const gList = [
  {
    id: 'n101',
    type: 'note-txt',
    isPinned: true,
    color: 'color1',
    info: {
      txt: 'Fullstack Me Baby!',
    },
  },
  {
    id: 'n102',
    type: 'note-txt',
    isPinned: true,
    color: 'color2',
    info: {
      txt: 'Fullstack Me Baby!Fullstack Me Baby!Fullstack Me Baby!Fullstack Me Baby!Fullstack Me Baby!Fullstack Me Baby!Fullstack Me Baby!Fullstack Me Baby!Fullstack Me Baby!Fullstack Me Baby!Fullstack Me Baby!Fullstack Me Baby!',
    },
  },
  {
    id: 'n103',
    type: 'note-txt',
    isPinned: true,
    color: 'color3',
    info: {
      txt: 'Fullstack Me Baby!Fullstack Me Baby!Fullstack Me Baby!Fullstack Me Baby!Fullstack Me Baby!Fullstack Me Baby!Fullstack Me Baby!Fullstack Me Baby!Fullstack Me Baby!Fullstack Me Baby!Fullstack Me Baby!Fullstack Me Baby!Fullstack Me Baby!Fullstack Me Baby!Fullstack Me Baby!Fullstack Me Baby!Fullstack Me Baby!Fullstack Me Baby!Fullstack Me Baby!Fullstack Me Baby!Fullstack Me Baby!Fullstack Me Baby!Fullstack Me Baby!Fullstack Me Baby!Fullstack Me Baby!Fullstack Me Baby!',
    },
  },
  {
    id: 'n104',
    type: 'note-txt',
    isPinned: true,
    color: 'color4',
    info: {
      txt: 'Fullstack Me Baby!Fullstack Me Baby!Fullstack Me Baby!Fullstack Me Baby!Fullstack Me Baby!Fullstack Me Baby!Fullstack Me Baby!Fullstack Me Baby!Fullstack Me Baby!Fullstack Me Baby!Fullstack Me Baby!Fullstack Me Baby!',
    },
  },
  {
    id: 'n105',
    type: 'note-txt',
    isPinned: true,
    color: 'color5',
    info: {
      txt: 'Fullstack Me Baby!Fullstack Me Baby!Fullstack Me Baby!Fullstack Me Baby!Fullstack Me Baby!Fullstack Me Baby!Fullstack Me Baby!Fullstack Me Baby!Fullstack Me Baby!Fullstack Me Baby!Fullstack Me Baby!Fullstack Me Baby!',
    },
  },
  {
    id: 'n106',
    type: 'note-txt',
    isPinned: true,
    color: 'color6',
    info: {
      txt: 'Fullstack Me Baby!Fullstack Me Baby!Fullstack Me Baby!Fullstack Me Baby!Fullstack Me Baby!Fullstack Me Baby!Fullstack Me Baby!Fullstack Me Baby!Fullstack Me Baby!Fullstack Me Baby!Fullstack Me Baby!Fullstack Me Baby!',
    },
  },
];

// localStorage.setItem(NOTES_KEY, JSON.stringify(gList));

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
