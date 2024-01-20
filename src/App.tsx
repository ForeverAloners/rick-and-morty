import React from 'react';
import logo from './logo.svg';
import './App.css';
import CharactersListPage from "./pages/characters-list.page/characters-list.page";
import {useAppDispatch} from "./redux/store/store";
import {addSnakeAC} from "./redux/reducers/characters-reducer/characters-reducer";
import {snake} from "./local-data/character";




function App() {
    const dispatch = useAppDispatch()
    const addSnake = () => {
        dispatch(addSnakeAC(snake))
    }
    return (
        <div>
            <button onClick={addSnake}>Add Snake</button>
            <CharactersListPage/>

        </div>
    );
}

export default App;
