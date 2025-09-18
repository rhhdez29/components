import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-action-sheet',
  templateUrl: './action-sheet.page.html',
  styleUrls: ['./action-sheet.page.scss'],
  standalone: false
})
export class ActionSheetPage implements OnInit {

  constructor(private actionSheetCrtl: ActionSheetController) { }

  ngOnInit() {
  }

  onClick() {
    this.presentActionSheet();
  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetCrtl.create({
      header: 'Albunes',
      backdropDismiss: false, // No se cierra al tocar fuera
      buttons: [
        {
          text: 'Delete',
          role: 'destructive',
          icon: 'trash-outline',
          cssClass: 'rojo',
          data: {
            action: 'delete',
          },
        },
        {
          text: 'Share',
          icon: 'share-outline',
          data: {
            action: 'share',
          },
        },
        {
          text: 'Play (open modal)',
          icon: 'caret-forward-circle-outline',
          data: {
            action: 'play',
          },
        },
        {
          text: 'Favorite',
          icon: 'heart-outline',
          data: {
            action: 'favorite',
          },
        },
        {
          text: 'Cancel',
          icon: "close-outline",
          role: 'cancel',
          data: {
            action: 'cancel',
          },
        },
      ],
    });

    await actionSheet.present();
  }


}
