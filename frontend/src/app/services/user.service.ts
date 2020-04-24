import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {UserModel} from "../models/user.model";
import {LanguagesList} from "../models/languagesList";

@Injectable({
  providedIn: 'root'
})

export class UserService {

  private userURL = 'http://localhost:3000/api/user/profile';
  private userSubscriptionsURL = 'http://localhost:3000/api/user/subscriptions';
  private subscribeURL = 'http://localhost:3000/api/user/';
  private userRoleURL = 'http://localhost:3000/api/user/role';
  private userLanguagesURL = 'http://localhost:3000/api/user/languages';
  private languagesURL = 'http://localhost:3000/api/languages';

  constructor(private http: HttpClient, private router: Router) {
  }

  getUser() {
    return this.http.get<UserModel>(this.userURL);
  }

  getUserRole() {
    return this.http.get(this.userRoleURL);
  }

  updateUser(user: UserModel) {
    return this.http.put<UserModel>(this.userURL, user);
  }

  getUserLanguages() {
    return this.http.get<LanguagesList[]>(this.userLanguagesURL);
  }

  getUserLanguagesById(id: number) {
    return this.http.get<LanguagesList[]>(this.userLanguagesURL+'/'+id);
  }

  getLanguages() {
    return this.http.get<LanguagesList[]>(this.languagesURL);
  }

  deleteUser(id: number) {
    return this.http.delete(this.userURL);
  }

  getUserSubscriptions() {
    return this.http.get<UserModel[]>(this.userSubscriptionsURL);
  }

  getUserById(number: number) {
    return this.http.get<UserModel>(this.userURL + '/' + number);
  }

  getTeacherSubscribersById(number: number) {
    return this.http.get(this.userSubscriptionsURL + '/' + number);
  }

  subscribeTo(id: number) {
    return this.http.get(this.subscribeURL + id + '/subscribe');
  }

  unsubscribeTo(id: number) {
    return this.http.delete(this.subscribeURL + id + '/subscribe');
  }
}
