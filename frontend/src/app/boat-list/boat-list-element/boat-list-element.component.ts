import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Boat } from '../models/Boat';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { BoatsService } from '../../boats.service';

@Component({
  selector: 'app-boat-list-element',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './boat-list-element.component.html',
  styleUrl: './boat-list-element.component.css',
})
export class BoatListElementComponent {
  faTrashCan = faTrashCan;
  selected: boolean = false;
  private beingDeleted = false;

  @Input() boat!: Boat;

  @Output() deleted = new EventEmitter();

  constructor(private boatsService: BoatsService) {}

  onDelete(): void {
    this.beingDeleted = true;
    this.boatsService.deleteBoat(this.boat.id).subscribe(() => {
      this.deleted.emit();
    });
  }

  toggleSelected(): void {
    if (!this.beingDeleted) {
      this.selected = !this.selected;
    }
  }
}
