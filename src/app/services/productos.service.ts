import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductoInterface } from '../interfaces/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargando = true;
  productos: ProductoInterface[] = [];
  productosfiltrador: ProductoInterface[] = [];

  constructor(private http: HttpClient) {
    this.cargarProductos();
  }

  private cargarProductos() {

    return new Promise((resolve, reject) => {

      this.http.get('https://angular-html-2664d.firebaseio.com/productos_idx.json')
        .subscribe((resp: ProductoInterface[]) => {
          this.productos = resp;

          // setTimeout(() => {
          this.cargando = false;
          // }, 2000);
          resolve();
        });
    });


  }

  getproducto(id: string) {
    return this.http.get(`https://angular-html-2664d.firebaseio.com/productos/${id}.json`);
  }

  buscarProducto(termino: string) {
    if (this.productos.length == 0) {
      //Cargar Productos
      this.cargarProductos().then(() => {
        //ejecutar despues de tener los productos
        //Aplicar filtro
        this.filtarProductos(termino);

      })
    } else {
      this.filtarProductos(termino);

    }
  }

  private filtarProductos(termino: string) {
    this.productosfiltrador  = [];
    termino = termino.toLocaleLowerCase();

    this.productos.forEach(producto => {

      const titulolower = producto.titulo.toLocaleLowerCase()

      if (producto.categoria.indexOf(termino) >= 0 || titulolower.indexOf(termino) >= 0 ) {
        this.productosfiltrador.push(producto);
      }

    })

  }


}
