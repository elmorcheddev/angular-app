import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from'@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChampionsComponent } from './champions/champions.component';
import {MatTabsModule} from '@angular/material/tabs';
import { ChampionService } from './services/champion.service';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
 import {MatDialogModule} from '@angular/material/dialog';
 import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';

  import { ChampionDetailComponent } from './champion-detail/champion-detail.component';
import { HeaderComponent } from './header/header.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { ChampionInfoComponent } from './champion-info/champion-info.component';
import { AgGridAngular, AgGridModule } from 'ag-grid-angular';
import {MatButtonToggleModule} from '@angular/material/button-toggle';

@NgModule({
  declarations: [
    AppComponent,
    ChampionsComponent,
    ChampionDetailComponent,
    HeaderComponent,
    ChampionInfoComponent,
   ],
  imports: [
    BrowserModule, FormsModule,
    AppRoutingModule,ReactiveFormsModule,
    BrowserAnimationsModule,
    MatTabsModule,HttpClientModule,MatIconModule,
    MatCardModule,MatButtonModule,MatDialogModule ,MatToolbarModule,
    MatSelectModule, MatFormFieldModule ,MatButtonToggleModule,
    AgGridModule 
  ],
  providers: [ChampionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
