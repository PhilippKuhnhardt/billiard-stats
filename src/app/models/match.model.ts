import {Team} from './team.model';

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

  public static TEAM = {
    ONE: 0,
    TWO: 1
  };


  public teams: Team[];
  public winsForTeam = [0, 0];
  public currentState: number;
  public winner: Team;
  public gameLength: number;

  private winsNeeded = 0;

  constructor(teamOne: Team, teamTwo: Team, gameLength: number) {
    this.teams = [teamOne, teamOne];
    this.gameLength = gameLength;

    this.currentState = Match.STATE.ONGOING;

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
     * Adds game to Wincount
     * Then it updates the state and all appropriate vars
     */
    if (this.currentState === Match.STATE.FINISHED) { return; }
    this.addGameWin(winningTeam);
    this.afterGame();
  }

  public switchGameResult(newWinningTeam: Team) {
    /**
     * Checks if adding and subtracting the game is legal
     * Then Deletes game from one wincount and adds it to another
     * Then it updates the state and all appropriate vars
     */
    if (!this.isSwitchingGameResultLegal(newWinningTeam)){ return; }
    this.addGameWin(newWinningTeam);
    this.deleteGameWin(this.getOppositeTeam(newWinningTeam));
    if(this.currentState === Match.STATE.FINISHED && !this.checkIfGameHasFinished()){ this.restartMatch(); }
    this.afterGame();

  }

  private afterGame(){
    if(this.checkIfGameHasFinished()){
      this.finishUpMatch();
    }
  }


  private isSwitchingGameResultLegal(newWinningTeam: Team): boolean{
    if (newWinningTeam.equals(this.teams[Match.TEAM.ONE])){
      if (this.winsForTeam[Match.TEAM.ONE] === this.winsNeeded || this.winsForTeam[Match.TEAM.TWO] === 0) { return false; }
    } else {
      if (this.winsForTeam[Match.TEAM.ONE] === 0 || this.winsForTeam[Match.TEAM.TWO] === this.winsNeeded) { return false; }
    }
    return true;
  }

  private getOppositeTeam(team: Team): Team{
    if (team.equals(this.teams[Match.TEAM.ONE])) { return this.teams[Match.TEAM.TWO]; }
    return this.teams[Match.TEAM.ONE];
  }

  private addGameWin(winningTeam: Team){
    if (winningTeam.equals(this.teams[Match.TEAM.ONE])){
      this.winsForTeam[Match.TEAM.ONE]++;
    } else {
      this.winsForTeam[Match.TEAM.TWO]++;
    }
  }

  private deleteGameWin(winningTeam: Team){
    if (winningTeam.equals(this.teams[Match.TEAM.ONE])){
      this.winsForTeam[Match.TEAM.ONE]--;
    } else {
      this.winsForTeam[Match.TEAM.TWO]--;
    }
  }

  private checkIfGameHasFinished(): boolean {
    if(this.winsForTeam[Match.TEAM.ONE] === this.winsNeeded) { return true; }
    if(this.winsForTeam[Match.TEAM.TWO] === this.winsNeeded) { return true; }
    return false;
  }

  private finishUpMatch(){
    this.currentState = Match.STATE.FINISHED;

    if(this.winsForTeam[Match.TEAM.ONE] === this.winsNeeded) { this.winner = this.teams[Match.TEAM.ONE]; }
    else { this.winner = this.teams[Match.TEAM.TWO]; }
  }

  private restartMatch(){
    this.currentState = Match.STATE.ONGOING;
    this.winner = null;
  }


}
