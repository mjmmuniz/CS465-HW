import { useCharacters } from './Info';

export default function Locations() {
    const { characters = [] } = useCharacters();
    const locationGroups = characters.reduce((acc, char) => {
        const locations = char.location.name;

        if (!acc[locations]) {
            acc[locations] = {
                count: 0
            };
        }

        acc[locations].count += 1;
        return acc;
    }, {});

    return (
        <div>
        <h1>Rick and Morty Locations</h1>
        <ul>
            {Object.entries(locationGroups).map(([locations, data]) => (
                <li key={locations}>
                    <h2>{locations} ({data.count})</h2>
                </li>
            ))}
        </ul>
        </div>
    );

}