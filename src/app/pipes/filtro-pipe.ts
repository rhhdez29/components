import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro',
  standalone: false,
})
export class FiltroPipe implements PipeTransform {

  transform(arreglo: any[], 
            texto: string = '',
            columna: string = 'title'
          ): any[] {
    if (!arreglo) {
      return [];
    }
    if (texto === '') {
      return arreglo;
    }
    texto = texto.toLowerCase();
    return arreglo.filter(item => {
      if (item && item.title && typeof item.title === 'string') {
        return item.title.toLowerCase().includes(texto);
      }
      return false;
    });
  }

}
