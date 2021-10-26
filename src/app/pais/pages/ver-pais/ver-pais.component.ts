import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';
import { PaisService } from '../../services/pais.service';
import { PaisInterface } from '../../interfaces/pais.interfaces';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  pais!:PaisInterface;

  constructor(
      private activatedRoute:ActivatedRoute,
      private PaisService:PaisService ) { }

  ngOnInit(): void {
      this.activatedRoute.params
      .pipe(
        switchMap(
          ({id})=>this.PaisService.getPaisPorAlpha(id)
        ),
        tap(console.log)
      ).subscribe(pais=>this.pais=pais)
  }

}
