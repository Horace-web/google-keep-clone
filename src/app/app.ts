import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { Navbar } from './ForAll/components/navbar/navbar';
import { NoteCard } from './components/note-card/note-card';
import { NoteForm } from './components/note-form/note-form';
import { NoteList } from './components/note-list/note-list';

@Component({
  selector: 'app-root',
  imports: [Navbar,RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'google-keep-clone';
}
