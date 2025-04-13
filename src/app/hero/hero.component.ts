import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { Router } from '@angular/router'; // Import Router

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
  email = 'kamleshkumart5@gmail.com';
  phoneNumber = '9653410690';
  Location = "Mumbai"
  // heroDescription = 'Experienced Technical Analyst and ERP Implementation Executive with a proven track record in API development, full-stack technologies, and leading educational ERP projects.';
  heroDescription = `Welcome to my portfolio! I'm passionate about building scalable solutions and leading teams to success. With expertise in .NET Core, Angular, and ERP implementations, I strive to deliver impactful results.`;
  constructor(private router: Router) { } // Inject Router
  viewProjects() {
    // Implement navigation to projects section
    this.router.navigate(['/projects']);
    console.log('View Projects clicked');
    // You can use Angular Router to navigate here
  }
  viewExperience() {
    // Implement navigation to projects section
    this.router.navigate(['/experience']);
    console.log('View experience clicked');
    // You can use Angular Router to navigate here
  }
  downloadResume() {
    window.open('docs/assets/resume.pdf', '_blank'); // Open resume in a new tab for download
  }
}