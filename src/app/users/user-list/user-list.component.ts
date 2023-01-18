import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';


@Component({
  selector: 'app-user-list',
  template: `
    <!-- <p>
      {{ users | json }} - show the users thr JSON 
    </p> -->

    <section class="section">
      <div class="container">
        <input type="text" class="form-control form-input mb-3 mt-3" [(ngModel)]="searchTerm" placeholder="Search users">

      <div class="row g-3 text-center" *ngIf="users">
        <div *ngIf="(users | async | filter:searchTerm).length === 0" class="col-12">
          <p>Sorry, no users found under <b>{{searchTerm}}</b>, please try another</p>
        </div>
      <div [ngClass]="{'col-12 col-md-6 col-lg-3': i < 8, 'col-12 col-md-6 col-lg-6': i >= 8}" *ngFor="let user of users | async | filter:searchTerm; let i = index">
        <div class="bg-white rounded shadow-sm py-5 px-4">
          <img src="{{ user.avatar_url }}" alt="" width="200" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm">
          <h5 class="mb-0">{{ user.login }}</h5><span class="small text-lowercase text-muted">{{ user.type }}</span>
          <ul class="details-list mb-0 list-inline mt-3">
            <li class="list-item"><a routerLink="/users/{{ user.login }}" class="btn btn-sm btn-outline-success">User Details</a></li>
          </ul>
        </div>
      </div>
      </div>
      </div>
    </section>
  `,
  styles: [
  ]
})
export class UserListComponent implements OnInit {

  users = <any>[];
  user = <any>[];
  searchTerm: string = '';

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.users = this.userService.getUsers();
  }

}
