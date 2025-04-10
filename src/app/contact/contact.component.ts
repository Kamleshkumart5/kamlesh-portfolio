import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Import FormsModule

@Component({
  selector: 'app-contact',
  imports: [CommonModule, FormsModule],
  standalone: true,
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  name = '';
  email = '';
  message = '';

  submitForm() {
    // Implement form submission logic (e.g., send email)
    console.log('Form submitted:', { name: this.name, email: this.email, message: this.message });
    // You can use Angular HTTP to send the form data
  }
}
