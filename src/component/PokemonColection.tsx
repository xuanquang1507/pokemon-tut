import React from 'react'
import { Pokemon } from '../interface'
import PokemonLish from './PokemonLish';
import './pokemon.css'

interface Props {
    pokemons: Pokemon[];
}

const PokemonColection: React.FC<Props> = (props) => {
    const { pokemons } = props;
    return (
        <div>
            <section className="collection-container">
                {pokemons.map((pokemon) => {
                    return (
                        <PokemonLish
                            key={pokemon.id}
                            name={pokemon.name}
                            id={pokemon.id}
                            image={pokemon.sprites.front_default}
                        />
                    )
                })}
            </section>
        </div>
    )
}

export default PokemonColection