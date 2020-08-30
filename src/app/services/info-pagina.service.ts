import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina = {};
  cargada: boolean = false;

  constructor(private http: HttpClient) {
    console.log('Servicio listo!')

    //Leer archivo JSON
    // Todos los datos
    // this.http.get('assets/data/data_pagina.json')
    //   .subscribe(resp => {
    //     console.log(resp)
    //   });
    // Un campo especifico
    // //Forma 1
    // this.http.get('assets/data/data_pagina.json')
    //   .subscribe((resp: any) => {
    //     //console.log(resp)
    //     console.log(resp.email)
    //   });

    // //Forma 2
    // this.http.get('assets/data/data_pagina.json')
    //   .subscribe(resp => {
    //     //console.log(resp)
    //     console.log(resp['email'])
    //   });

    this.http.get('assets/data/data_pagina.json')
      .subscribe((resp: InfoPagina) => {
        this.cargada = true;
        this.info = resp;
        console.log(resp)
      });

  }
}
