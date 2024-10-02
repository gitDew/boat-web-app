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
    this.boatForm.disable();
    this.boatForm.get('name')?.setValue(this.boat.name);
    this.boatForm.get('description')?.setValue(this.boat.description);
  }

  onDelete(): void {
    this.isBeingDeleted = true;
    this.boatsService.deleteBoat(this.boat.id).subscribe(() => {
      this.deleted.emit();
    });
  }

  onEdit(): void {
    this.selected = true;
    this.isBeingEdited = true;
    this.boatForm.enable();
  }

  onSubmit(): void {
    if (this.boat.id) {
      this.boatsService
        .updateBoat(this.boat.id, Object.assign(this.boat, this.boatForm.value))
        .subscribe((boat: Boat) => {
          this.boat = boat;
        });
    } else {
      // TODO
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
