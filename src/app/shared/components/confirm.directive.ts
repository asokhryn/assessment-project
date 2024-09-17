import {Directive, HostListener, inject, output} from '@angular/core';
import {Dialog} from "@angular/cdk/dialog";
import {ConfirmationComponent} from "./confirmation/confirmation.component";
import {take, tap} from "rxjs/operators";

@Directive({
  selector: '[appConfirm]',
  standalone: true
})
export class ConfirmDirective {

  dialog = inject(Dialog);

  confirm = output<boolean>({alias: 'appConfirm'});

  @HostListener('click', ['$event'])
  onClick($event: MouseEvent) {
    $event.preventDefault();
    this.dialog.open<boolean | undefined>(ConfirmationComponent, {
      disableClose: true
    }).closed.pipe(
      take(1),
      tap((result) => {
        if (result) {
          this.confirm.emit(true);
        } else {
          this.confirm.emit(false);
        }
      })
    ).subscribe()
  }

}
