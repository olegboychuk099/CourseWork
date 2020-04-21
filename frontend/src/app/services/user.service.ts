import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {UserModel} from "../models/user.model";

@Injectable({
  providedIn: 'root'
})

export class UserService {

  private userURL = 'http://localhost:3000/api/user/profile';
  private userRoleURL = 'http://localhost:3000/api/user/role';

  constructor(private http: HttpClient, private router: Router) {
  }

  getUser() {
    return this.http.post<UserModel>(this.userURL, {token: localStorage.getItem('token')});
  }

  getUserRole() {
    return this.http.post(this.userRoleURL, {token: localStorage.getItem('token')});
  }

  updateStudent(user: UserModel) {
    return this.http.put<UserModel>(this.userURL, user);
  }
}
