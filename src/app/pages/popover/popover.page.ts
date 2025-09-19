import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopoverInfoComponent } from 'src/app/components/popover-info/popover-info.component';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.page.html',
  styleUrls: ['./popover.page.scss'],
  standalone: false,
})
export class PopoverPage implements OnInit {

  constructor(private PopoverController: PopoverController) { }

  ngOnInit() {
  }

  async presentPopover(e: Event) {
    const popover = await this.PopoverController.create({
      component: PopoverInfoComponent,
      event: e,
      backdropDismiss: false
    });

    await popover.present();

    const { data } = await popover.onWillDismiss(); //Guardamos en const el item seleccionado en el popover
    console.log(data);
  }

}
