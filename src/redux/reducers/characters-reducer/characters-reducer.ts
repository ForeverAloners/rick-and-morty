import {characters, CharacterType} from "../../../local-data/character";

const initialState = characters



export const charactersReducer = (state: CharacterType[] = initialState, action: ActionType): CharacterType[] => {
    switch (action.type) {
        case("snake"):
            return [...state, action.payload.snake]
        default:
            return state
    }
}

type ActionType = AddSnakeActionType
type AddSnakeActionType = ReturnType<typeof addSnakeAC >
export const addSnakeAC = (snake: CharacterType) => {
    return {
        type: "snake",
        payload: {
            snake: snake
        }
    } as const
}
