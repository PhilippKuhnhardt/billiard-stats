import { Injectable } from '@angular/core';
import {Team} from "../models/team.model";
import {Match} from "../models/match.model";

@Injectable({
  providedIn: 'root'
})
export class MatchService {

  /**
   * Service responsible for playing matches
   * 1 matchService = 1 Match, since one session can only play one match at the same time
   *
   * public functions:
   *  - constructor(teamOne, teamTwo, gameLength)
   *  - getTeam(Match.TEAM.ONE/TWO)
   *  - getWinsForTeam(Match.TEAM.ONE/TWO)
   *  - getCurrentState
   *  - getWinner
   *  - getGameLength
   *  - finishGame(winningTeam)
   *  - switchGameResult(newWinningTeam)
   *
   * private vars:
   *  - Match
   */

  private match: Match;

  constructor(teamOne: Team, teamTwo: Team, gameLength: number) {
    this.match = new Match(teamOne, teamTwo, gameLength);
  }

  public getTeam(team: number): Team{
    return this.match.teams[team];
  }
  public getWinsForTeam(team: number): number{
    return this.match.winsForTeam[team];
  }
  public getCurrentState(): number{
    return this.match.currentState;
  }
  public getWinner(): Team{
    return this.match.winner;
  }
  public getGameLength(): number{
    return this.match.gameLength;
  }
  public finishGame(winningTeam: Team){
    this.match.finishGame(winningTeam);
  }
  public switchGameResults(newWinningTeam: Team){
    this.match.switchGameResult(newWinningTeam);
  }

}
