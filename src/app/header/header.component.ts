import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // Import RouterModule

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterModule],
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  navItems = [
    { label: 'About', link: '/about' },
    { label: 'Projects', link: '/projects' },
    { label: 'Skills', link: '/skills' },
    { label: 'Experience', link: '/experience' },
    { label: 'Certifications', link: '/certifications' },
    { label: 'Education', link: '/education' },
    { label: 'Contact', link: '/contact' }
  ];
}
