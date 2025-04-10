import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experience',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {
  experiences = [
    // {
    //   company: 'ZI Systech Pvt. Ltd.',
    //   duration: 'June 2023 - Feb 2024',
    //   designation: 'Trainee Technical Analyst (Software Developer)',
    //   responsibilities: [
    //     'API Development: Designed and developed RESTful APIs using .NET Core.',
    //     'Database Integration: Connected APIs to a relational database using Entity Framework.',
    //     'UI Development: Created responsive front-end interfaces using Angular.',
    //     'Angular Services: Implemented TypeScript services for data retrieval and submission.',
    //     'Angular Routing: Implemented Angular routing for SPA experience.'
    //   ]
    // },
    {
      company: 'Infogem Web Solutions (P) Ltd.',
      duration: 'March 2024 - Till Date',
      designation: 'ERP Implementation Executive',
      responsibilities: [ 
        'Lead the implementation of ERP solutions for clients.',
        'Collaborate with clients to understand business processes and requirements.',
        'Provide training to client stakeholders.',
        'Act as the primary point of contact for clients.',
        'Coordinate with cross-functional teams.'
      ]
    }
  ];
}
