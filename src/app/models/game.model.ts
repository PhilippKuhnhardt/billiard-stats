import {Team} from './team.model';

export class Game {
  /**
   * A Game Object is a simple representation of an individual game played
   * A game is always finished
   * It knows both teams and the result
   */

  public winningTeam: Team;
  public losingTeam: Team;

  constructor(winningTeam: Team, losingTeam: Team) {
    this.winningTeam = winningTeam;
    this.losingTeam = losingTeam;
  }

}
