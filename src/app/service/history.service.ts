import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HistoryService {

  private historyUrl: string;

  constructor(private http: HttpClient) {
      this.historyUrl = 'http://localhost:8080/history/game/';
  }

  public findByGameId(id: string): Observable<History[]> {
      return this.http.get<History[]>(this.historyUrl + id);
  }
}
