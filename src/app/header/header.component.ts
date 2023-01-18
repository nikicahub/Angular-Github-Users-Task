import { Component } from '@angular/core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-header',
  template: `
    
    <nav class="navbar bg-body-tertiary navbar-dark bg-dark sticky-top">
        <div class="container">
          <img src="assets/img/GitHub-MarkW.png" routerLink="/" alt="" width="75px">
          <a class="navbar-brand">Github users</a>
            <div class="navbar-nav">
             <a class="nav-link" aria-current="page" routerLink="/"><fa-icon [icon]="['fas', 'backward']"></fa-icon></a>
            </div>
           
        </div>
      </nav>
    
  `,
  styles: [
  ]
})
export class HeaderComponent {
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas, far);
  }
}