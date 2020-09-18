import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';
import { ProductoInterface } from '../../interfaces/producto.interface';
// import { Console } from 'console';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    public InfoProductosService: ProductosService) { }

  ngOnInit() {
    this.route.params.subscribe(
      parametro => {
        this.InfoProductosService.buscarProducto(parametro['termino']);
      }
    );
  }

}
