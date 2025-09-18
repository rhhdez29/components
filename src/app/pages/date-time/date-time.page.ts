import { Component, OnInit, ViewChild } from '@angular/core';
import { IonModal, PickerController } from '@ionic/angular';

@Component({
  selector: 'app-date-time',
  templateUrl: './date-time.page.html',
  styleUrls: ['./date-time.page.scss'],
  standalone: false
})
export class DateTimePage implements OnInit {
  @ViewChild('customModal') customModal!: IonModal;

  fechaNaci: Date = new Date();
  fechaSelect: string = '';
  customYearsValues = [1990, 2021, 2012, 2023, 2020, 2025];
  constructor(private pickerCtrl: PickerController) {

   }

  ngOnInit() {
  }


  cambiarFecha(event: any) {
    console.log(event);
    console.log(new Date(event.detail.value));
  }

  dateSelected(event: any) {
    console.log(event);
    this.fechaSelect = event.detail.value;
  }

  clickCancelCustom(){
    this.customModal.dismiss();
    console.log('Click cancel');
  }

  clickConfirmCustom(){
    console.log(this.fechaSelect);
    this.customModal.dismiss();
  }

}
