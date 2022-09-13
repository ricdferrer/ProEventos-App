import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Evento } from '../models/Evento';

@Injectable(
  // {providedIn: 'root'}
)
export class EventoService {
  baseURL = 'https://localhost:5001/api/eventos';
  constructor(private https: HttpClient) {}

  getEventos(): Observable<Evento[]> {
    return this.https.get<Evento[]>(this.baseURL);
  }
  getEventosByTema(tema: string): Observable<Evento[]> {
    return this.https.get<Evento[]>(`${this.baseURL}/${tema}/tema`);
  }
  getEventoById(id: number): Observable<Evento> {
    return this.https.get<Evento>(`${this.baseURL}/${id}`);
  }
}
