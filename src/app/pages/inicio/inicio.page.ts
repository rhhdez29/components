import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { Componente } from 'src/app/interfaces/intefaces';
import { Data } from 'src/app/services/data';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
  standalone: false /*Necesario para poder correr el proyecto */
})
export class InicioPage implements OnInit {

  componentes!: Observable<Componente[]>;


  constructor(private menuCtrl: MenuController,
              private dataService: Data ) { }

  ngOnInit() {
    this.componentes = this.dataService.getMenuOpts();
  }

  mostrarMenu() {
    this.menuCtrl.open('main-content');
  }

}
