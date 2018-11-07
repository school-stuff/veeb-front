import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { environment } from '../../environments/environment';

@Injectable()
export class UserService {

    apiUrl = `${environment.apiUrl}/user`;

    constructor(private http: HttpClient) {
    }

    getAll() {
        return this.http.get<User[]>(`${this.apiUrl}`);
    }

    getById(id: number) {
        return this.http.get(`${this.apiUrl}/${id}`);
    }

    update(user: any) {
        return this.http.put(`${this.apiUrl}/${user.id}`, user);
    }

    delete(id: number) {
        return this.http.delete(`${this.apiUrl}/${id}`);
    }
}
