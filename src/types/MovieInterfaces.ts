export interface IMovieInterfaces {
    id: number
    poster_path: string
    title: string
    release_date: string
}
export interface IMovieDetail {
    poster_path: string
    title: string
    vote_average: undefined | number
    release_date: string
    overview: string
    backdrop_path: string
}
export interface IDetailActors {
    profile_path: string
    id: number
    name: string
}
export interface IMovieActors {
    profile_path: string
    name: string
    biography: string
    place_of_birth: string
}