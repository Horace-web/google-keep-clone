import { Routes } from '@angular/router';
import { Corbeille } from './components/corbeille/corbeille';
import { NoteCard } from './components/note-card/note-card';
import { NoteForm } from './components/note-form/note-form';
import { NoteList } from './components/note-list/note-list';
import { Accueil } from './components/accueil/accueil';
import { Archive } from './components/archive/archive';

export const routes: Routes = [
  { path: '', component: Accueil },
  { path: 'corbeille', component: Corbeille },
  { path: 'archive', component: Archive },

];
