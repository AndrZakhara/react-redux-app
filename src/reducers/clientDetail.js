import { SET_ACTIVE_ITEM } from '../actions/clientDetailActon';

const initialState = {
  selectedItemDetail: {}
};

export function itemDetailReducer(state = initialState, action) {

  switch (action.type) {
    case SET_ACTIVE_ITEM:
      
      return { ...state, selectedItemDetail: action.payload};

    default:
      
      return state;
  }
}