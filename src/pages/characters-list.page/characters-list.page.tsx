import React, {useState} from 'react';
import {characters as charactersData, CharacterType} from "../../local-data/character";
import {CharacterCard} from "../../components/character/character-card/character-card";

const CharactersListPage = () => {
    const [characters, setCharacters] = useState<Array<CharacterType>>(charactersData)
    return (
        <div>
            {
                characters.map((el)=>{return <CharacterCard character={el}/> })
            }

        </div>
    );
};

export default CharactersListPage;