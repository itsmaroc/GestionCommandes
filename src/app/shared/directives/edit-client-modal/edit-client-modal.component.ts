import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbActiveModal, NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Clients } from '../../../Models/models/clients.model';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-product-modal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './edit-client-modal.component.html',
  styleUrl: './edit-client-modal.component.css',
  providers: []
})
export class EditProductModalComponent {
  @Input() client!: Clients;
  @Input() isEditMode: boolean = false; // Pour savoir si on modifie ou ajoute

  constructor(public activeModal: NgbActiveModal) {}
  onSubmit(form: NgForm) {
    if (form.invalid) return;
    this.activeModal.close(this.client);
  }
  close() { 
    console.log("Fermeture du modal...");
    this.activeModal.dismiss('Fermeture manuelle');
  }
}
