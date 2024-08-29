import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupPokemoncontentComponent } from './popup-pokemoncontent.component';

describe('PopupPokemoncontentComponent', () => {
  let component: PopupPokemoncontentComponent;
  let fixture: ComponentFixture<PopupPokemoncontentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopupPokemoncontentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PopupPokemoncontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
