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

  toggleSideMenu() {
    this.sideMenuOpen = !this.sideMenuOpen;
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}
