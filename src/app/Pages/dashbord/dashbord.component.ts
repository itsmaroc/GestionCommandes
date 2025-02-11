import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ClientServiceService } from '../../Services/client-service.service';
import { CommandesService } from '../../Services/commandes.service';
import { ProduitService } from '../../Services/produit.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashbord',
  standalone: true,
  imports: [],
  templateUrl: './dashbord.component.html',
  styleUrl: './dashbord.component.css'
})
export class DashbordComponent {
  totalClients = 0;
  commandesEnCours = 0;
  totalProduits = 0;

  constructor(private router: Router, private clientService: ClientServiceService
    , private produitsService: ProduitService, private commandesService: CommandesService) {}

  ngOnInit(): void {
    this.getCountClients();
    this.getCountProduits();
    this.getCountCommandes();
  }

  navigateTo(page: string) {
    this.router.navigate([page]);
  }

  getCountClients() {
    return this.clientService.getTotalClients().subscribe((data) => {
      this.totalClients = data;
    });
  }

  getCountProduits() {
    return this.produitsService.getTotalProduits().subscribe((data) => {
      this.totalProduits = data;
    });
  }

  getCountCommandes() {
    return this.commandesService.getTotalCommandes().subscribe((data) => {
      this.commandesEnCours = data;
    });
  }
  ngOnDestroy(): void {
    this.totalClients = 0;
    this.commandesEnCours = 0;
    this.totalProduits = 0;
  }
}
