import React from 'react';
import './App.css';
import CharactersListPage from "./pages/characters-list.page/characters-list.page";
import {useAppDispatch} from "./redux/store/store";
import {addSnakeAC, getStateAC} from "./redux/reducers/characters-reducer/characters-reducer";
import {snake} from "./local-data/character";
import axios from "axios";


function App() {
    const dispatch = useAppDispatch()
    const addSnake = () => {
        dispatch(addSnakeAC(snake))
    }
    const getState = () => {
        const statePromise = axios.get("https://rickandmortyapi.com/api/character")
        statePromise
            .then((res) => {
                dispatch(getStateAC(res.data.results))
            })
            .catch((error) => {
                console.error(error)
            })
        //dispatch(getStateAC())
    }
    return (
        <div>
            <button onClick={addSnake}>Add Snake</button>
            <button onClick={getState}>Get STATE</button>
            <CharactersListPage/>

        </div>
    );
}

export default App;
