import { Component, OnInit , Input, Output, EventEmitter } from '@angular/core';
import { NoteService } from '../../services/note';
import { Note } from '../../models/note.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NoteCard } from '../note-card/note-card';

@Component({
  selector: 'app-note-list',
  imports: [CommonModule , FormsModule , NoteCard],
  templateUrl: './note-list.html',
  styleUrl: './note-list.css'
})
export class NoteList implements OnInit {
  @Input() note!: Note;
   notes: Note[] = [];

  constructor(private noteService: NoteService) {}

  ngOnInit(): void {
    this.loadNotes();
  }

  loadNotes(): void {
    this.notes = this.noteService.getNotes();
  }

  onNoteDeleted(id: number): void {
    this.noteService.deleteNote(id);
    this.loadNotes();
  }

  onNoteEdited(updatedNote: Note): void {
    this.noteService.updateNote(updatedNote);
    this.loadNotes();
  }
}
