import React from 'react';
import './App.css';
import CharactersListPage from "./pages/characters-list.page/characters-list.page";
import {useAppDispatch} from "./redux/store/store";
import {addSnakeAC, getStateTC} from "./redux/reducers/characters-reducer/characters-reducer";
import {snake} from "./local-data/character";


function App() {
    const dispatch = useAppDispatch()
    const addSnake = () => {
        dispatch(addSnakeAC(snake))
    }
    const getState = () => {
        dispatch(getStateTC())
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
