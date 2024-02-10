import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  @Output() changeComponent: EventEmitter<boolean> = new EventEmitter<boolean>();
  flag=false;
  // Método para cambiar el componente dinámico
  changeDynamicComponent(clicked: boolean) {
    this.changeComponent.emit(clicked);
    this.flag=true;
  }
}