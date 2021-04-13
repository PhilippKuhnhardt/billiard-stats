import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Player} from '../models/player.model';
import {v4 as uuidv4} from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  // This service is responsible for handling all players and is responsible for interacting with the player model

  playerList: Player[];

  constructor() {

    this.playerList = [];
    this.addPlayer('Kuni', 500, 98, 50);
    this.addPlayer('LUki', 672, 111, 73);
    this.addPlayer('Ferdi', 345, 60, 23);
    this.addPlayer('Marco', 201, 79, 40);
    this.addPlayer('Michelle', 168, 23, 3);
    this.addPlayer('Leo', 342, 43, 15);
    this.addPlayer('Nick', 450, 8, 3);
    this.addPlayer('Heindl', 507, 12, 6);
    this.addPlayer('Fabi', 998, 123, 85);
  }

  public getAllPlayers(): Observable<Player[]> {
    // Returns all Players as a list
    return new Observable<Player[]>(subscriber => {
      subscriber.next(this.playerList);
    });
  }

  public getPlayer(id: number): Observable<Player> {
    // Returns a player by his id
    return new Observable<Player>( subscriber => {
      subscriber.next(this.playerList.find(_ => _.id === id));
    });
  }

  public updatePlayer(player: Player){
    // Updates a certain player
    const objIndex = this.playerList.findIndex(_ => _.id === player.id);
    this.playerList[objIndex] = player;
  }

  public addPlayer(playerName: string, elo: number, gameCount: number, wins: number): number{
    // Adds a player and returns the id
    const id = uuidv4();
    this.playerList.push(new Player(id, playerName, elo, gameCount, wins));
    return id;
  }

  public removePlayer(id: number){
    // Removes player by id
    const objIndex = this.playerList.findIndex(_ => _.id === id);
    if (objIndex > -1){
      this.playerList.splice(objIndex, 1);
    }
  }
}
