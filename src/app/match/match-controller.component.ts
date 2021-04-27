import { Component, OnInit } from '@angular/core';
import {MatchService} from "../services/match.service";
import {Match} from "../models/match.model";

@Component({
  selector: 'app-match-controller',
  templateUrl: './match-controller.component.html',
  styleUrls: ['./match-controller.component.css'],
  providers: [MatchService]
})
export class MatchControllerComponent implements OnInit {

  public gameSetupFinished = false;

  constructor(private matchService: MatchService) { }

  ngOnInit(): void {
  }

  onGameSetupFinished(value: boolean){
    this.gameSetupFinished = value;
  }

}
