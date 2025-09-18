import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.page.html',
  styleUrls: ['./input.page.scss'],
  standalone: false /*Necesario para poder correr el proyecto */
})
export class InputPage implements OnInit {

  nombre: string = 'Fernando';

  usuario = {
    email: '',
    password: ''
  }

  constructor() { }

  ngOnInit() {
  }

  onSubmit(formulario: NgForm){ //Recibe los datos del formulario
    console.log("submit")
    console.log(formulario)
  }

}
