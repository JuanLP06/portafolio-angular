import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from '../../services/info-pagina.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public infoPaginaService: InfoPaginaService,
    private router: Router) { }

  ngOnInit() {
  }

  buscarProducto(terminoBusqueda: string) {
    if (terminoBusqueda.length < 2) {
      alert('Ingrese un valor valido en la búsqueda');
      return;
    }
    this.router.navigate(['/search', terminoBusqueda]);
  }

}
