
import { IRepositoryItem, IDeveloperItem } from '../state/types';

interface Params {
    language?: string,
    since?: string,
    spoken_language_code?: string;
}


export const getDevelopers = (params: Params): Promise<IDeveloperItem[]> => {
    const { spoken_language_code, language, since } = params;
    const url = `/developers${language ? `/${language}` : ''}?since=${since ? since : 'daily'}${spoken_language_code ? `&spoken_language_code=${spoken_language_code}`: ''}`;
    return fetch(url)
        .then((response) => response.json());
}

export const getRepositories =  async (params: Params): Promise<IRepositoryItem[]> => {
    const { spoken_language_code, language, since } = params;
    const url = `/repositories${language ? `/${language}` : ''}?since=${since ? since : 'daily'}${spoken_language_code ? `&spoken_language_code=${spoken_language_code}`: ''}`;
    return fetch(url)
        .then((response) => response.json());
}