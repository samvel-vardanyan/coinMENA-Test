import { Selector } from 'reselect';
import { IFiltersState } from './reducer';

type TState = {
    filters: IFiltersState;
}

export const FiltersSelector: Selector<TState, IFiltersState> = (state) => state.filters;