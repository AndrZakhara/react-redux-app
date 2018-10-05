import { SET_FILTER, SET_DEFAULT_FILTERED_STORE } from '../actions/clientListAction'
const initialState = {
  filter: '',
  itemList: [
    {
      "general": {
        "firstName": "Liana",
        "lastName": "Crooks",
        "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/kevinoh/128.jpg"
      },
      "job": {
        "company": "Ledner, Johnson and Predovic",
        "title": "Investor Functionality Coordinator"
      },
      "contact": {
        "email": "Gerry_Hackett77@gmail.com",
        "phone": "(895) 984-0132"
      },
      "address": {
        "street": "1520 Zemlak Cove",
        "city": "New Devon",
        "zipCode": "42586-7898",
        "country": "Guinea-Bissau"
      }
    },
    {
      "general": {
        "firstName": "Deontae",
        "lastName": "Dare",
        "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/andysolomon/128.jpg"
      },
      "job": {
        "company": "D'Amore, Dicki and Borer",
        "title": "International Applications Consultant"
      },
      "contact": {
        "email": "Kellie.Marvin38@yahoo.com",
        "phone": "1-615-843-3426 x600"
      },
      "address": {
        "street": "65901 Glover Terrace",
        "city": "Alden ton",
        "zipCode": "57744-4248",
        "country": "Kenya"
      }
    },
    {
      "general": {
        "firstName": "Cortez",
        "lastName": "Pacocha",
        "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/holdenweb/128.jpg"
      },
      "job": {
        "company": "McKenzie Group",
        "title": "Forward Branding Developer"
      },
      "contact": {
        "email": "Sage_Wiegand@hotmail.com",
        "phone": "725.583.0926 x0430"
      },
      "address": {
        "street": "376 Reginald Dam",
        "city": "Port Enid fort",
        "zipCode": "51294-8361",
        "country": "Belarus"
      }
    },
    {
      "general": {
        "firstName": "Geoffrey",
        "lastName": "Russel",
        "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/swaplord/128.jpg"
      },
      "job": {
        "company": "Nienow and Sons",
        "title": "Central Intranet Designer"
      },
      "contact": {
        "email": "Daron.Bartoletti9@gmail.com",
        "phone": "646.580.9390"
      },
      "address": {
        "street": "5050 Iva Extensions",
        "city": "Madonna burgh",
        "zipCode": "74470-6362",
        "country": "Fiji"
      }
    },
  ],
  filteredList: [],
  clickedItem: '',
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

function initFilteredUserList(state) {
  console.log('ccc: '+state);
  // return Object.assign({}, state.clientList);
}

export function clientListReducer(state = initialState, action) {

  switch (action.type) {
    case SET_FILTER:
      return { ...state, filteredList: filterUserList(state.itemList, action.payload)};

    case SET_DEFAULT_FILTERED_STORE:
      return { ...state, filteredList: state.itemList};

    default:
      return state;
  }
}