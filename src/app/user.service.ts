import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl = 'https://api.github.com/users';
  
  constructor(private http: HttpClient) { }

  /* Get all users */
  getUsers(){
    return this.http
    .get(`${this.apiUrl}?per_page=10`);
  }

  /* Get single user by username */
  getUser(username: string){
    return this.http.get(`${this.apiUrl}/${username}`);
  }

  /* Get all of the single user's followers */
  getFollowers(username: string){
    return this.http.get(`${this.apiUrl}/${username}/followers?per_page=1000`);
  }

  searchUsers(username: string){
    return this.http.get(`${this.apiUrl}/users/search?q=${username}`)
  }
  

}

