import {
  SET_FILTER,
  GET_CLIENTS_REQUEST,
  GET_CLIENTS_SUCCESS
} from '../actions/clientListAction'

const initialState = {
  filterValue: '',
  itemList: [],
  isFetching: false,
};

export function clientListReducer(state = initialState, action) {

  switch (action.type) {
    case SET_FILTER:
      return { ...state, filterValue: action.payload };

    case GET_CLIENTS_REQUEST:
      return { ...state, isFetching: true };

    case GET_CLIENTS_SUCCESS:
      return { ...state, itemList: action.payload, filteredList: action.payload, isFetching: false };

    default:
      return state;
  }
}