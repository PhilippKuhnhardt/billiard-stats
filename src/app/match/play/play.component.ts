import { Component, OnInit } from '@angular/core';
import {Team} from "../../models/team.model";
import {MatchService} from "../../services/match.service";
import {Match} from "../../models/match.model";
import {MatButtonToggleChange} from "@angular/material/button-toggle";

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css']
})
export class PlayComponent implements OnInit {
  public TEAM = Match.TEAM
  public STATE = Match.STATE

  public teams: Team[];
  public games;
  public wins: number[]
  public gameState = Match.STATE.ONGOING;

  constructor(private matchService: MatchService) { }

  ngOnInit(): void {
    this.teams = [this.matchService.getTeam(Match.TEAM.ONE), this.matchService.getTeam(Match.TEAM.TWO)];
    this.games = Array(this.matchService.getGameLength()).fill(1).map((x,i)=>i+1); // Fills this.games with values from 1 to gameLength
    this.wins = [0, 0]
  }

  gamePlayed(matButtonToggleChange: MatButtonToggleChange): void{
    let gameNumber = Number(matButtonToggleChange.source.name.split('-').slice(-1).pop())
    let winningTeamIndex = Number(matButtonToggleChange.value)
    let playedGames = this.matchService.getWinsForTeam(Match.TEAM.ONE) + this.matchService.getWinsForTeam(Match.TEAM.TWO)

    if(gameNumber === playedGames){
      this.matchService.finishGame(this.teams[winningTeamIndex])
    } else {
      this.matchService.switchGameResults(this.teams[winningTeamIndex])
    }
    this.afterGamePlayed()
  }

  private afterGamePlayed(): void {
    this.wins = [this.matchService.getWinsForTeam(Match.TEAM.ONE), this.matchService.getWinsForTeam(Match.TEAM.TWO)]
    this.gameState = this.matchService.getCurrentState()
  }

  public isGameDisabled(game: number): boolean {
    /**
     * Es gibt 2 Fälle:
     * Fall 1: Das Spiel läuft noch
     * In diesem Fall soll true returned werden für Spiele die nicht aktuell laufen oder vorbei sind
     *
     * Fall 2: Das Spiel läuft nicht mehr
     * In diesem Fall soll true returned werden für alle Spiele die nicht schon vorbei sind
     */

    let gamesPlayed = this.wins[Match.TEAM.ONE] + this.wins[Match.TEAM.TWO]
    let matchFinished = this.matchService.getCurrentState() === Match.STATE.FINISHED

    let gameAlreadyPlayed = game <= gamesPlayed
    let gameCurrentlyPlayed = game === gamesPlayed + 1

    let showGame = matchFinished ? gameAlreadyPlayed : (gameAlreadyPlayed || gameCurrentlyPlayed)

    return !showGame
  }
}
