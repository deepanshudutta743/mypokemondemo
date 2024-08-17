import React from 'react'

function Pocemoncard({ pokemondata }) {
    return (
        <li className='pokemon-card'>
            <figure>
                <img src={pokemondata.sprites.other.dream_world.front_default} alt={pokemondata.name}
                    className='pokemon-image'
                />
            </figure>
            <h2>{pokemondata.name}</h2>
            <div className='pokemon-info pokemon-highlight'><p>
                {pokemondata.types.map((curtype) => curtype.type.name).join(", ")}
            </p>
            </div>


            <div className="grid-three-cols">
                <p className="pokemon-info">
                    <span> Height:</span> {pokemondata.height}
                </p>
                <p className="pokemon-info">
                    <span> Weight:</span> {pokemondata.weight}
                </p>
                <p className="pokemon-info">
                    <span> speed:</span> {pokemondata.stats[5].base_stat}
                </p>
            </div>

            <div className="grid-three-cols">
                <div className="pokemon-info">
                    <p>{pokemondata.base_experience}</p>
                    <span> Experience:</span>
                </div>
                <div className="pokemon-info">
                    <p>{pokemondata.stats[1].base_stat}</p>
                    <span>Attack:</span>
                </div>
                <div className="pokemon-info">
                    <p>
                        {pokemondata.abilities
                            .map((abilityInfo) => abilityInfo.ability.name)
                            .slice(0, 1)
                            .join(", ")}
                    </p>
                    <span> Abilities: </span>
                </div>
            </div>

        </li>
    )
}
//sprites.other.dream_world.front_default
export default Pocemoncard