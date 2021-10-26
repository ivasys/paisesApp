import { Component, EventEmitter, Output, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html'
})

export class PaisInputComponent implements OnInit {
  
  ngOnInit(){
    this.debouncer.pipe(debounceTime(1000)).subscribe( valor =>{this.onDebounce.emit(valor)})
  }

  @Output() onEnter:EventEmitter<string> = new EventEmitter();
  @Output() onDebounce:EventEmitter<string> = new EventEmitter();

  @Input() placeholder:string = '';

  debouncer: Subject<string> = new Subject();
  
  termino: string = '';

  buscar(){
    this.onEnter.emit(this.termino);
  }

  teclaPresionada(){
    this.debouncer.next(this.termino)
  }

}
