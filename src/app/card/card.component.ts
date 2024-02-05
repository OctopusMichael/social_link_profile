import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  social = [
    { id: 1, nombre: 'GitHub' },
    { id: 2, nombre: 'Frontend Mentor' },
    { id: 3, nombre: 'LinkedIn' },
    { id: 4, nombre: 'Twitter' },
    { id: 5, nombre: 'Instagram' },
  ];
}
