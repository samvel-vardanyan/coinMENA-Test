import { ActionType, IFilterPayload } from '../types';
import { Dispatch } from "redux";

interface SetFilter {
    type: ActionType.SETFILTERVALUE;
    payload: IFilterPayload;
}

interface ResetFilters {
    type: ActionType.RESETFILTERS
}

export const setFilter = (options: IFilterPayload) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.SETFILTERVALUE,
            payload: options,
        })
    }
}

export const resetFilters = () => {
    return (dispatch: Dispatch) => {
        dispatch({
            type: ActionType.RESETFILTERS
        })
    }
}

export type Action = SetFilter | ResetFilters;

