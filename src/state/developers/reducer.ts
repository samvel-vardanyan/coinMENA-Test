// import { ActionType, IDeveloperItem } from '../types';
// import { Action } from './actions';
//
// interface DevelopersState {
//     data: IDeveloperItem[];
//     isLoading: Boolean;
// }
// const initialState = {
//     data: [],
//     isLoading: false,
// }
//
// const reducer = (state: DevelopersState = initialState, action: Action) => {
//     switch (action.type) {
//         case ActionType.SETDEVELOPERS:
//             return {...state, data: action.payload};
//         case ActionType.SETDEVELOPERSLOADING:
//             return {...state, isLoading: action.payload};
//         default:
//             return state;
//     }
// }
//
// export default reducer;