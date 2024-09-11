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
import {ITextContentConfirm} from "../../../types/interfaces";

@Component({
  selector: 'app-confirm-modal-button',
  styleUrl: 'confirm-modal.component.css',
  template: '<div (click)="openDeleteDialog(\'0ms\', \'0ms\', $event)"><ng-content></ng-content></div>',
  standalone: true,
  imports: [MatButtonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConfirmModalComponentButton {
  @Output() confirm: EventEmitter<number | undefined> = new EventEmitter<number | undefined>();
  @Input() user: IUser | undefined;
  @Input() textContent: ITextContentConfirm = {
    text: `Would you like to delete user`,
    cancelButton: 'Cancel',
    confirmButton: 'Delete' };
  readonly dialog = inject(MatDialog);

  openDeleteDialog(enterAnimationDuration: string, exitAnimationDuration: string, $event: any): void {
    $event.stopPropagation();

    const dialogRef = this.dialog.open(ConfirmModalComponent, {
      width: '250px',
      data: {
        text: `${this.textContent.text} ${this.user?.name}?`,
        cancelButton: this.textContent.cancelButton,
        confirmButton: this.textContent.confirmButton },
      enterAnimationDuration,
      exitAnimationDuration,
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.confirm.emit(this.user?.id);
      }
    });
  }
}

@Component({
  selector: 'app-confirm-modal',
  templateUrl: 'confirm-modal.component.html',
  standalone: true,
  imports: [MatButtonModule, MatDialogActions, MatDialogClose, MatDialogTitle, MatDialogContent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConfirmModalComponent  {
  constructor(public dialogRef: MatDialogRef<ConfirmModalComponent>,
              @Inject(MAT_DIALOG_DATA) public data: { text: string,  cancelButton: string, confirmButton: string  }) {
  }

  onCancel(): void {
    this.dialogRef.close(false);
  }

  onConfirm() {
    this.dialogRef.close(true);
  }
}
