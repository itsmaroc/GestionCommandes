import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideMenuComponent } from "./shared/directives/side-menu/side-menu.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SideMenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    // Vérifiez si nous sommes dans un environnement côté client (pour éviter des erreurs SSR)
    if (typeof window !== 'undefined') {
      // Charger dynamiquement Bootstrap JavaScript
      import('bootstrap').then(() => {
        console.log('Bootstrap JavaScript a été chargé côté client');
      }).catch(err => {
        console.error('Erreur lors du chargement de Bootstrap JS:', err);
      });
    }
  }
}
