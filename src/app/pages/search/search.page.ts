import { Component, OnInit } from '@angular/core';
import { Data } from '../../services/data';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
  standalone: false,
})
export class SearchPage implements OnInit {

  albumes: any[] = [];
  textoBuscar: string = '';

  constructor( private dataService: Data ) { }

  ngOnInit() {
    this.dataService.getAlbumes().subscribe( (albumes: any[]) => {
      this.albumes = albumes;
    });
  }

  onSearchChange(event: any) {
    //console.log(event);
    this.textoBuscar = event.detail.value;
  }

}
