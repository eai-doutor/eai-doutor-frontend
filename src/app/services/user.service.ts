import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EAI_DOUTOR_API } from '../app.api';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { KeyType, SessionStorageService } from './session-storage.service';
export interface IUserInfo {
  name: string;
  email: string;
  password: string;
}

export interface IUser {
  user: {
    _id: string;
    name: string;
    email: string;
  };
  token: string;
}

@Injectable({ providedIn: 'root' })
export class UserService {
  public user!: IUser;

  constructor(private httpClient: HttpClient, private sessionStorageService: SessionStorageService) {}

  public create(user: IUser): Observable<IUserInfo> {
    return this.httpClient.post<IUserInfo>(`${EAI_DOUTOR_API}/register`, user).pipe(map((user) => user));
  }

  public login(email: string, password: string): Observable<IUser> {
    return this.httpClient.post<IUser>(`${EAI_DOUTOR_API}/authenticate`, { email, password }).pipe(tap((client) => {
      this.sessionStorageService.set(KeyType.USER, { user: client.user });
      this.sessionStorageService.set(KeyType.TOKEN, { token: client.token });
    }));
  }

  public isLoggedIn(): boolean {
    return this.sessionStorageService.get(KeyType.USER) !== null;
  }

  public logout(): void {
    this.sessionStorageService.clear();
  }
}
