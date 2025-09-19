import { HttpClient } from '@angular/common/http';
import { Component, Injectable, Pipe } from '@angular/core';
import { Componente } from '../interfaces/intefaces';
import { delay, pipe } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Data {

  constructor(private http: HttpClient) {

  }

  getUsuarios(){
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }

  getAlbumes(){
    return this.http.get<any[]>('https://jsonplaceholder.typicode.com/albums');
  }

  getMenuOpts(){
    return this.http.get<Componente[]>('/assets/data/menu-opciones.json');
  }



getHeroes(){
  return this.http.get<Componente[]>('/assets/data/superheroes.json')
  .pipe(
    delay(1500)
  );
}

}
