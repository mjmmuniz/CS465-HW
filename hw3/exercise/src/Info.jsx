import { useState, useEffect, createContext, useContext } from 'react';
import axios from 'axios';

const RickMortyContext = createContext();

export function CharProvider({children}) {
    const [characters, setChars] = useState([]);
    useEffect(() => {
        async function fetchChars() {
            try{
                const pageRequests = [1, 2, 3, 4, 5].map((page) =>
                    axios.get(`https://rickandmortyapi.com/api/character?page=${page}`));
                const responses = await Promise.all(pageRequests);
                const allChars = responses.flatMap((res) => res.data.results);

                setChars(allChars); 
            } catch (err) {
                console.error("Error fetching characters: ", err);
            }
        }
        fetchChars();
    }, []);
    return (<RickMortyContext.Provider value={{characters}}>{children}</RickMortyContext.Provider>);
}

export function useCharacters() {
    return useContext(RickMortyContext);
}
