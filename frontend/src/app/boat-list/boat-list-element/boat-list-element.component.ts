import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Boat } from '../models/Boat';
import {
  faPencilSquare,
  faSave,
  faTrashCan,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BoatsService } from '../../boats.service';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-boat-list-element',
  standalone: true,
  imports: [FontAwesomeModule, ReactiveFormsModule],
  templateUrl: './boat-list-element.component.html',
  styleUrl: './boat-list-element.component.css',
})
export class BoatListElementComponent {
  faSave = faSave;
  faTrashCan = faTrashCan;
  faPencilSquare = faPencilSquare;
  selected: boolean = false;
  private isBeingDeleted = false;
  isBeingEdited = false;
  maxNameLength = 30;
  maxDescriptionLength = 200;
  boatForm = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.maxLength(this.maxNameLength),
    ]),
    description: new FormControl('', [
      Validators.maxLength(this.maxDescriptionLength),
    ]),
  });

  @Input() boat!: Boat;

  @Output() deleted = new EventEmitter();

  constructor(private boatsService: BoatsService) {}

  ngOnInit() {
    this.boatForm.get('name')?.setValue(this.boat.name);
    this.boatForm.get('description')?.setValue(this.boat.description);
    if (this.boat.id && this.boat.id >= 0) {
      this.boatForm.disable();
    } else {
      this.onEdit();
    }
  }

  onDelete(): void {
    this.isBeingDeleted = true;
    if (this.boat.id) {
      this.boatsService.deleteBoat(this.boat.id).subscribe(() => {
        this.deleted.emit();
      });
    }
    this.isBeingDeleted = false;
  }

  onEdit(): void {
    this.selected = true;
    this.isBeingEdited = true;
    this.boatForm.enable();
  }

  onSubmit(): void {
    if (this.boat.id && this.boat.id >= 0) {
      this.boatsService
        .updateBoat(this.boat.id, Object.assign(this.boat, this.boatForm.value))
        .subscribe((boat: Boat) => {
          this.boat = boat;
        });
    } else if (this.boat.id) {
      this.boatsService
        .createBoat(Object.assign(this.boat, this.boatForm.value))
        .subscribe((boat: Boat) => {
          this.boat = boat;
        });
    }
    this.boatForm.disable();
    this.isBeingEdited = false;
    this.toggleSelected();
  }

  toggleSelected(): void {
    if (!this.isBeingDeleted && !this.isBeingEdited) {
      this.selected = !this.selected;
    }
  }
}
