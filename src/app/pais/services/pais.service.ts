import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PaisInterface } from '../interfaces/pais.interfaces';

@Injectable({
  providedIn: 'root'
})

export class PaisService {

  private apiUrl: string = 'https://restcountries.com/v2';

  get params(){return new HttpParams()
    .set('fields','name,capital,alpha2Code,flag,population')}

  constructor(private http: HttpClient) { }

  buscarPais(termino:string):Observable<PaisInterface[]>{

    const url = `${this.apiUrl}/name/${termino}`;
    
    return this.http.get<PaisInterface[]>(url, {params:this.params})
  }

  buscarCapital(termino:string):Observable<PaisInterface[]>{

    const url = `${this.apiUrl}/capital/${termino}`;
    
    return this.http.get<PaisInterface[]>(url, {params:this.params})
  }

  getPaisPorAlpha(id:string):Observable<PaisInterface>{

    const url = `${this.apiUrl}/alpha/${id}`;
    
    return this.http.get<PaisInterface>(url)
  }

  buscarRegion(region:string):Observable<PaisInterface[]>{
  
    const url = `${this.apiUrl}/region/${region}/`;
    
    return this.http.get<PaisInterface[]>(url, {params:this.params})
  }

}
