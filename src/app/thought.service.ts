import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Thought } from './thought.model';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ThoughtService {
  private apiUrl = `${environment.apiUrl}/thoughts`;

  constructor(private http: HttpClient) { }

  getThoughts(): Observable<Thought[]> {
    return this.http.get<Thought[]>(this.apiUrl).pipe(
      catchError(this.handleError)
    );
  }

  getThoughtById(id: number): Observable<Thought> {
    return this.http.get<Thought>(`${this.apiUrl}/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  createThought(thought: Thought): Observable<Thought> {
    return this.http.post<Thought>(this.apiUrl, thought).pipe(
      catchError(this.handleError)
    );
  }

  updateThought(thought: Thought): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${thought.id}`, thought).pipe(
      catchError(this.handleError)
    );
  }

  deleteThought(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'An unknown error occurred!';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `A client-side error occurred: ${error.error.message}`;
    } else {
      errorMessage = `Server returned code: ${error.status}, error message is: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}
