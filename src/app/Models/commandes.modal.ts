import { Clients } from "./models/clients.model";

export class Commandes {
    id: number = 0;
    clientID: number = 0;
    date: Date = new Date();
    statut: string  = '';
    total: number = 0;
    client: Clients = new Clients( 0, '', '', '', '', '');
  
    constructor(clientID: number,date: Date, statut: string, total: number, id: number, client: Clients) {
      if (id) {
        this.id = id;
      }
      this.clientID = clientID;
      this.date = date;
      this.statut = statut;
      this.total = total;
      this.client = client;
    }
}
