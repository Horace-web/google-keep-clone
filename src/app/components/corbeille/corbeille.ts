import { CommonModule } from '@angular/common';
import { Component , NgModule, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NoteService } from '../../services/note';
import { Note } from '../../models/note.model';


@Component({
  selector: 'app-corbeille',
  imports: [CommonModule,FormsModule,],
  templateUrl: './corbeille.html',
  styleUrl: './corbeille.css'
})
export class Corbeille implements OnInit {
    trashNotes: Note[] = [];

  constructor(private noteService: NoteService) { }

  ngOnInit(): void {
    this.loadTrash();
  }

  // Charger les notes supprimées
  loadTrash(): void {
    this.trashNotes = this.noteService.getTrash();
  }

  // Restaurer une note
  restoreNote(id: number): void {
    this.noteService.restoreNote(id);
    this.loadTrash(); // Recharger la corbeille
  }

  // Supprimer définitivement une note
  deleteForever(id: number): void {
    this.noteService.deleteNoteForever(id);
    this.loadTrash(); // Recharger la corbeille
  }
}
