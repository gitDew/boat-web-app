import { Component } from '@angular/core';
import { BoatsService } from '../boats.service';
import { Boat } from './models/Boat';
import { BoatListElementComponent } from './boat-list-element/boat-list-element.component';

@Component({
  selector: 'app-boat-list',
  standalone: true,
  imports: [BoatListElementComponent],
  templateUrl: './boat-list.component.html',
  styleUrl: './boat-list.component.css',
})
export class BoatListComponent {
  selectedBoat: Boat | undefined;
  boats: Boat[] = [];

  constructor(private boatsService: BoatsService) {}

  ngOnInit(): void {
    this.getBoats();
  }

  getBoats() {
    this.boatsService.getBoats().subscribe((boats) => {
      this.boats = boats;
    });
  }

  onClick(boat: Boat) {
    this.selectedBoat = boat;
  }

  onDelete() {
    this.boats = this.boats.filter((boat) => boat !== this.selectedBoat);
    this.selectedBoat = undefined;
  }
}
