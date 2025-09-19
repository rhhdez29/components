import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopoverInfoComponent } from 'src/app/components/popover-info/popover-info.component';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.page.html',
  styleUrls: ['./progress.page.scss'],
  standalone: false,
})
export class ProgressPage implements OnInit {

<<<<<<< HEAD
  porcentaje: number = 0.05;

  constructor() { }
=======
  constructor(public popoverController: PopoverController) { }
>>>>>>> 7faadb7c2501cd2252600e06e81362cbe03b43f4

  ngOnInit() {
  }

<<<<<<< HEAD
  rangeChange( event : any ) {
    this.porcentaje = event.detail.value / 100;
=======
  async presentPopover(e: Event) {
    const popover = await this.popoverController.create({
      component: PopoverInfoComponent,
      event: e,
    });

    await popover.present();
>>>>>>> 7faadb7c2501cd2252600e06e81362cbe03b43f4
  }
}
