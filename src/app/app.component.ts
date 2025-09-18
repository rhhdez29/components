import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Data } from './services/data';
import { Componente } from 'src/app/interfaces/intefaces';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent {

  componentes!: Observable<Componente[]>;

  constructor(private dataService: Data) {}

  ngOnInit() {
    this.componentes = this.dataService.getMenuOpts();
  }
}
