import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { IPersona } from '../interfaces/persona.interface';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  persona$: Subject<IPersona>;

  constructor() {
    this.persona$ = new Subject();
  }

  getPersona$(): Observable<IPersona> {
    return this.persona$.asObservable();
  }

  login(persona: IPersona) {
    this.persona$.next(persona);
  }
}
