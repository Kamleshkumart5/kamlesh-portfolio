import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-education',
  imports: [CommonModule],
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss'
})
export class EducationComponent {
  education = {
    degree: 'B.E. (Information Technology)',
    cgpi: '8.63 CGPI',
    college: 'Shree L.R Tiwari College of Engineering',
    duration: '07/2019 - 05/2023'
  }
}
