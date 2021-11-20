import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { IPais } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  constructor(private _http: HttpClient) {
  }

  getPaises() {
    return this._http.get('https://restcountries.com/v3.1/lang/spa')
      .pipe(
        map((resp: IPais[]) =>
          resp.map(
            pais => ({ nombre: pais.nombre, codigo: pais.codigo })
          )
        )
      )
  }

}
