import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EAI_DOUTOR_API } from '../app.api';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { KeyType, SessionStorageService } from './session-storage.service';

const REGISTER_ENDPOINT = '/users/register';
const EDIT_ENDPOINT = '/users/edit';
const LIST_ENDPOINT = '/users/list';
const LOGIN_ENDPOINT = '/users/login';

export interface ITerm {
  signed: boolean;
  signatureDate: Date;
}

export interface IUser {
  _id?: string;
  customerId?: string;
  token?: string;
  name: string;
  email: string;
  password: string;
  terms?: ITerm;
}

@Injectable({ providedIn: 'root' })
export class UserService {
  public user!: IUser;

  constructor(private httpClient: HttpClient, private sessionStorageService: SessionStorageService) {}

  public create(user: IUser): Observable<IUser> {
    return this.httpClient.post<IUser>(`${EAI_DOUTOR_API}${REGISTER_ENDPOINT}`, user).pipe(map((user) => user));
  }

  public edit(user: IUser, id: string): Observable<IUser> {
    return this.httpClient.put<IUser>(`${EAI_DOUTOR_API}${EDIT_ENDPOINT}/${id}`, user).pipe(map((user) => user));
  }

  public get(id: string): Observable<IUser> {
    return this.httpClient.get<IUser>(`${EAI_DOUTOR_API}${LIST_ENDPOINT}/${id}`).pipe(map((users) => users));
  }

  public login(email: string, password: string): Observable<IUser> {
    return this.httpClient.post<IUser>(`${EAI_DOUTOR_API}${LOGIN_ENDPOINT}`, { email, password }).pipe(tap((user) => {
      this.setToken(user.token);
      this.setUser(user);
    }));
  }

  public isLoggedIn(): boolean {
    return this.sessionStorageService.get(KeyType.USER) !== null;
  }

  public setUser(user: IUser): void {
    this.sessionStorageService.set(KeyType.USER, user);
  }

  public getUser(): IUser {
    return this.sessionStorageService.get(KeyType.USER);
  }

  public setToken(token?: string): void {
    this.sessionStorageService.set(KeyType.TOKEN, { token });
  }

  public getToken(): { token: string } {
    return this.sessionStorageService.get(KeyType.TOKEN);
  }

  public logout(): void {
    this.sessionStorageService.clear();
  }
}
