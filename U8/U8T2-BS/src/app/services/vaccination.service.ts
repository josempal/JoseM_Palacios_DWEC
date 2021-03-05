import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Comunidad } from '../interfaces/comunidad';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VaccinationService {

  api_url: string = 'https://covid-vacuna.app/data/latest.json';
  vacunacion: Comunidad[];

  constructor(private _http: HttpClient) {
    console.log('servicio creado');
  
  }

  get_vaccination(): Observable<Comunidad[]> {
    return this._http.get<Comunidad[]>(this.api_url);
  }
}
