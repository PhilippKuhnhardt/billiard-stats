import {Player} from './player.model';


describe('Player', () => {
  it('should create an instance', () => {
    expect(new Player()).toBeTruthy();
  });

  it('should be able to be created with values', () => {
    const playerName = 'Kuni';
    const elo = 100;
    const gameCount = 10;
    const wins = 6;
    const player = new Player(playerName, elo, gameCount, wins);
    expect(player.playerName).toBe(playerName);
    expect(player.elo).toBe(elo);
    expect(player.gameCount).toBe(gameCount);
    expect(player.wins).toBe(wins);
  });

  it('should be able to have its values changed', () => {
    const playerName = 'Kuni';
    const elo = 100;
    const gameCount = 10;
    const wins = 6;
    const player = new Player(playerName, elo, gameCount, wins);

    const newPlayerName = 'Fabi';
    const newElo = 123;
    const newGameCount = 12;
    const newWins = 8;

    player.playerName = newPlayerName;
    player.elo = newElo;
    player.gameCount = newGameCount;
    player.wins = newWins;

    expect(player.playerName).toBe(newPlayerName);
    expect(player.elo).toBe(newElo);
    expect(player.gameCount).toBe(newGameCount);
    expect(player.wins).toBe(newWins);
  });
});
