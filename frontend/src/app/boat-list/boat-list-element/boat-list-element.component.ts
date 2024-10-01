import { Component, Input } from '@angular/core';
import { Boat } from '../models/Boat';

@Component({
  selector: 'app-boat-list-element',
  standalone: true,
  imports: [],
  templateUrl: './boat-list-element.component.html',
  styleUrl: './boat-list-element.component.css',
})
export class BoatListElementComponent {
  @Input() boat!: Boat;
}
