import { combineReducers } from 'redux';
import FiltersReducer from './filters/reducer';

const reducers = combineReducers({
    filters: FiltersReducer,
})

export default reducers;