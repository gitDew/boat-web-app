import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Boat } from '../models/Boat';
import { BoatsService } from '../../boats.service';

@Component({
  selector: 'app-boat-detail',
  standalone: true,
  imports: [],
  templateUrl: './boat-detail.component.html',
  styleUrl: './boat-detail.component.css',
})
export class BoatDetailComponent {
  constructor(private boatsService: BoatsService) {}
  @Input() thisBoat: Boat | undefined;
  @Output() deleted = new EventEmitter();

  onDelete(): void {
    this.boatsService.deleteBoat(this.thisBoat!.id).subscribe(() => {
      this.deleted.emit();
    });
  }
}
