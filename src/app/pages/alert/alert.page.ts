import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
  standalone: false
})
export class AlertPage implements OnInit {

  constructor(private alertCtrl: AlertController) { }

  ngOnInit() {
  }

  async presentAlert() {
    const alert = await this.alertCtrl.create({
      backdropDismiss: false, // Evita que se cierre al tocar fuera del alert
      header: 'A Short Title Is Best',
      subHeader: 'A Sub Header Is Optional',
      message: 'A message should be a short, complete sentence.',
      buttons: ['Action'],
    });

    await alert.present();
  }

  async presentAlertMultipleButtons() {
    const alert = await this.alertCtrl.create({
      backdropDismiss: false,
      header: 'A Short Title Is Best',
      subHeader: 'A Sub Header Is Optional',
      message: 'A message should be a short, complete sentence.',
      buttons: [
        {
          text: 'Ok!',
          handler: () => {
            console.log('Click en OK!');
          }
        },
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'rojo',
          handler: () => {
            console.log('Click en Cancelar');
          }
        }
      ],
    });

    await alert.present();
  }

  async presentAlertPrompt() {
    const alert = await this.alertCtrl.create({
      backdropDismiss: false,
      header: 'Prompt!',
      inputs: [
        {
          name: 'name1',
          type: 'text',
          placeholder: 'placeholder 1',
        },
        {
          name: 'name2',
          type: 'text',
          id: 'name2-id',
          value: 'hello',
          placeholder: 'placeholder 2',
        },
        {
          name: 'Paragraph',
          type: 'textarea',
          id: 'Paragraph',
          placeholder: 'placeholder 3',
        },{
          name: 'name3',
          value: 'http://ionicframework.com',
          type: 'url',
          placeholder: 'Favorite site ever'
        },
        {
          name: 'name4',
          type: 'date',
          min: '2017-03-01',
          max: '2025-12-31'
        },
        {
          name: 'name5',
          type: 'date',
          min: '2017-03-01',
          max: '2025-12-31'
        },
        {
          name: 'name6',
          type: 'number',
          min: -5,
          max: 10
        },
        {
          name: 'name7',
          type: 'number'
        },
        {
          name: 'name8',
          type: 'password',
          placeholder: 'Advanced Attributes',
          cssClass: 'specialClass',
          attributes: {
            maxlength: 4,
            inputmode: 'decimal'
          }
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'rojo',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: (data: any) => { // data contiene la informacion de los inputs
            console.log(data);
          }
        }
      ]
    });

    await alert.present();
  }



}
