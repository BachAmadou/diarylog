import axios from "axios";
import React, { useEffect } from "react";

export default function Game() {

    const [pokemon, setPokemon] = React.useState([]);

    // useEffect(() => {
    //     fetch("https://pokeapi.co/api/v2/pokemon/")
    //     .then(reponse =>  reponse.json())
    //     .then((data) => {
    //         console.log(data);
    //         setPokemon(data);
    //     })
    // }, []);

    useEffect(() => {
        axios.get("https://pokeapi.co/api/v2/pokemon/")
        .then(response => {
            console.log(response.data.results);
            setPokemon(response.data.results);
        }).catch(error => {
            console.log(error);
        })
    })

    return(
        <div className="game">
            <h2 className="game-title">Check your favorite Pokemon</h2>
            <ul className="poke-items">
                {pokemon.map((poke) => {
                    return (
                        <>
                            <div key={poke.id} className="items">
                                <p>{poke.name}</p>
                                <p>{poke.url}</p>
                                {/* <img src={poke.sprites.front_default} alt="" /> */}
                            </div>
                        </>
                    )
                })}
            </ul>
        </div>
    )
}