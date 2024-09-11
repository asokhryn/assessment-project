
import {ChangeDetectionStrategy, Component, EventEmitter, Inject, inject, Input, OnInit, Output} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import {IUser} from "../../../../users/types/interfaces";
import {MatList, MatListItem} from "@angular/material/list";

@Component({
  selector: 'app-view-modal-button',
  styleUrl: 'view-modal.component.css',
  template: '<div (click)="openDialog(\'0ms\', \'0ms\', $event)"><ng-content></ng-content></div>',
  standalone: true,
  imports: [MatButtonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ViewModalComponentButton {
  @Input() user: IUser | undefined;
  @Input() title: string = 'User Details'
  readonly dialog = inject(MatDialog);

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string, $event: any): void {
    $event.stopPropagation()

    const dialogRef = this.dialog.open(ViewModalComponent, {
      width: '450px',
      data: { user: this.user, title: this.title },
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }
}

@Component({
  selector: 'app-view-modal',
  templateUrl: 'view-modal.component.html',
  standalone: true,
  imports: [MatButtonModule, MatDialogActions, MatDialogClose, MatDialogTitle, MatDialogContent, MatList, MatListItem],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ViewModalComponent  {
  constructor(public dialogRef: MatDialogRef<ViewModalComponent>,
              @Inject(MAT_DIALOG_DATA) public data: { user: IUser,  title: string }) {
  }

  onClose(): void {
    this.dialogRef.close(false);
  }
}


