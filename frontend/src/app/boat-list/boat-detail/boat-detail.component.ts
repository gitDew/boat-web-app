import { Component, Input } from '@angular/core';
import { Boat } from '../models/Boat';

@Component({
  selector: 'app-boat-detail',
  standalone: true,
  imports: [],
  templateUrl: './boat-detail.component.html',
  styleUrl: './boat-detail.component.css',
})
export class BoatDetailComponent {
  @Input() selectedBoat: Boat | undefined;
}
