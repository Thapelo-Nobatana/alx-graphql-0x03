 interface InfoProps {
    pages: number
    next: number
    prev: number
    count: number
}

export interface EpisodeProps {
    id : number
    name: number
    air_date: string
    episode: string
    info: InfoProps
}

export type EpisodeCardProps = Pick<EpisodeProps, 'id' | 'name' | 'air_date' | "episode">