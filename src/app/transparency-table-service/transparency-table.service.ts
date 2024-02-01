import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface TransparencyData {
  createdAt: string;
  day: number;
  id: number;
  month: number;
  name: string;
  week: number;
  year: number;
}

@Injectable({
  providedIn: 'root',
})
export class TransparencyTableService {
  constructor(private http: HttpClient) {}

  getTransparencyData() {
    return this.http.get<TransparencyData[]>(
      'https://www.getup.org.au/api/transparency_stats',
    );
  }
}
