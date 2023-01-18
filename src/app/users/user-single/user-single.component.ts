import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-user-single',
  template: `
    <section class="section">
      <div class="container">
        <div class="card mt-2" *ngIf="user">
          <div class="card-body text-center">
            <img src="{{ user.avatar_url }}" alt="" width="200" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm">
            <h5 class="card-title">{{ user.login }}</h5>
            <p class="card-text">Followers: {{ user.followers }}  <br> Joined: {{ user.created_at }} </p>
          </div>
        </div>
      </div>
      <div class="container mt-4">
       <div class="row g-3 text-center" *ngIf="followers">
       <h2 class="flHeading"> {{ user.login }} followers: </h2>
         <div [ngClass]="{'col-12 col-md-6 col-lg-3': i < 8, 'col-12 col-md-6 col-lg-6': i >= 8}" *ngFor="let follower of followers | paginate: { itemsPerPage: 10, currentPage: p } let i = index">
          <div class="bg-white rounded shadow-sm py-5 px-4">
            <img src="{{ follower.avatar_url }}" alt="" width="200" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm">
                <h5 class="mb-0">{{ follower.login }}</h5><span class="small text-lowercase text-muted">{{ user.login }}'s follower</span>
                <!-- too see the followers of followers -->
                <!-- <ul class="details-list mb-0 list-inline mt-3">
                    <li class="list-item"><a routerLink="/users/{{ follower.login }}" class="btn btn-sm btn-outline-success">User Details</a></li>
                </ul> -->
          </div>
        </div>
        <pagination-controls class="pagination-controls" (pageChange)="p = $event"></pagination-controls>
       </div>   
      </div>
    </section>
  `,
  styles: [
  ]
})
export class UserSingleComponent implements OnInit {

  user = <any>[];
  follower = <any>[];
  followers = <any>[];
  p = <any>[];

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,

  ) { }

  ngOnInit() {

    //grab username from url
    this.route.params.subscribe(params => {
      const username = params['username'];
      //use the userservice to get data from github api
      this.userService
        .getUser(username)
        .subscribe(user => {
          //bind that data to a user variable
          this.user = user;
        })

    });

    this.route.params.subscribe(params => {
      const username = params['username'];
      this.userService
        .getFollowers(username)
        .subscribe(followers => {
          this.followers = followers;
        });
    });

  }

}
