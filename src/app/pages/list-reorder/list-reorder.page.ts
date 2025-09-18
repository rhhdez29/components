import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-reorder',
  templateUrl: './list-reorder.page.html',
  styleUrls: ['./list-reorder.page.scss'],
  standalone: false
})
export class ListReorderPage implements OnInit {

  pesonajes: String[] =['Aquaman','Superman','Batman','Mujer Maravilla','Flash'];

  reorderDisabled: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  doReorder(event: any){

    console.log(event);

    const itemMover = this.pesonajes.splice(event.detail.from,1)[0];  //De aqui obtenemos unicamente el item que se movio
    this.pesonajes.splice(event.detail.to,0,itemMover); //Aqui insertamos el item que se movio a su nueva posicion

    console.log(this.pesonajes);

    event.detail.complete();
  }

  toggle(){
    this.reorderDisabled = !this.reorderDisabled;
  }


}
