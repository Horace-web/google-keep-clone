import { Injectable } from '@angular/core';
import { Note } from '../models/note.model';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  private notes: Note[] = [];
  private idCounter = 1;

  constructor() {}

  //  Récupérer la liste des notes
  getNotes(): Note[] {
    return this.notes;
  }

  // Ajouter une note
  addNote(note: Omit<Note, 'id'>): void {
    const newNote: Note = {
      ...note,
      id: this.idCounter++
    };
    this.notes.unshift(newNote); // on l'ajoute en haut
  }

  // Supprimer une note
  deleteNote(id: number): void {
    this.notes = this.notes.filter(note => note.id !== id);
  }

  //  Modifier une note
  updateNote(updatedNote: Note): void {
    const index = this.notes.findIndex(note => note.id === updatedNote.id);
    if (index !== -1) {
      this.notes[index] = updatedNote;
    }
  }
}
