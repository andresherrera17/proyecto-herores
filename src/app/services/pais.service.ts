import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPais } from '../interfaces/pais.interface';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  constructor(private _http: HttpClient) {
  }

  getPaises() {
    return this._http.get('https://restcountries.com/v2/lang/es')
      .pipe(
        map((resp: IPais[]) =>
          resp.map(
            (pais: IPais) => ({ nombre: pais.name, codigo: pais.alpha3Code })
          )
        )
      )
  }
}
