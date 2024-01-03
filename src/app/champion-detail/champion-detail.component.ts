import { Component, Inject, OnInit } from '@angular/core';
import { ChampionService } from '../services/champion.service';
import { Champion } from '../class/champion';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-champion-detail',
  templateUrl: './champion-detail.component.html',
})
export class ChampionDetailComponent implements OnInit {
  spells: Champion;
  constructor(
    private services: ChampionService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<ChampionDetailComponent>
  ) {}

  ngOnInit(): void {
    
    this.services.getSpell().subscribe(spell => {
      this.spells = spell.data;
      console.log(spell.data)
       }); 
  }

}

