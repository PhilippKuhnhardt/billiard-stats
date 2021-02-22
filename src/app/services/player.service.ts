import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Player} from '../models/player.model';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  constructor() { }

  public getAllPlayers(): Observable<Player[]> {
    const playerList: Player[] = [new Player('Kuni', 100, 10, 6), new Player('Fabi', 112, 12, 7)];
    return new Observable<Player[]>(subscriber => {
      subscriber.next(playerList);
    });
  }
}
