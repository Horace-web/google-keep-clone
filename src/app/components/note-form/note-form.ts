import { Component, ElementRef, ViewChild, HostListener } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NoteService } from '../../services/note';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-note-form',
  imports: [FormsModule, CommonModule],
  templateUrl: './note-form.html',
  styleUrl: './note-form.css'
})
export class NoteForm {
  isFocused = false;

  @ViewChild('formRef', { static: true }) formRef!: ElementRef;

  @HostListener('document:click', ['$event'])
  handleClickOutside(event: MouseEvent): void {
    const clickedInside = this.formRef.nativeElement.contains(event.target);
    if (!clickedInside) {
      this.isFocused = false;
    }
  }

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
      this.isFocused = false;
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
