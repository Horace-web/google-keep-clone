import { Injectable } from '@angular/core';
import { Note } from '../models/note.model';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  private notes: Note[] = [];
  private idCounter = 1;
  private trash: Note[] = [];
  private archive: Note[] = [];

  constructor() {
    const savedNotes = sessionStorage.getItem('notes');
    const savedTrash = sessionStorage.getItem('trash');
    const savedArchive = sessionStorage.getItem('archive');

    if (savedNotes) {
      this.notes = JSON.parse(savedNotes);
      const maxId = this.notes.reduce((max, n) => n.id > max ? n.id : max, 0);
      this.idCounter = maxId + 1;
    }

    if (savedTrash) {
      this.trash = JSON.parse(savedTrash);
    }

    if (savedArchive) {
      this.archive = JSON.parse(savedArchive);
    }
  }

  // --- NOTES ACTIVES ---
  getNotes(): Note[] {
    return this.notes;
  }

  addNote(note: Omit<Note, 'id'>): void {
    const newNote: Note = {
      ...note,
      id: this.idCounter++
    };
    this.notes.unshift(newNote);
    this.saveToSessionStorage();
  }

  updateNote(updatedNote: Note): void {
    const index = this.notes.findIndex(note => note.id === updatedNote.id);
    if (index !== -1) {
      this.notes[index] = updatedNote;
      this.saveToSessionStorage();
    }
  }

  // --- CORBEILLE ---
  getTrash(): Note[] {
    return this.trash;
  }

  deleteNote(id: number): void {
    const index = this.notes.findIndex(note => note.id === id);
    if (index !== -1) {
      const [deletedNote] = this.notes.splice(index, 1);
      this.trash.unshift(deletedNote);
      this.saveToSessionStorage();
    }
  }

  restoreNote(id: number): void {
    const index = this.trash.findIndex(note => note.id === id);
    if (index !== -1) {
      const [restoredNote] = this.trash.splice(index, 1);
      this.notes.unshift(restoredNote);
      this.saveToSessionStorage();
    }
  }

  deleteNoteForever(id: number): void {
    const index = this.trash.findIndex(note => note.id === id);
    if (index !== -1) {
      this.trash.splice(index, 1);
      this.saveToSessionStorage();
    }
  }

  // --- ARCHIVE ---
  getArchivedNotes(): Note[] {
    return this.archive;
  }

  archiveNote(id: number): void {
    const index = this.notes.findIndex(note => note.id === id);
    if (index !== -1) {
      const [archivedNote] = this.notes.splice(index, 1);
      this.archive.unshift(archivedNote);
      this.saveToSessionStorage();
    }
  }

  restoreFromArchive(id: number): void {
    const index = this.archive.findIndex(note => note.id === id);
    if (index !== -1) {
      const [restoredNote] = this.archive.splice(index, 1);
      this.notes.unshift(restoredNote);
      this.saveToSessionStorage();
    }
  }

  deleteFromArchive(id: number): void {
  const index = this.archive.findIndex(note => note.id === id);
  if (index !== -1) {
    const noteToTrash = this.archive[index];

    this.trash.push(noteToTrash);
    this.archive.splice(index, 1);
    this.saveToSessionStorage();
  }
}


  // --- SESSION STORAGE ---
  private saveToSessionStorage(): void {
    sessionStorage.setItem('notes', JSON.stringify(this.notes));
    sessionStorage.setItem('trash', JSON.stringify(this.trash));
    sessionStorage.setItem('archive', JSON.stringify(this.archive));
  }
}
