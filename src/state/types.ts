export interface IRepositoryItem {
    rank: number;
    username: string;
    repositoryName: string;
    url: string;
    description: string;
    language: string;
    languageColor: string;
    totalStars: number;
    forks: number;
    starsSince: number;
    since: string;
    builtBy: Author[];
}

export interface Author {
    username: string;
    url: string;
    avatar: string;
}

export  interface IDeveloperItem {
    avatar: string;
    name: string;
    popularRepository: IDeveloperPopularRepository;
    rank: number;
    since: string;
    url: string;
    username: string;
}


export interface IDeveloperPopularRepository {
    repositoryName: string;
    description?: string;
    url: string;
}
export enum ActionType {
    SETFILTERVALUE = "setFilterValue",
    RESETFILTERS = "resetFilters"
}

export interface IFilterOption {
    name: string;
    code: string;
}

export interface IFilterPayload {
    filterKey: string;
    filterValue: IFilterOption;
}