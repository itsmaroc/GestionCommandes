import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Clients } from '../../Models/models/clients.model';
import { ClientServiceService } from '../../Services/client-service.service';
import { EditProductModalComponent } from '../../shared/directives/edit-client-modal/edit-client-modal.component';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { ConfirmDeleteComponent } from '../../shared/directives/confirm-delete/confirm-delete.component';

@Component({
  selector: 'app-page-client',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './page-client.component.html',
  styleUrl: './page-client.component.css'
})
export class PageClientComponent {

  clients: Clients[] = [];
  showModal:boolean = false;
  getClient: Observable<Clients[]> | undefined;

  constructor(private clientService:ClientServiceService, private modalService: NgbModal) {
  }

  ngOnInit():void {
    this.clientService.getClients().subscribe((data: Clients[]) =>{
      this.clients = data;
    })
  }
  
  openAddModal() {
  }

  openEditModal(client: Clients | null) {
    // Ouvre le modal et récupère la référence du modal ouvert
    const modalRef = this.modalService.open(EditProductModalComponent, {
      backdrop: 'static',  // Par exemple, empêche la fermeture en cliquant à l'extérieur
      keyboard: true
    });
    
    if (client) {
      modalRef.componentInstance.client = { ...client };
      modalRef.componentInstance.isEditMode = true;
    } else {
      modalRef.componentInstance.client = { nom: '', prenom: '', email: '', telephone: '', adresse: '' };
      modalRef.componentInstance.isEditMode = false;
    }

    modalRef.result.then(
      result => console.log("Modal fermé avec :", result),
      reason => console.log("Modal dismiss avec :", reason)
    );
  }

  confirmDelete(client: Clients) {
    const modalRef = this.modalService.open(ConfirmDeleteComponent);
    modalRef.componentInstance.message = `Voulez-vous vraiment supprimer ${client.nom} ${client.prenom} ?`;

    modalRef.result.then(
      (confirmed) => {
        if (confirmed) {
          this.clients = this.clients.filter(c => c.clientid !== client.clientid);
          console.log(`Client ${client.nom} supprimé`);
        }
      },
      () => console.log('Suppression annulée')
    );
  }

  ngOnDestroy():void {
    this.clients = [];
  }

  updateClient(client: Clients) {
    this.clientService.updateClient(client).subscribe(() => {
      this.clientService.getClients().subscribe((data: Clients[]) => {
        this.clients = data;
      });
    });
  }

  deleteClient(client: Clients) {
    this.clientService.deleteClient(client.clientid);
  }

}
