import { Component } from '@angular/core';
import { NoteForm } from '../note-form/note-form';
import { NoteList } from '../note-list/note-list';

@Component({
  selector: 'app-accueil',
  imports: [NoteForm,NoteList],
  templateUrl: './accueil.html',
  styleUrl: './accueil.css'
})
export class Accueil {

}
