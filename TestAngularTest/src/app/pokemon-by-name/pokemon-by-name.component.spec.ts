import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonByNameComponent } from './pokemon-by-name.component';

describe('PokemonByNameComponent', () => {
  let component: PokemonByNameComponent;
  let fixture: ComponentFixture<PokemonByNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonByNameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokemonByNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
