import { Component } from '@angular/core';
import { BoatsService } from '../boats.service';
import { Boat } from './models/Boat';
import { BoatListElementComponent } from './boat-list-element/boat-list-element.component';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-boat-list',
  standalone: true,
  imports: [BoatListElementComponent, FontAwesomeModule],
  templateUrl: './boat-list.component.html',
  styleUrl: './boat-list.component.css',
})
export class BoatListComponent {
  selectedBoat: Boat | undefined;
  boats: Boat[] = [];
  faCirclePlus = faCirclePlus;
  private counter = -1;

  constructor(private boatsService: BoatsService) {}

  ngOnInit(): void {
    this.getBoats();
  }

  getBoats() {
    this.boatsService.getBoats().subscribe((boats) => {
      this.boats = boats.sort();
    });
  }

  onClick(boat: Boat) {
    this.selectedBoat = boat;
  }

  onDelete() {
    this.boats = this.boats.filter((boat) => boat !== this.selectedBoat);
    this.selectedBoat = undefined;
  }

  onAdd() {
    let newBoat: Boat = {
      id: this.counter--, // use a negative counter here for @if tracking by angular
      name: 'A Brand New Boat',
      description: '',
    };
    this.boats.push(newBoat);
  }
}
