import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterTestingModule } from '@angular/router/testing'; // Import RouterTestingModule

@Component({
  selector: 'app-about',
  imports: [CommonModule,RouterTestingModule],
  standalone: true,
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'

})
export class AboutComponent {
  aboutTitle = 'About Me';
  aboutDescription = `Passionate about leveraging technology to solve real-world problems. With a strong foundation in full-stack development and ERP implementation, I specialize in creating scalable and user-friendly solutions. My journey has taken me from API development to leading ERP implementations, always focused on delivering impactful results.`;
}
