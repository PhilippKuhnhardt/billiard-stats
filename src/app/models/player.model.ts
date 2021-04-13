export class Player {
  public id: number;
  public name: string;
  public elo: number;
  public gameCount: number;
  public wins: number;

  constructor(id: number, playerName: string, elo: number, gameCount: number, wins: number){
    this.id = id;
    this.name = playerName;
    this.elo = elo;
    this.gameCount = gameCount;
    this.wins = wins;
  }

}
