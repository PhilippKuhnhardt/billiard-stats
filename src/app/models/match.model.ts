import {Team} from './team.model';
import {Game} from './game.model';

export class Match {
  /**
   * A match is a representation of a match being played.
   * A match consists of several games
   * It contains all necessary information and methods to setup, play and conclude the match
   * After a match is over the match object stays alive and is able to give all necessary information of what happened
   */

  public static STATE = {
    ONGOING : 1,
    FINISHED: 2,
  };

  public static GAME_LENGTH = {
    BO1: 0,
    BO3: 1,
    BO5: 2,
    BO7: 3,
  };

  public teamOne: Team;
  public teamTwo: Team;
  public winsTeamOne = 0;
  public winsTeamTwo = 0;
  public currentState: number;
  public winner: Team;
  public gameLength: number;
  public games: Game[];

  private winsNeeded = 0;

  constructor(teamOne: Team, teamTwo: Team, gameLength: number) {
    this.teamOne = teamOne;
    this.teamTwo = teamTwo;
    this.gameLength = gameLength;

    this.currentState = Match.STATE.ONGOING;
    this.games = [];

    switch(this.gameLength){
      case Match.GAME_LENGTH.BO7: this.winsNeeded++;
      case Match.GAME_LENGTH.BO5: this.winsNeeded++;
      case Match.GAME_LENGTH.BO3: this.winsNeeded++;
      case Match.GAME_LENGTH.BO1: this.winsNeeded++;
    }
  }

  public finishGame(winningTeam: Team){
    /**
     * Checks is state allows for another game to be finished
     * Adds the game win to the Game List and the Wincount
     * Then it updates the state and all appropriate vars
     */
    if (this.currentState === Match.STATE.FINISHED) { return; }
    this.addGameWin(winningTeam);

    if(this.checkIfGameHasFinished()){
      this.finishUpMatch();
    }

  }

  private getOppositeTeam(team: Team): Team{
    if (team.equals(this.teamOne)) { return this.teamTwo; }
    return this.teamOne;
  }

  private addGameWin(winningTeam: Team){
    this.games.push(new Game(winningTeam, this.getOppositeTeam(winningTeam)));
    if (winningTeam.equals(this.teamOne)){
      this.winsTeamOne++;
    } else {
      this.winsTeamTwo++;
    }
  }

  private checkIfGameHasFinished(): boolean {
    if(this.winsTeamOne === this.winsNeeded) { return true; }
    if(this.winsTeamTwo === this.winsNeeded) { return true; }
    return false;
  }

  private finishUpMatch(){
    this.currentState = Match.STATE.FINISHED;

    if(this.winsTeamOne === this.winsNeeded) { this.winner = this.teamOne; }
    else { this.winner = this.teamTwo; }
  }

}
