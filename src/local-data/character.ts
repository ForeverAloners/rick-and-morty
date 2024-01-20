import exp from "node:constants";

export type CharacterType = {
    id: number
    name: string
    status: CharacterStatusType
    species: string
    type: string
    gender: string
    origin: {
        name: string
        url: string
    }
    location: {
        name: string
        url: string
    }
    image: string
    url: string
    created: string
}
export type CharacterStatusType = "Alive" | "Dead" | "unknown"

export const characters: Array<CharacterType> = [
    {
        "id": 1,
        "name": "Rick Sanchez",
        "status": "Alive",
        "species": "Human",
        "type": "",
        "gender": "Male",
        "origin": {
            "name": "Earth (C-137)",
            "url": "https://rickandmortyapi.com/api/location/1"
        },
        "location": {
            "name": "Citadel of Ricks",
            "url": "https://rickandmortyapi.com/api/location/3"
        },
        "image": "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
        "url": "https://rickandmortyapi.com/api/character/1",
        "created": "2017-11-04T18:48:46.250Z"
    },
    {
        "id": 2,
        "name": "Morty Smith",
        "status": "Alive",
        "species": "Human",
        "type": "",
        "gender": "Male",
        "origin": {
            "name": "unknown",
            "url": ""
        },
        "location": {
            "name": "Citadel of Ricks",
            "url": "https://rickandmortyapi.com/api/location/3"
        },
        "image": "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
        "url": "https://rickandmortyapi.com/api/character/2",
        "created": "2017-11-04T18:50:21.651Z"
    },
    {
        "id": 3,
        "name": "Summer Smith",
        "status": "Alive",
        "species": "Human",
        "type": "",
        "gender": "Female",
        "origin": {
            "name": "Earth (Replacement Dimension)",
            "url": "https://rickandmortyapi.com/api/location/20"
        },
        "location": {
            "name": "Earth (Replacement Dimension)",
            "url": "https://rickandmortyapi.com/api/location/20"
        },
        "image": "https://rickandmortyapi.com/api/character/avatar/3.jpeg",
        "url": "https://rickandmortyapi.com/api/character/3",
        "created": "2017-11-04T19:09:56.428Z"
    }]
 export const snake:CharacterType= {
     "id": 583,
     "name": "80's snake",
     "status": "unknown",
     "species": "Animal",
     "type": "Snake",
     "gender": "Male",
     "origin": {
         "name": "Snake Planet",
         "url": "https://rickandmortyapi.com/api/location/78"
     },
     "location": {
         "name": "Snake Planet",
         "url": "https://rickandmortyapi.com/api/location/78"
     },
     "image": "https://rickandmortyapi.com/api/character/avatar/583.jpeg",
     "url": "https://rickandmortyapi.com/api/character/583",
     "created": "2020-05-07T12:29:30.948Z"
 }