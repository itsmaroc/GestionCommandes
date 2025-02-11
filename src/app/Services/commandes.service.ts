import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from '../../environnement';
import { Commandes } from '../Models/commandes.modal';

@Injectable({
  providedIn: 'root'
})
export class CommandesService {

  private apiUrl = environment.apiUrl;

  constructor(private httpClient: HttpClient) { }
  
  getCommandes () : Observable<Commandes[]> {
    return this.httpClient.get<Commandes[]>(this.apiUrl + "/commandes");
  }
  
  addCommande(commande: Commandes) {
    console.log("Modal fermé avec :", commande);
    return this.httpClient.post(this.apiUrl + "/commandes", commande, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }).pipe(
      catchError(error => {
        console.error('Erreur détaillée:', error);
        return throwError(() => error);
      })
    );
  }

  updateCommande(commande: Commandes): Observable<any> {
    return this.httpClient.put(this.apiUrl + "/commandes", commande);
  }

  deleteCommande(id: number) {
    this.httpClient.delete(this.apiUrl + "/" + id);
  }

  getTotalCommandes() : Observable<number> {
    return this.httpClient.get<number>(this.apiUrl + "/commandes/total");
  }

}
