import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-certifications',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './certifications.component.html',
  styleUrl: './certifications.component.scss'
})
export class CertificationsComponent {
  certifications = [
    { name: 'Building Responsive Landing Page Using HTML And CSS', issuer: 'Geekster', imageUrl: 'assets/geekster.png'},
    { name: 'Mastering JavaScript Fundamentals', issuer: 'Geekster', imageUrl: 'assets/geekster.png'},
    { name: 'SQL Certification Course: Basic to Advance', issuer: 'Geekster', imageUrl: 'assets/geekster.png'},
    { name: 'My SQL Basics From Great Learning Academy', issuer: 'Great Learning Academy', imageUrl: 'assets/great-learning.png'},
    { name: 'SIMPLIFIRD SQL BY SHIVANI MAKWANA', issuer: 'Elewayte', imageUrl: 'assets/elewayte.png'},
    { name: 'Oops In Java With Certification', issuer: 'Geekster', imageUrl: 'assets/geekster.png'},
    { name: 'Complete Git and Github Course', issuer: 'Geekster', imageUrl: 'assets/geekster.png'},
    { name: 'Programming Fundamentals Using C', issuer: 'SEED INFOTECH', imageUrl: 'assets/seed.png'},
    { name: 'Face Detection and Blurring using Python', issuer: 'Edverb in Collaboration with CSI SLRTCE', imageUrl: 'assets/edverb.png'}
  ];
}
