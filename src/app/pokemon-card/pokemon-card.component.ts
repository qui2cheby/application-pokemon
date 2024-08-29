import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Pokemon} from '../model/pokemon';

@Component({
  selector: 'pokemon-card',
  standalone: true,
  imports: [],
  templateUrl: './pokemon-card.component.html',
  styleUrl: './pokemon-card.component.css'
})
export class PokemonCardComponent {

  @Input()
  pokemon:Pokemon;
  @Output('pokemonSelected') pokemonSelected = new EventEmitter<Pokemon>();

  onPokemonViewed() {
    console.log('inside detail')

    this.pokemonSelected.emit(this.pokemon)


  }
}
