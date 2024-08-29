import {Component, OnInit} from '@angular/core';
import {COURSES} from '../db-data';
import {Pokemon} from './model/pokemon';
import {HttpClient} from '@angular/common/http';
import {PokemonService} from './service/pokemon.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {PopupPokemoncontentComponent} from './popup-pokemoncontent/popup-pokemoncontent.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titleList = "Lista de Pokemons";

  // pokemones = COURSES;
  pokemones: any[];
  constructor(private pokemonService: PokemonService,
              private modalServie: NgbModal) {
    this.get()
  }

  get() {
    this.pokemonService.getPokemones()
      .subscribe(
        (resp:any) => {
          console.log(resp)
          this.pokemones = resp.results;
          this.pokemones.forEach(item => {
              this.pokemonService.getImagePokemon(item.url).subscribe(
                (resp2:any) => {
                    console.log(resp2)
                    item.image = resp2.sprites.front_default;
                }
          )
          })
        },
        error => console.log(error)
      )

  }

  onPokemonSelected(pokemon:Pokemon) {
    console.log("appComponent - click event", pokemon)
    this.pokemonService.getPokemonByName(pokemon.name).subscribe(
      (resp: any) => {
        console.log('resp', resp)
      }
    )
    const modalRef = this.modalServie.open(PopupPokemoncontentComponent)
  }

}
