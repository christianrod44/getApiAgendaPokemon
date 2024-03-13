import { SlicePipe } from '@angular/common';
import { Component, Input, input } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-pokemon-card',
  standalone: true,
  imports: [
    SlicePipe
  ],
  templateUrl: './pokemon-card.component.html',
  styleUrl: './pokemon-card.component.css'
})
export class PokemonCardComponent {
  @Input()
  nomePokemon!: string;

  @Input()
  numero!: number;

  pegarImagemPokemon(){
    const numeroFormatado = this.numero < 100 ? ("000"+this.numero).slice(-3) : this.numero;

    return `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${numeroFormatado}.png`;
  }


}
