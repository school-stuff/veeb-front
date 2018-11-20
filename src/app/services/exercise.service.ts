import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Training } from '../models/training.model';
import { Exercise } from '../models/exercise.model';

@Injectable()
export class ExerciseService {

    apiUrl = `${environment.apiUrl}/exercise`;

    constructor(private http: HttpClient) {
    }

    getAll(): Observable<Exercise[]> {
        return this.http.get<Exercise[]>(this.apiUrl);
    }

    getById(id: number): Observable<Exercise> {
        return this.http.get<Exercise>(`${this.apiUrl}/${id}`);
    }

    create(t: Exercise) {
        return this.http.post(`${this.apiUrl}`,
            {name: t.name, amount: t.amount, description: t.description});
    }

    update(exercise: any) {
        return this.http.put(`${this.apiUrl}/${exercise.id}`, exercise);
    }

    delete(id: number) {
        return this.http.delete(`${this.apiUrl}/${id}`);
    }
}
