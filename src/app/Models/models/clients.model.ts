// src/app/models/client.model.ts
export class Clients {
    clientid: number = 0;
    nom: string = '';
    prenom: string = '';
    email: string = '';
    telephone: string = '';
    adresse: string = '';
  
    constructor(
      clientid: number,
      nom: string,
      prenom: string,
      email: string,
      telephone: string,
      adresse: string
    ) {
      this.clientid = clientid;
      this.nom = nom;
      this.prenom = prenom;
      this.email = email;
      this.telephone = telephone;
      this.adresse = adresse;
    }
  }
  