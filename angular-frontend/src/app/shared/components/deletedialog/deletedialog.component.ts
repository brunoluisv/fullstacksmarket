import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface TaskData {
  task_id: string;
  user_id: string;
  descr: string;
}

@Component({
  selector: 'app-deletedialog',
  templateUrl: './deletedialog.component.html',
  styleUrls: ['./deletedialog.component.css']
})
export class DeletedialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DeletedialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: TaskData
  ) { }

  ngOnInit(): void {
  }

  cancel(): void {
    this.dialogRef.close({ confirm: false })
  }

  confirm(task_id, user_id): void {
    this.dialogRef.close({ confirm: true, task_id: task_id, user_id: user_id })
  }

}
