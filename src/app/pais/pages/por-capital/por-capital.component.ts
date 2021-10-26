import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { PaisInterface } from '../../interfaces/pais.interfaces';

@Component({
  selector: 'app-por-capital',
  templateUrl: 'por-capital.component.html',
  styleUrls: ['por-capital.component.css']
})


export class PorCapitalComponent {

  hayError : boolean = false;

  respuesta : PaisInterface[]  = [];

  constructor(private PaisService:PaisService) { }

  termino : string = '';

  buscar(termino : string){
    this.hayError=false;
    this.termino = termino;
    console.log(this.termino);
    this.PaisService.buscarCapital(this.termino).subscribe(resp => {this.respuesta=resp;console.log(resp[0].name)},
                                                       (err) => {this.hayError=true;this.respuesta=[]}
                                                        );
  }

  sugerencias(termino:string){
    this.hayError = false;
  }

}
