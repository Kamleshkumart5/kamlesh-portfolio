import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule
@Component({
  selector: 'app-hero',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
  heroTitle = 'Kamleshkumar Satishkumar Tiwari';
  heroSubtitle = 'Technical Leader & Innovator';
  // heroDescription = 'Experienced Technical Analyst and ERP Implementation Executive with a proven track record in API development, full-stack technologies, and leading educational ERP projects.';
  heroDescription = `Welcome to my portfolio! I'm passionate about building scalable solutions and leading teams to success. With expertise in .NET Core, Angular, and ERP implementations, I strive to deliver impactful results.`;

  viewProjects() {
    // Implement navigation to projects section
    console.log('View Projects clicked');
    // You can use Angular Router to navigate here
  }

  downloadResume() {
    // Implement download resume functionality
    console.log('Download Resume clicked');
    // Example: window.open('assets/resume.pdf');
  }}
