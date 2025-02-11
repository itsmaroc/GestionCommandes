import { Routes } from '@angular/router';
import { ProduitsComponent } from './Pages/produits/produits.component';
import { DashbordComponent } from './Pages/dashbord/dashbord.component';
import { PageClientComponent } from './Pages/page-client/page-client.component';
import { PageCommandeComponent } from './Pages/page-commande/page-commande.component';
import { PageDetailsCommandeComponent } from './Pages/page-details-commande/page-details-commande.component';

export const routes: Routes = [
  { path: 'dashbord', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashbordComponent },
  { path: 'clients', component: PageClientComponent },
  { path: 'produits', component: ProduitsComponent },
  { path: 'commandes', component: PageCommandeComponent },
  { path: 'detailscommandes/{id}', component: PageDetailsCommandeComponent },
];
