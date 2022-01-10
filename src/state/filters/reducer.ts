import {ActionType, IFilterOption} from '../types';
import {Action} from './actions';

export interface IFiltersState {
    spoken_language: IFilterOption;
    language: IFilterOption;
    since: IFilterOption;
}
const initialState = {
    spoken_language: {} as IFilterOption,
    language: {} as IFilterOption,
    since: {} as IFilterOption,
}

const reducer = (state: IFiltersState = initialState, action: Action) => {
    switch (action.type) {
        case ActionType.RESETFILTERS:
            return initialState;
        case ActionType.SETFILTERVALUE:
            const { filterKey, filterValue } = action.payload;
            return {...state, [filterKey]: filterValue};
        default:
            return state;
    }
}

export default reducer;