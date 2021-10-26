import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { PaisInterface } from '../../interfaces/pais.interfaces';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
    `
      li{
        cursor:pointer;
      }
    `
  ]
})

export class PorPaisComponent {

  hayError : boolean = false;

  respuesta : PaisInterface[]  = [];

  respuestaSugeridos : PaisInterface[]  = [];

  listadoSugerencias : boolean = false;

  placeholder: string = 'buscar pais';

  constructor(private PaisService:PaisService) { }

  termino : string = '';

  buscar(termino : string){
    this.listadoSugerencias=false;
    this.hayError=false;
    this.termino = termino;
    console.log(this.termino);
    this.PaisService.buscarPais(this.termino).subscribe(resp => {this.respuesta=resp;console.log(resp[0].name)},
                                                       (err) => {this.hayError=true;this.respuesta=[]}
                                                        );
  }

  sugerencias(termino:string){
    this.listadoSugerencias = true;
    this.hayError = false;
    this.termino = termino;
    console.log(this.termino);
    this.PaisService.buscarPais(this.termino).subscribe(resp => {this.respuestaSugeridos=resp.splice(0,5);console.log(resp)},
                                                        (err) => this.respuestaSugeridos = []
                                                        );
  }

}
