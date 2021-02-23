import {Component, OnInit, ViewChild} from '@angular/core';
import {Player} from '../models/player.model';
import {PlayerService} from '../services/player.service';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  displayedColumns = [
    'playerName',
    'elo',
    'gameCount'
  ];

  dataSource = new MatTableDataSource<Player>();

  constructor(private playerService: PlayerService) { }

  @ViewChild(MatSort, {static: true}) sort: MatSort;

  ngOnInit(): void {
    this.playerService.getAllPlayers().subscribe((playerList: Player[]) => {
      this.dataSource.data = playerList;
      this.dataSource.sort = this.sort;

    });
  }

}
