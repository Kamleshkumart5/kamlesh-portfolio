import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isMenuOpen = false;

  navItems = [
    { label: 'About', link: '/about' },
    { label: 'Projects', link: '/projects' },
    { label: 'Skills', link: '/skills' },
    { label: 'Experience', link: '/experience' },
    { label: 'Certifications', link: '/certifications' },
    { label: 'Education', link: '/education' },
    { label: 'Contact', link: '/contact' }
  ];

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  onNavItemClick(): void {
    // Only close the menu if it's open (mainly on mobile)
    if (this.isMenuOpen) {
      this.isMenuOpen = false;
    }
  }
}
