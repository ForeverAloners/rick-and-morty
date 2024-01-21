import {characters, CharacterType} from "../../../local-data/character";

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