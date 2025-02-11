import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Clients } from '../Models/models/clients.model';
import { environment } from '../../environnement';

@Injectable({
  providedIn: 'root'
})
export class ClientServiceService {

  private apiUrl = environment.apiUrl;

  constructor(private httpClient: HttpClient) { }


  getClients () : Observable<Clients[]> {
    return this.httpClient.get<Clients[]>(this.apiUrl + "/clients");
  }

  updateClient(client: Clients): Observable<any> {
    return this.httpClient.put(this.apiUrl + "/clients", client);
  }

  deleteClient(id: number) {
    this.httpClient.delete(this.apiUrl + "/" + id);
  }

  getTotalClients() : Observable<number> {
    return this.httpClient.get<number>(this.apiUrl + "/clients/total");
  }

}
