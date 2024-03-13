import { Component } from '@angular/core';
import { PokemonCardComponent } from '../pokemon-card/pokemon-card.component';
import { NgForOf } from '@angular/common';
import { PokemonService } from '../services/pokemon.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pokemon-list',
  standalone: true,
  imports: [
    PokemonCardComponent,
    FormsModule,
    NgForOf,
  ],
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.css'
})
export class PokemonListComponent {
  pokemons: any;
  nome: any;

  constructor(
    public service: PokemonService,
  ) {}

  ngOnInit(): void {
    this.service.carregarPokemons().subscribe((res: any) =>{
      this.pokemons = res.results;
    });
  }
}
