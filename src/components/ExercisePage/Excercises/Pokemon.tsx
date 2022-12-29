import { useEffect, useState } from "react";
import Spinner from 'react-bootstrap/Spinner';

interface Pokedex {
    results: pokemonList[]
}

interface pokemonList {
    name: string,
    url: string
}

interface PokeProps {
    limit?: number
}

const Pokemon = ({limit = 151}: PokeProps) => {
    const [pokemon, setPokemon] = useState<pokemonList[]>();
    const [limiter, setLimiter] = useState<number>(10);
    const [search, setSearch] = useState<string>("");

    useEffect(() => {
        const fetchFunction = async(limiter: number) => {
            let result = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limiter}`);
            let json : Pokedex = await result.json(); 

            setPokemon(json.results);
        }
        fetchFunction(limiter);
    },[limiter]);

    return (
        <div>
            <input value={search} onChange={(event) => setSearch(event.target.value.toLowerCase())}></input>
            <ul>
           {pokemon ? pokemon.filter((pokemon) => pokemon.name.toLowerCase().includes(search)).map((pokemon: pokemonList) => <li>{pokemon.name}</li>) : <Spinner animation="border" role="status"></Spinner>}
            </ul>
            <input type="number" defaultValue={10} value={limiter} onChange={(event) => setLimiter(event.target.valueAsNumber)}></input>
        </div>
    );
}

export default Pokemon;