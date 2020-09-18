import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';
import { ProductoDetalleInterface } from '../../interfaces/producto_detalle.interface';
import { InfoPaginaService } from '../../services/info-pagina.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  parametro: string;
  cargando = true;
  productodetalle: ProductoDetalleInterface;
  fecha = new Date();

  constructor(private route: ActivatedRoute,
    public infoProductoService: ProductosService,
    public infoPaginaService: InfoPaginaService) { }

  ngOnInit() {

    this.route.params
      .subscribe(parametros => {
        this.parametro = parametros['id'];
        // console.log(this.parametro);

        this.infoProductoService.getproducto(this.parametro)
          .subscribe((productodetalle: ProductoDetalleInterface) => {
            this.productodetalle = productodetalle;

            setTimeout(() => {
              this.cargando = false;
            }, 2000);

          });
      })
  }

}
