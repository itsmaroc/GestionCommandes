import { Component, inject, Inject, PLATFORM_ID } from '@angular/core';
import { ClientServiceService } from '../../Services/client-service.service';
import { Clients } from '../../Models/models/clients.model';
import { CommonModule } from '@angular/common';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-produits',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './produits.component.html',
  styleUrl: './produits.component.css'
})
export class ProduitsComponent {

}
