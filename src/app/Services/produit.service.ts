import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from '../../environnement';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  private apiUrl = environment.apiUrl;

  constructor(private httpClient: HttpClient) { }

  getTotalProduits() : Observable<number> {
    return this.httpClient.get<number>(this.apiUrl + "/produits/total");
  }
}
