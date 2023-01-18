import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <!-- Header -->
    <app-header></app-header>
    
    <!-- Routes -->
    <router-outlet></router-outlet>

    <!-- Footer -->
    <app-footer></app-footer>
  `,
  styles: []
})
export class AppComponent {
  
  constructor(){}

}
