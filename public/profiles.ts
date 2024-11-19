export type character = { name: string; img: number }

type Profile = {
    name: string
    imgFiles: character[]
}

import valorant from './profiles/valorant/imgFiles'
import overwatch from './profiles/overwatch/imgFiles'

export default [
    {
        name: 'Valorant',
        imgFiles: valorant,
    },
    {
        name: 'Overwatch',
        imgFiles: overwatch,
    },
] satisfies Profile[]
