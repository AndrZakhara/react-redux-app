import { SET_ACTIVE_ITEM } from '../actions/clientDetailActon';

const initialState = {
  selectedItemDetail: {
    "general": {
      "firstName": "Christian",
      "lastName": "Wuckert",
      "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/lowie/128.jpg"
    },
    "job": {
      "company": "Jakubowski Inc",
      "title": "Future Branding Assistant"
    },
    "contact": {
      "email": "Zechariah48@hotmail.com",
      "phone": "555-516-5564"
    },
    "address": {
      "street": "1946 Nolan Mountain",
      "city": "Garnet stad",
      "zipCode": "79438",
      "country": "Puerto Rico"
    }
  },
};

export function itemDetailReducer(state = initialState, action) {
  switch (action.type) {
    case SET_ACTIVE_ITEM:
      return { ...state, selectedItemDetail: action.payload};



    default:
      return state;
  }
}