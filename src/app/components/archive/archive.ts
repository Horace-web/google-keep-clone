import { Component ,  OnInit } from '@angular/core';
import { Note } from '../../models/note.model';
import { NoteService } from '../../services/note';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-archive',
  imports: [CommonModule],
  templateUrl: './archive.html',
  styleUrl: './archive.css'
})
export class Archive implements OnInit {
   archivedNotes: Note[] = [];

  constructor(private noteService: NoteService) {}

  ngOnInit(): void {
    this.archivedNotes = this.noteService.getArchivedNotes();
  }

  // restoreNote(id: number): void {
  //   this.noteService.restoreFromArchive(id);
  //   this.archivedNotes = this.noteService.getArchivedNotes();
  // }

  // deleteNoteForever(id: number): void {
  //   this.noteService.deleteFromArchive(id);
  //   this.archivedNotes = this.noteService.getArchivedNotes();
  // }

  unarchiveNote(id: number) {
  this.noteService.restoreFromArchive(id);
  }

  moveToTrash(id: number) {
    this.noteService.deleteFromArchive(id);
  }

}
