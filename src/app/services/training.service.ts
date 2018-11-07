import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { environment } from '../../environments/environment';
import { Training } from '../models/training.model';
import { Observable } from 'rxjs';

@Injectable()
export class TrainingService {

    apiUrl = `${environment.apiUrl}/training`;

    constructor(private http: HttpClient) {
    }

    getAll(): Observable<Training[]> {
        return this.http.get<Training[]>(this.apiUrl);
    }

    getById(id: number): Observable<Training> {
        return this.http.get<Training>(`${this.apiUrl}/${id}`);
    }

    create(t: Training) {
        return this.http.post(`${this.apiUrl}`,
            {name: t.name, weeks: t.weeks, timesPerWeek: t.timesPerWeek, description: t.description});
    }

    update(training: any) {
        return this.http.put(`${this.apiUrl}/${training.id}`, training);
    }

    delete(id: number) {
        return this.http.delete(`${this.apiUrl}/${id}`);
    }
}
