import {Component, EventEmitter, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {EventService} from '../../_service/event.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.scss']
})
export class EditEventComponent implements OnInit {

  public event: EventEmitter<any> = new EventEmitter();

  // private data: any;

  private editEventForm: FormGroup;
  private id: FormControl;
  private name: FormControl;
  private description: FormControl;
  private date: FormControl;
  private location: FormControl;

  constructor(private eventService: EventService,
              public dialogRef: MatDialogRef<EditEventComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
    this.data = data;
  }

  ngOnInit() {
    this.initForm();
    console.log(this.data);
  }

  initForm(): void {
    this.id = new FormControl(this.data.event.id, [Validators.required, Validators.minLength(5)]);
    this.name = new FormControl(this.data.event.name, [Validators.required, Validators.minLength(5)]);
    this.description = new FormControl(this.data.event.description, [Validators.required, Validators.minLength(5)]);
    this.date = new FormControl(this.data.event.date, [Validators.required]);
    this.location = new FormControl(this.data.event.location, [Validators.required, Validators.minLength(5)]);

    this.editEventForm = new FormGroup({
      id: this.id,
      name: this.name,
      description: this.description,
      date: this.date,
      location: this.location
    });
  }

  onSubmit() {
    this.event.emit({data: this.editEventForm.value});
    this.dialogRef.close();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
