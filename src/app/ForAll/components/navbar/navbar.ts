import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {
  sideMenuOpen: boolean = false;
  menuOpen: boolean = false;
  isDarkTheme: boolean = false;
  activeSidebarItem: string = 'notes';
  isListMode: boolean = true;

  toggleSideMenu() {
    this.sideMenuOpen = !this.sideMenuOpen;
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  onSettings() {
    alert('Paramètres cliqué');
  }
  onToggleDarkTheme() {
    this.isDarkTheme = !this.isDarkTheme;
    if (this.isDarkTheme) {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
  }
  onFeedback() {
    alert('Votre avis cliqué');
  }
  onHelp() {
    alert('Aide cliqué');
  }
  onDownload() {
    alert("Téléchargements de l'application cliqué");
  }
  onShortcuts() {
    alert('Raccourcis clavier cliqué');
  }

  toggleListMode() {
    this.isListMode = !this.isListMode;
  }

  setActiveSidebarItem(item: string) {
    this.activeSidebarItem = item;
  }
}
