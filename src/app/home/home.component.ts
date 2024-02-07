import { Component } from '@angular/core';
import { HomeModule } from './home.module';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HomeModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})

export class HomeComponent {

  flag_changeComponent: Boolean=false;
  products = [
    {
      name: 'Producto 1',
      description: 'Esta es la descripción del producto 1',
      price: 100,
      image: 'ruta/a/la/imagen1.jpg'
    },
    {
      name: 'Producto 2',
      description: 'Esta es la descripción del producto 2',
      price: 200,
      image: 'ruta/a/la/imagen2.jpg'
    },
    // Agrega más productos aquí
  ];

  onChangeComponent(event: any){
    this.flag_changeComponent=event;

  }
}