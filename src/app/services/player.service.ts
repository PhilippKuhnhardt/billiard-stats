import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Player} from '../models/player.model';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  playerList: Player[];

  constructor() {
    this.playerList = [
      new Player('Kuni', 500, 98, 50),
      new Player('LUki', 672, 111, 73),
      new Player('Ferdi', 345, 60, 23),
      new Player('Marco', 201, 79, 40),
      new Player('Michelle', 168, 23, 3),
      new Player('Leo', 342, 43, 15),
      new Player('Nick', 450, 8, 3),
      new Player('Heindl', 507, 12, 6),
      new Player('Fabi', 998, 123, 85)];
  }

  public getAllPlayers(): Observable<Player[]> {
    return new Observable<Player[]>(subscriber => {
      subscriber.next(this.playerList);
    });
  }

  public getPlayer(playerName: string): Observable<Player> {
    return new Observable<Player>( subscriber => {
      subscriber.next(this.playerList.find(_ => _.playerName === playerName));
    });
  }

  public updatePlayer(player: Player){
    const objIndex = this.playerList.findIndex(_ => _.playerName === player.playerName);
    this.playerList[objIndex] = player;
  }

  public addPlayer(player: Player){
    this.playerList.push(player);
  }

  public removePlayer(player: Player){
    const objIndex = this.playerList.findIndex(_ => _.playerName === player.playerName);
    if (objIndex > -1){
      this.playerList.splice(objIndex, 1);
    }
  }
}
