import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface TaskData {
  task_id: string;
  descr: string;
  state: boolean;
}

@Component({
  selector: 'app-statedialog',
  templateUrl: './statedialog.component.html',
  styleUrls: ['./statedialog.component.css']
})
export class StatedialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<StatedialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: TaskData
  ) { }

  ngOnInit(): void {
  }

  cancel(): void {
    this.dialogRef.close({ confirm: false })
  }

  confirm(task_id, state): void {
    this.dialogRef.close({ confirm: true, task_id: task_id, state: state })
  }

}
