import { TestBed } from '@angular/core/testing';

import { PlayerService } from './player.service';
import {Player} from '../models/player.model';

describe('PlayerService', () => {
  let service: PlayerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlayerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getAllPlayers() should return Player[]', done => {
    service.getAllPlayers().subscribe((playerList: Player[]) => {
      expect(playerList).toBeInstanceOf(Array);
      expect(playerList[0]).toBeInstanceOf(Player);
      done();
    });
  });
});
