import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.page.html',
  styleUrls: ['./button.page.scss'],
  standalone: false /*Necesario para poder correr el proyecto */
})
export class ButtonPage implements OnInit {

  favorite: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.favorite = !this.favorite;
  }

}
