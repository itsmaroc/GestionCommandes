import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environnement';

@Injectable({
  providedIn: 'root'
})
export class DetailsCommandeService {
  
  private apiUrl = environment.apiUrl;

  constructor(private httpClient: HttpClient) { }

}
