import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { register } from 'swiper/element/bundle';
register();

@Component({
  selector: 'app-proyectos',
  standalone: true,
  imports: [],
  templateUrl: './proyectos.component.html',
  styleUrl: './proyectos.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ProyectosComponent {
  constructor() {}
}
