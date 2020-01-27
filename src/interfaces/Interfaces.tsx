export interface IFilm {
	url: string;
    title: string;
    episode_id: number;
    opening_crawl: string;
    director: string;
    producer: string ;
    release_date: string;
    species: string[];
    starships: string[];
    vehicles: string[];
    characters: string[];
    planets: string[];
}

export interface IFavourite {
    name: string;
    selections: string[];
}

export interface IUser {
    firstname: string;
    lastname: string;
    city: string;
    country: string;
}

export interface INavLink {
    count: number;
    name: string;
    navUrl: string;
}

export interface IListResults<T> {
    results: T[];
}

export interface IPeople {
    name: string;
    birth_year: string;
    eye_color: string;
    gender: string;
    hair_color: string;
    height: string;
    mass: string;
    skin_color: string;
    homeworld: string;
    films: string[];
    species: string[];
    starships: string[];
    vehicles: string[];
}

export interface IPlanet {
    name: string;
    diameter: string;
    rotation_period: string;
    orbital_period: string;
    gravity: string;
    population: string;
    climate: string;
    terrain: string;
    surface_water: string;
    residents: string[];
    films: string[];
}

export interface ISpecies {
    name: string;
    classification: string;
    designation: string;
    average_height: string;
    average_lifespan: string;
    eye_colors: string;
    hair_colors: string;
    skin_colors: string;
    language: string;
    homeworld: string;
    people: string[];
    films: string[];
}

///////// IVehicles /////////
export interface IMachine {
    name: string;
    model: string;
    manufacturer: string;
    cost_in_credits: string;
    length: string;
    crew: string;
    passengers: string;
    max_atmosphering_speed: string;
    cargo_capacity: string;
    consumables?: string;
    films: string[];
    pilots: string[];
}

export interface IStarship extends IMachine {
    starship_class: string;
    hyperdrive_rating: string;
    MGLT: string;
}

export interface IVehicle extends IMachine {
    vehicle_class: string;
}
