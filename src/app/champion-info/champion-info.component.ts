import { Component, OnInit } from '@angular/core';
import { ChampionService } from '../services/champion.service';
import { ColDef } from 'ag-grid-community';

@Component({
  selector: 'app-champion-info',
  templateUrl: './champion-info.component.html',
  styleUrls: ['./champion-info.component.css']
})
export class ChampionInfoComponent implements OnInit {
  rowData: any;
  colDefs: ColDef[] = [
    { headerName: 'ID', field: 'id' },
    { headerName: 'Key', field: 'key' },
    { headerName: 'Title', field: 'title' },
    { headerName: 'Name', field: 'name' },
   

  ];

  constructor(private services: ChampionService) {}

  ngOnInit(): void {
    this.services.getData().subscribe(dataCat => {
      this.rowData = Object.values(dataCat.data);
    });
  }
}
