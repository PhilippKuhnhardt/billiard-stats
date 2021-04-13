import {Player} from './player.model';

export class Team {
  /**
   * Represents an individual team, necessary for playing a game
   * Consists of several players
   */

  public playerList: Player[];

  constructor(playerList: Player[]) {
    this.playerList = playerList;
  }

  public equals(team: Team): boolean{
    if (this.playerList.length !== team.playerList.length) { return false; }
    for (let i = 0, len = this.playerList.length; i < len; i++){
      if (this.playerList[i] !== team.playerList[i]){
        return false;
      }
    }
    return true;
  }
}
