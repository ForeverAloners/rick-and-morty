import {characters, CharacterType} from "../../../local-data/character";
import exp from "node:constants";
import {Dispatch} from "@reduxjs/toolkit";
import axios from "axios";


const initialState = characters


export const charactersReducer = (state: CharacterType[] = initialState, action: ActionType): CharacterType[] => {
    switch (action.type) {
        case("snake"):
            return [...state, action.payload.snake]
        case("GET_STATE"):
            return action.payload.state
        default:
            return state
    }
}

type ActionType = AddSnakeActionType | getStateActionType


type AddSnakeActionType = ReturnType<typeof addSnakeAC>
export const addSnakeAC = (snake: CharacterType) => {
    return {
        type: "snake",
        payload: {
            snake: snake
        }
    } as const
}
type getStateActionType = ReturnType<typeof getStateAC>
export const getStateAC = (state: CharacterType[]) => {
    return {
        type: "GET_STATE",
        payload: {
            state: state
        }
    } as const
}
export const getStateTC = ()=>(dispatch:Dispatch)=>{
    const statePromise = axios.get("https://rickandmortyapi.com/api/character")
    statePromise
        .then((res) => {
            dispatch(getStateAC(res.data.results))
        })
        .catch((error) => {
            console.error(error)
        })
}