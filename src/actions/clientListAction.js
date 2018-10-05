export const SET_FILTER = 'SET_FILTER';
export const SET_DEFAULT_FILTERED_STORE = 'SET_DEFAULT_FILTERED_STORE';

export function setFilter(filter) {
  return {
    type: SET_FILTER,
    payload: filter,
  }
}

export function setDefaultStore() {
  return {
    type: SET_DEFAULT_FILTERED_STORE,
  }
}