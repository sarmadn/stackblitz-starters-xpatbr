import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Router } from "@angular/router";

import { Observable, BehaviorSubject, of } from "rxjs";
import { first, catchError, tap } from "rxjs/operators";

import { User } from "../models/User";
import { ErrorHandlerService } from "./error-handler.service";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private url = "http://localhost:4200/auth";

  isUserLoggedIn$ = new BehaviorSubject<boolean>(false);
  userId!: Pick<User, "id">;

  httpOptions: { headers: HttpHeaders } = {
    headers: new HttpHeaders({ "Content-Type": "application/json" }),
  };

  constructor(
    private http: HttpClient,
    private errorHandlerService: ErrorHandlerService,
    private router: Router
  ) {}

  signup(user: Omit<User, "id">): Observable<User> {
    return this.http
      .post<User>(`${this.url}/signup`, user, this.httpOptions)
      .pipe(
        first(),
        catchError(this.errorHandlerService.handleError<User>("signup"))
      );
  }

  login(
    userId: Pick<User, "id">,
    password: Pick<User, "password">
  ): Observable<{
    token: string;
    userId: Pick<User, "id">;
  }> {
    return this.http
    .post<{ token: string; userId: Pick<User, "id"> }>(`${this.url}/login`, { userId, password }, this.httpOptions)
      .pipe(
        first(),
        tap((tokenObject: { token: string; userId: Pick<User, "id"> }) => {
          this.userId = tokenObject.userId;
          localStorage.setItem("token", tokenObject.token);
          this.isUserLoggedIn$.next(true);
          this.router.navigate(["posts"]);
        }),
        catchError(
          (error: any): Observable<any> => {
            // Handle error here
            return of(Error);
          })
      );
  }
}