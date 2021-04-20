import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Player} from '../../models/player.model';
import {PlayerService} from '../../services/player.service';
import {noDuplicatePlayerValidator} from '../../validators/no-duplicate-player.directive';

@Component({
  selector: 'app-match-setup',
  templateUrl: './match-setup.component.html',
  styleUrls: ['./match-setup.component.css']
})
export class MatchSetupComponent implements OnInit {

  public GAME_LENGTH = {
    BO1: 0,
    BO3: 1,
    BO5: 2,
    BO7: 3,
  };

  public players: Player[];
  public gameSetupForm: FormGroup;

  constructor(private playerService: PlayerService) { }


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
    console.log(this.gameSetupForm.value);
  }

}
