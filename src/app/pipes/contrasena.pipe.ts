import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  transform(value: string, mostrar: boolean): string {

    return (mostrar) ? '*'.repeat(value.length) : value;
  }

}
