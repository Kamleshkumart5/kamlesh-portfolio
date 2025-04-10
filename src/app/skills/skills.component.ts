import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  skills = [
    { category: 'Web Development', items: ['HTML', 'CSS', 'Angular', 'JavaScript'] },
    { category: 'Databases', items: ['Microsoft MySQL', 'phpMyAdmin'] },
    { category: 'Programming Languages', items: ['Java', 'Python', 'C#', 'PHP'] },
    { category: 'Frameworks/Libraries', items: ['.NET Core', 'Entity Framework', 'Java Swing', 'AWT', 'JQuery'] },
    { category: 'Version Control', items: ['Git'] },
    { category: 'Additional Expertise', items: ['Machine Learning'] }
  ];
}
