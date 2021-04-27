import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Player} from '../../models/player.model';
import {PlayerService} from '../../services/player.service';
import {noDuplicatePlayerValidator} from '../../validators/no-duplicate-player.directive';
import {MatchService} from "../../services/match.service";
import {Team} from "../../models/team.model";
import {Match} from "../../models/match.model";

@Component({
  selector: 'app-match-setup',
  templateUrl: './match-setup.component.html',
  styleUrls: ['./match-setup.component.css']
})
export class MatchSetupComponent implements OnInit {

  @Output() gameSetupFinished = new EventEmitter<boolean>();

  public GAME_LENGTH = Match.GAME_LENGTH

  public players: Player[];
  public gameSetupForm: FormGroup;

  constructor(private playerService: PlayerService,
              private matchService: MatchService) { }


  ngOnInit(): void {
    this.playerService.getAllPlayers().subscribe((playerList: Player[]) => {
      this.players = playerList;
    });

    this.gameSetupForm = new FormGroup({
      teamOne: new FormControl('', [Validators.required]),
      teamTwo: new FormControl('', [Validators.required, noDuplicatePlayerValidator()]),
      gameLength: new FormControl('', Validators.required)
    });
  }

  onSubmit(): void {
    let playersTeamOne = this.gameSetupForm.value.teamOne.map(playerId => this.players.find(player => player.id === playerId))
    let playersTeamTwo = this.gameSetupForm.value.teamTwo.map(playerId => this.players.find(player => player.id === playerId))
    let gameLength = this.gameSetupForm.value.gameLength;
    this.matchService.createMatch(new Team(playersTeamOne), new Team(playersTeamTwo), gameLength);
    this.gameSetupFinished.emit(true);
  }

}
