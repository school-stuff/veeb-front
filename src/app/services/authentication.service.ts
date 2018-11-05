import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable()
export class AuthenticationService {

    apiUrl = environment.apiUrl;
    public token: string;
    private TOKEN_NAME = 'currentUser';

    constructor(private http: HttpClient) {
        // set token if saved in local storage
        const currentUser = this.getCurrentUser();
        this.token = currentUser && currentUser.token;
    }

    getCurrentUser() {
        return JSON.parse(localStorage.getItem(this.TOKEN_NAME));
    }

    setCurrentUser(email, token) {
        // store username and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem(this.TOKEN_NAME, JSON.stringify({email, token}));
    }

    login(email: string, password: string) {
        return this.http.post<any>(`${this.apiUrl}/login`, {email, password}, {observe: 'response'})
            .pipe(map((response) => {
                const headers = response.headers;

                if (headers) {
                    this.token = response.headers.get('Authorization');
                }

                if (this.token) {
                    this.token = this.token.toString().replace('Bearer ', '');
                    this.setCurrentUser(email, this.token);
                    return true;
                } else {
                    return false;
                }
            }));
    }

    logout() {
        this.token = null;
        // remove user from local storage to log user out
        localStorage.removeItem(this.TOKEN_NAME);
    }
}
