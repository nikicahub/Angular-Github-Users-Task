import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UserListComponent } from './user-list/user-list.component';
import { UserSingleComponent } from './user-single/user-single.component';
import { FormsModule } from '@angular/forms';
import { FilterPipeModule } from 'ngx-filter-pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    UserListComponent,
    UserSingleComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    FormsModule,
    FilterPipeModule,
    Ng2SearchPipeModule,
    NgxPaginationModule
  ]
})
export class UsersModule { }
