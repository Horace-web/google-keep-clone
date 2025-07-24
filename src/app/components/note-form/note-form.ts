import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NoteService } from '../../services/note';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-note-form',
  imports: [FormsModule,CommonModule],
  templateUrl: './note-form.html',
  styleUrl: './note-form.css'
})
export class NoteForm {
  isFocused = false;


   note = {
    title: '',
    content: '',
    color: '#fff9c4' // couleur par défaut
  };

  constructor(private noteService: NoteService) {}

  onSubmit(): void {
    if (this.note.title && this.note.content) {
      this.noteService.addNote(this.note);
      this.resetForm();
    }
  }

  resetForm(): void {
    this.note = {
      title: '',
      content: '',
      color: '#fff9c4'
    };
  }
}
