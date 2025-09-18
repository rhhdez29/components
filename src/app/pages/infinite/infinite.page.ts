import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-infinite',
  templateUrl: './infinite.page.html',
  styleUrls: ['./infinite.page.scss'],
  standalone: false /*Necesario para poder correr el proyecto */
})
export class InfinitePage implements OnInit {

  data: any[] = Array(20);

  @ViewChild(IonInfiniteScroll)
  infiniteScroll!: IonInfiniteScroll;

  constructor() { }

  ngOnInit() {
  }

  loadData(event: any) {
    console.log(event);

    if (this.data.length > 50) {  //Controlamos la cantidad de items que carga el infinite scroll
      this.infiniteScroll.complete();
      this.infiniteScroll.disabled = true;
      return;
    }

    setTimeout(() => { //Cada ciertos segundos agregamos 20  nuevos elementos a data
      const nuevoArr = Array(20);
      this.data.push(...nuevoArr);

      this.infiniteScroll.complete();

    }, 1500);
  }


}
