import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonByStrongComponent } from './pokemon-by-strong.component';

describe('PokemonByStrongComponent', () => {
  let component: PokemonByStrongComponent;
  let fixture: ComponentFixture<PokemonByStrongComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonByStrongComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokemonByStrongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
