import './App.css';
import { useState } from 'react';
import { useCharacters } from './Info';

function CharCard({char}) {
    const [isLoaded, setIsLoaded] = useState(false);

    return (
        <li className='character-card'>
            <div className='img-container'>
                {!isLoaded && <span>Loading...</span>}
                <img 
                    src={char.image} 
                    alt={`${char.name} chararcter`} 
                    loading="lazy"
                    onError={(e) => {
                        setTimeout(() => {
                            e.target.src = char.image;
                        }, 2000);
                    }}
                    onLoad={() => setIsLoaded(true)}
                /> 
            </div>
            Name: {char.name} <br />
            Species: {char.species} <br />
            Status: {char.status} <br />
        </li>
    );
}

export default function Characters() {
    const { characters = [] } = useCharacters();
    const validChars = characters.slice(0, 100);

    return (
        <div>
        <h1>First 100 Rick and Morty Characters</h1>
        <ul className='character-list'>
            {validChars.map((char) => (
                <CharCard key={char.id} char={char} />
            ))}
        </ul>
        </div>
    );

}