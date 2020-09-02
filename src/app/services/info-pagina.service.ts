import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina = {};
  cargada: boolean = false;

  infoequipo: any = [];

  constructor(private http: HttpClient) {
    this.cargaInfo();
    this.cargarEquipo();
  }

  private cargaInfo() {

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
      });
  }

  public cargarEquipo() {
    this.http.get('https://angular-html-2664d.firebaseio.com/equipo.json')
      .subscribe((resp: any[]) => {
        this.infoequipo = resp;
        // console.log(this.infoequipo)
      });
  }
}
