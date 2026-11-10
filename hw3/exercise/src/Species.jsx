import { useCharacters } from './Info';

export default function Species() {
    const { characters = [] } = useCharacters();
    const speciesGroups = characters.reduce((acc, char) => {
        const species = char.species;

        if (!acc[species]) {
            acc[species] = {
                count: 0,
                names: []
            };
        }

        acc[species].count += 1;
        acc[species].names.push(char.name);

        return acc;
    }, {});

    return (
        <div>
        <h1>Rick and Morty Species</h1>
        <div>
            {Object.entries(speciesGroups).map(([species, data]) => (
                <div key={species}>
                    <h2>{species} ({data.count})</h2>
                    <ol>
                        {data.names.map((name, index) => (
                            <li key={index}>{name}</li>
                        ))}
                    </ol>
                </div>
            ))}
        </div>
        </div>
    );

}
