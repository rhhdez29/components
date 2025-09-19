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

  porcentaje: number = 0.05;

  constructor() { }

  ngOnInit() {
  }

  rangeChange( event : any ) {
    this.porcentaje = event.detail.value / 100;
  }
}
