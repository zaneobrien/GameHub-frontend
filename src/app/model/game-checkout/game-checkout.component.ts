import { Component, ComponentRef } from '@angular/core';
import { IModalDialog, IModalDialogOptions, IModalDialogButton } from 'ngx-modal-dialog';

@Component({
  selector: 'app-game-checkout',
  templateUrl: './game-checkout.component.html',
  styleUrls: ['./game-checkout.component.css']
})
export class GameCheckoutComponent implements IModalDialog {

  actionButtons: IModalDialogButton[];

  myData: any;

  today: number = Date.now();

  constructor() {
    this.actionButtons = [
      { text: 'Close' }, // no special processing here
      { text: 'Checkout this game', onAction: () => true }
    ];
  }

  dialogInit(reference: ComponentRef<IModalDialog>, options: Partial<IModalDialogOptions<any>>) {
    this.myData = options.data;
  }
}
