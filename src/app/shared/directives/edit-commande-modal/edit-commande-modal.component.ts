import { Component, Input } from '@angular/core';
import { Commandes } from '../../../Models/commandes.modal';
import { FormsModule, NgForm } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { ClientServiceService } from '../../../Services/client-service.service';
import { Clients } from '../../../Models/models/clients.model';
import { Status } from '../../Enum/status';

@Component({
  selector: 'app-edit-commande-modal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './edit-commande-modal.component.html',
  styleUrl: './edit-commande-modal.component.css'
})
export class EditCommandeModalComponent {
  @Input() commande!: Commandes;
  @Input() isEditMode: boolean = false; // Pour savoir si on modifie ou ajoute
  clients: Clients[] = [];
  statuses: string[] = Object.values(Status);
  
  constructor(private activeModal: NgbActiveModal, private clientService: ClientServiceService) {}

  ngOnInit(): void {
    this.clientService.getClients().subscribe((data: Clients[]) =>{
      this.clients = data;
    })
  }
  onSubmit(form: NgForm) {
    if (form.invalid) return;
    this.activeModal.close(this.commande);
  }
  close() { 
    console.log("Fermeture du modal...");
    this.activeModal.dismiss('Fermeture manuelle');
  }
}
