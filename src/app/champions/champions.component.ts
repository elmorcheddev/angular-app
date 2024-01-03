import { Component, OnInit } from '@angular/core';
import { ChampionService } from '../services/champion.service';
import { Champion } from '../class/champion';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { FormControl } from '@angular/forms';
import { ChampionDetailComponent } from '../champion-detail/champion-detail.component';

@Component({
  selector: 'app-champions',
  templateUrl: './champions.component.html',
  styleUrls: ['./champions.component.css']
})
export class ChampionsComponent implements OnInit{

 color="red";
   champions: Champion;
   rechercher: "";
  filteredChampions: Champion ;
  spells: Champion;
   



   constructor(private services: ChampionService, private router: Router, private dialog: MatDialog) {}
    
  ngOnInit(): void {
    
    this.services.getDatacAT().subscribe(dataCat => {
      this.champions = dataCat.data;
      this.filteredChampions = this.champions; 
      });
    
   }
   openChampionDetails(championData: any): void {
    const champion: Champion = championData as Champion;
    const dialogRef = this.dialog.open(ChampionDetailComponent, {
      data: champion,
      width:"1000px",
      height:"100%"
     });

    
  }  
   getUniqueTags(champions: Champion): string[] {
    const tagsSet = new Set<string>();
    Object.values(champions).forEach(champion => {
      champion.tags.forEach(tag => tagsSet.add(tag));
    });
    return Array.from(tagsSet);
  }
  filterChampions(): void {
    if (this.rechercher.trim() === '') {
      this.filteredChampions = this.champions;
    } else {
      this.filteredChampions = {};
      Object.keys(this.champions).forEach(key => {
        const champion = this.champions[key];
        if (champion.name.toLowerCase().includes(this.rechercher.toLowerCase())) {
          this.filteredChampions[key] = champion;
        }
      });
    }
  }
  
  
  
  
}
