export interface People {
    count: number;
    next: string;
    results: Person[];
}

export interface Person {
    name: string;
    homeworld: string;
    films: string[];
}

//https://swapi.dev/api/people/