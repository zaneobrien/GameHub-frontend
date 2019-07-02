import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Game } from '../model/game';
import { Observable } from 'rxjs';

@Injectable()
export class GameService {

  private gamesUrl: string;

  constructor(private http: HttpClient) {
    this.gamesUrl = 'http://localhost:8080/games';
  }

  public findAll(): Observable<Game[]> {
    return this.http.get<Game[]>(this.gamesUrl);
  }

  public findById(id: number): Observable<Game> {
	//console.log(id);
    return this.http.get<Game>(this.gamesUrl + '/' + id);
  }

  public checkIn(userId: number, gameId: number): Observable<Game> {
	  return this.http.get<Game>(this.gamesUrl);
  }

}
