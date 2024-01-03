import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Champion } from '../class/champion';

@Injectable({
  providedIn: 'root'
})
export class ChampionService {
  champions: Champion;
  private jsonUrl = 'assets/champion_info.json';
  private jsonUrl2 = 'assets/champion_info_2.json';
  private spell = 'assets/summoner_spell_info.json';

  constructor(private http: HttpClient) {}

  getData(): Observable<any> {
    return this.http.get<any>(this.jsonUrl);
  }
  getDatacAT(): Observable<any> {
    return this.http.get<any>(this.jsonUrl2);
  }

  getSpell(): Observable<any> {
    return this.http.get<any>(this.spell);
  }


 
}
