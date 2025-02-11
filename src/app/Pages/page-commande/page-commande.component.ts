import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { CommandesService } from '../../Services/commandes.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmDeleteComponent } from '../../shared/directives/confirm-delete/confirm-delete.component';
import { EditProductModalComponent } from '../../shared/directives/edit-client-modal/edit-client-modal.component';
import { Commandes } from '../../Models/commandes.modal';
import { CommonModule } from '@angular/common';
import { Clients } from '../../Models/models/clients.model';
import { EditCommandeModalComponent } from '../../shared/directives/edit-commande-modal/edit-commande-modal.component';

@Component({
  selector: 'app-page-commande',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './page-commande.component.html',
  styleUrl: './page-commande.component.css'
})
export class PageCommandeComponent {

  commandes: Commandes[] = [];
  showModal:boolean = false;
  getClient: Observable<Commandes[]> | undefined;

  constructor(private Commandeservice:CommandesService, private modalService: NgbModal) {
  }

  ngOnInit():void {
    this.Commandeservice.getCommandes().subscribe((data: Commandes[]) =>{
      this.commandes = data;
    })
  }
  
  openAddModal() {
  }

  openEditModal(commande: Commandes | null) {
    // Ouvre le modal et récupère la référence du modal ouvert
    const modalRef = this.modalService.open(EditCommandeModalComponent, {
      backdrop: 'static',  // Par exemple, empêche la fermeture en cliquant à l'extérieur
      keyboard: true
    });
    
    if (commande) {
      modalRef.componentInstance.commande = commande;
      modalRef.componentInstance.isEditMode = true;
    } else {
      modalRef.componentInstance.commande =  { id: 0, clientID:0, client: { clientid: 0, nom: '', prenom: '', email: '', telephone: '', adresse: '' }, date: new Date(), statut: '' };
      modalRef.componentInstance.isEditMode = false;
    }

    modalRef.result.then(
      (result: Commandes) => {

        if(result.id === 0) { 
          this.Commandeservice.addCommande(result).subscribe((result) => {  
            console.log("Commande ajouté avec succès");
          });
        } else {
          this.updateClient(result);
        }
      },
      reason => console.log("Modal dismiss avec :", reason)
    );
  }

  confirmDelete(commande: Commandes) {
    const modalRef = this.modalService.open(ConfirmDeleteComponent);
    modalRef.componentInstance.message = `Voulez-vous vraiment supprimer ${commande.id} ${commande.client.nom} ?`;

    modalRef.result.then(
      (confirmed) => {
        if (confirmed) {
          this.commandes = this.commandes.filter(c => c.id !== commande.id);

          this.Commandeservice.deleteCommande(commande.id);

          console.log(`Commande N° ${commande.id} supprimé`);
        }
      },
      () => console.log('Suppression annulée')
    );
  }

  ngOnDestroy():void {
    this.commandes = [];
  }


  updateClient(commande: Commandes) {
    this.Commandeservice.updateCommande(commande).subscribe(() => {
      this.Commandeservice.getCommandes().subscribe((data: Commandes[]) => {
        this.commandes = data;
      });
    });
  }

  deleteClient(commande: Commandes) {
    this.Commandeservice.deleteCommande(commande.id);
  }

}
function result(value: any) {
  throw new Error('Function not implemented.');
}

