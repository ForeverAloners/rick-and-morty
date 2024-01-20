import React from 'react';
import {CharacterCard} from "../../components/character/character-card/character-card";
import {useAppSelector} from "../../redux/store/store";


const CharactersListPage = () => {
    const characters= useAppSelector(state=> state.characters)
    return (
        <div>
            {
                characters.map((el)=>{return <CharacterCard character={el}/> })
            }

        </div>
    );
};

export default CharactersListPage;