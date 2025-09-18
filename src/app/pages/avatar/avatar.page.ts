import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.page.html',
  styleUrls: ['./avatar.page.scss'],
  standalone: false /*Necesario para poder correr el proyecto */
})
export class AvatarPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
