import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChampionInfoComponent } from './champion-info.component';

describe('ChampionInfoComponent', () => {
  let component: ChampionInfoComponent;
  let fixture: ComponentFixture<ChampionInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChampionInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChampionInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
