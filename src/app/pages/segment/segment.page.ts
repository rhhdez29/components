import { Component, OnInit } from '@angular/core';
import { Data } from '../../services/data';
import { Observable } from 'rxjs';
import { IonList, IonLabel } from "@ionic/angular/standalone";

@Component({
  selector: 'app-segment',
  templateUrl: './segment.page.html',
  styleUrls: ['./segment.page.scss'],
  standalone: false,
})
export class SegmentPage implements OnInit {

superHeroes!: Observable<any>;
  constructor(private dataService:Data ) {}

  ngOnInit() {
    this.superHeroes = this.dataService.getHeroes();

  }

   segmentChanged(event:any){
    console.log(event.detail.value);

  }

}

