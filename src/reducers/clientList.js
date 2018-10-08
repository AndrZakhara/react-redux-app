import {
  SET_FILTER,
  SET_DEFAULT_FILTERED_STORE,
  GET_CLIENTS_REQUEST,
  GET_CLIENTS_SUCCESS
} from '../actions/clientListAction'

const initialState = {
  itemList: [],
  filteredList: [],
  isFetching: false,
};

export function clientListReducer(state = initialState, action) {

  switch (action.type) {
    case SET_FILTER:
      return { ...state, filteredList: action.payload };

    case SET_DEFAULT_FILTERED_STORE:
      return { ...state, filteredList: state.itemList };

    case GET_CLIENTS_REQUEST:
      return { ...state, isFetching: true };

    case GET_CLIENTS_SUCCESS:
      return { ...state, itemList: action.payload, filteredList: action.payload, isFetching: false };

    default:
      return state;
  }
}