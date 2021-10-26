import { Component, Input, OnInit } from '@angular/core';
import { PaisInterface } from '../../interfaces/pais.interfaces';

@Component({
  selector: 'app-pais-tabla',
  templateUrl: './pais-tabla.component.html'
})
export class PaisTablaComponent {

  constructor() { }
  
  @Input() respuesta : PaisInterface[] = []

}
