import { Component , Input , Output , EventEmitter } from '@angular/core';
import { Note } from '../../models/note.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-note-card',
  imports: [CommonModule,FormsModule],
  templateUrl: './note-card.html',
  styleUrl: './note-card.css'
})
export class NoteCard {
   @Input() note!: Note;
  @Output() delete = new EventEmitter<number>();
  @Output() edit = new EventEmitter<Note>();

  isEditing: boolean = false;
  editNote!: Note;

  onDeleteClicked(): void {
    this.delete.emit(this.note.id);
  }

  onEditClicked(): void {
    // Crée une copie indépendante de la note pour modification temporaire
    this.editNote = { ...this.note };
    this.isEditing = true;
  }

  onCancelEdit(): void {
    this.isEditing = false;
  }

  onSaveEdit(): void {
    this.edit.emit(this.editNote); // émet la note modifiée
    this.isEditing = false;
  }

  @Output() archive = new EventEmitter<number>();

  onArchiveClicked() {
    this.archive.emit(this.note.id);
  }

}
