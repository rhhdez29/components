import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.page.html',
  styleUrls: ['./card.page.scss'],
  standalone: false /*Necesario para poder correr el proyecto */
})
export class CardPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
