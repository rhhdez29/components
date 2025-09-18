import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-info',
  templateUrl: './modal-info.page.html',
  styleUrls: ['./modal-info.page.scss'],
  standalone: false,
})
export class ModalInfoPage implements OnInit {

  //Recibimos argumentos con los input
  @Input() nombre!: string;
  @Input() pais!: string;


  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  salirSinArgumentos() {
    this.modalCtrl.dismiss(); //Cierra el modal
  }

  salirConArgumentos() {
    this.modalCtrl.dismiss({ //Al cerrar el modal mandamos los argunmentos
      nombre: 'Felipe',
      pais: 'España'
    });
  }


}
