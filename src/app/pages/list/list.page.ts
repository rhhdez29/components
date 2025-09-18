import { Component, OnInit, ViewChild } from '@angular/core';
import { Data } from '../../services/data';
import { Observable } from 'rxjs';
import { IonList } from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
  standalone: false /*Necesario para poder correr el proyecto */
})
export class ListPage implements OnInit {

  @ViewChild(IonList) ionList!: IonList;

  usuarios!: Observable<any>;


  constructor(private dataService: Data) { }

  ngOnInit() {
    this.usuarios = this.dataService.getUsuarios();
  }

  favorite(user: any) {
    console.log('favorite', user);
    this.ionList.closeSlidingItems();
  }
  share(user: any) {
    console.log('share', user);
    this.ionList.closeSlidingItems();
  }

  delete(user: any) {
    console.log(user.name, ' eliminado');
    this.ionList.closeSlidingItems();
  }

}
