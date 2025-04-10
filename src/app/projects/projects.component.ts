import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  projects = [
    {
      title: 'Plant Disease Monitoring System',
      description: 'Plant diseases monitoring using Deep Learning Algorithm (CNN).',
      technologies: ['Python', 'TensorFlow', 'Keras'],
      imageUrl: 'assets/plant-disease.jpg',
      link: '/plant-disease' // Angular Route to detail
    },
    {
      title: 'Stock Market Price Prediction',
      description: 'Stock market price prediction using Long Short Term Memory Algorithm (RNN).',
      technologies: ['Python', 'TensorFlow', 'LSTM'],
      imageUrl: 'assets/stock-prediction.jpg',
      link: '/stock-prediction' // Angular Route to detail
    },
    {
      title: 'Bank Management System',
      description: 'Banking application using Java Swing and MySQL database.',
      technologies: ['Java Swing', 'MySQL', 'AWT'],
      imageUrl: 'assets/bank-system.jpg',
      link: '/bank-system' // Angular Route to detail
    },
    {
      title: 'ChaiNasta.Com - Breakfast Ordering System',
      description: 'Breakfast ordering system with .NET Core, MySQL, and Angular.',
      technologies: ['.NET Core', 'Angular', 'MySQL', 'Entity Framework'],
      imageUrl: 'assets/breakfast-order.jpg',
      link: '/breakfast-order' // Angular Route to detail
    }
  ];
}
