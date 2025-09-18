import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalInfoPage } from '../modal-info/modal-info.page';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
  standalone: false,
})
export class ModalPage implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  async mostrarModal(){
    const modal = await this.modalCtrl.create({
      component: ModalInfoPage,
      componentProps: { //Enviamos argumentos
        nombre: 'Rafael',
        pais: 'Mexico'
      }
    });
    await modal.present();

    const resp = await modal.onDidDismiss(); //Obtenemos los datos que se mandaron del modal
    console.log(resp);
  }

}
