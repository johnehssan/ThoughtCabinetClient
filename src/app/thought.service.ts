import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Thought } from './thought.model';

@Injectable({
  providedIn: 'root'
})
export class ThoughtService {
  private apiUrl = 'http://localhost:5000/api/thoughts';

  constructor(private http: HttpClient) { }

  getThoughts(): Observable<Thought[]> {
    return this.http.get<Thought[]>(this.apiUrl);
  }

  getThoughtById(id: number): Observable<Thought> {
    return this.http.get<Thought>(`${this.apiUrl}/${id}`);
  }

  createThought(thought: Thought): Observable<Thought> {
    return this.http.post<Thought>(this.apiUrl, thought);
  }

  updateThought(thought: Thought): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${thought.id}`, thought);
  }

  deleteThought(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
