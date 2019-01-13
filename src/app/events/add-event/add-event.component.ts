import {Component, EventEmitter, Inject, OnInit} from '@angular/core';
import {Event} from '../../_model/event';
import {EventService} from '../../_service/event.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.scss']
})
export class AddEventComponent implements OnInit {

  model: Event = {};
  public event: EventEmitter<any> = new EventEmitter();

  constructor(private eventService: EventService,
              public dialogRef: MatDialogRef<AddEventComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

  onSubmit(value: any) {
    console.log(value);
    // console.log(this.model);
    // this.eventService.add(this.model).subscribe(
    //   (event) => console.log(event)
    // );
    this.event.emit({data: this.model});
    this.dialogRef.close();
    // value.reset();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
