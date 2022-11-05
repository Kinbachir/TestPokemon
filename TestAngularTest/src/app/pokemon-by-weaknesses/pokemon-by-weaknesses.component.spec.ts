import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonByWeaknessesComponent } from './pokemon-by-weaknesses.component';

describe('PokemonByWeaknessesComponent', () => {
  let component: PokemonByWeaknessesComponent;
  let fixture: ComponentFixture<PokemonByWeaknessesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonByWeaknessesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokemonByWeaknessesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
