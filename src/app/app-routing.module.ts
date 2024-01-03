import { NgModule, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChampionsComponent } from './champions/champions.component';
import { ChampionDetailComponent } from './champion-detail/champion-detail.component';
import { ChampionInfoComponent } from './champion-info/champion-info.component';
 
const routes: Routes = [
  { path: 'champions', component: ChampionsComponent },
  { path: 'champion/:id', component: ChampionDetailComponent },
  { path: '', redirectTo: '/champions', pathMatch: 'full' },
  {path:"info", component:ChampionInfoComponent}
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
}
