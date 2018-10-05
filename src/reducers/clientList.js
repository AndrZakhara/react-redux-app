import {
  SET_FILTER,
  SET_DEFAULT_FILTERED_STORE,
  GET_CLIENTS_REQUEST,
  GET_CLIENTS_SUCCESS
} from '../actions/clientListAction'

const initialState = {
  filter: '',
  itemList: [],
  filteredList: [],
  isFetching: false,
};

function filterUserList(arr, value) {
  function sortObject(obj) {
    let boolean = false;

    function sort(obj) {
      for (let key in obj) {
        if (typeof (obj[key]) === 'object') {
          sort(obj[key]);
        } else {

          if ((obj[key]).toLowerCase().indexOf(value.toLowerCase()) !== -1) {
            boolean = true;
          }
        }
      }
      return boolean;
    }
    sort(obj);
    return boolean;
  }
  return arr.filter(obj => sortObject(obj));
}

export function clientListReducer(state = initialState, action) {

  switch (action.type) {
    case SET_FILTER:
      return { ...state, filteredList: filterUserList(state.itemList, action.payload) };

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