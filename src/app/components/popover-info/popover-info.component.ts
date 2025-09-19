import { Component, OnInit } from '@angular/core';
import { IonicModule, PopoverController } from "@ionic/angular";
import { BrowserModule } from "@angular/platform-browser";

@Component({
  selector: 'app-popover-info',
  templateUrl: './popover-info.component.html',
  styleUrls: ['./popover-info.component.scss'],
  standalone: false,

})
export class PopoverInfoComponent  implements OnInit {

  items = Array(7);

  constructor(private popoverController: PopoverController) { }

  ngOnInit() {}

  onClick(valor: number){
    this.popoverController.dismiss({
      item: valor //Devolvemos el valor seleccionado
    });
  }

}
