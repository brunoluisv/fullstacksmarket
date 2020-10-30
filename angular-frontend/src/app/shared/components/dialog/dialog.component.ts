import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface UserData {
  id: string;
  name: string;
}

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: UserData
  ) { }

  ngOnInit(): void {
  }

  cancel(): void {
    this.dialogRef.close({ confirm: false })
  }

  confirm(id): void {
    this.dialogRef.close({ confirm: true, id: id })
  }

}
