import { HttpClient } from '@angular/common/http';
import { Component, Injectable } from '@angular/core';
import { Componente } from '../interfaces/intefaces';

@Injectable({
  providedIn: 'root'
})
export class Data {

  constructor(private http: HttpClient) {

  }

  getUsuarios(){
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }

  getMenuOpts(){
    return this.http.get<Componente[]>('/assets/data/menu-opciones.json');
  }



getHeroes(){
    return this.http.get<Componente[]>('/assets/data/superheroes.json');
  }

}
