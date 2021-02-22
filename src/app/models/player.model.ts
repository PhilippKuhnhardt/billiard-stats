export class Player {
  public playerName: string;
  public elo: number;
  public gameCount: number;
  public wins: number;

  constructor()
  constructor(playerName: string, elo: number, gameCount: number, wins: number)
  constructor(playerName?: string, elo?: number, gameCount?: number, wins?: number){
    this.playerName = playerName;
    this.elo = elo;
    this.gameCount = gameCount;
    this.wins = wins;
  }

}
