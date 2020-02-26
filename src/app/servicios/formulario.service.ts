import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Cliente} from '../modelo';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FormularioService {

  // @ts-ignore
  constructor () {
    console.log('Ya vez mi servicio Gerardo? jajajja');
  }


private api = 'https://jsonplaceholder.typicode.com';
  // @ts-ignore
  // tslint:disable-next-line:adjacent-overload-signatures
  constructor (
    private http: HttpClient
  ) { }
  enviarInfo(cliente: Cliente): Observable <Cliente> {
    return this.http.post <Cliente> (this.api, cliente);
  }

}

