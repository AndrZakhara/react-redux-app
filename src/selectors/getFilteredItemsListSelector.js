import { createSelector } from 'reselect';

const getVisibilityFilter = store => store.clientList.filterValue;
const getItemsList = store => store.clientList.itemList;

export const getFilteredItemsList = createSelector(
  [getVisibilityFilter, getItemsList],
  (filterValue, itemList) => {

    if(itemList.lenght === 0) {

      return [];
    }
    else {

        const sortObject = (obj) => {
        let boolean = false;

        const sort = (obj) => {

          for (let key in obj) {

            if (typeof (obj[key]) === 'object') {
              sort(obj[key]);
            }
              else {

              if ((obj[key]).toLowerCase().indexOf(filterValue.toLowerCase()) !== -1) {
                boolean = true;
              }
            }
          }
          return boolean;
        };
        sort(obj);

        return boolean;
      };
      return itemList.filter(obj => sortObject(obj));
    }
  }
);

// function filterUserList(arr, value) {
//
//   const sortObject = (obj) => {
//     let boolean = false;
//
//     const sort = (obj) => {
//
//       for (let key in obj) {
//
//         if (typeof (obj[key]) === 'object') {
//           sort(obj[key]);
//         }
//           else {
//
//           if ((obj[key]).toLowerCase().indexOf(value.toLowerCase()) !== -1) {
//             boolean = true;
//           }
//         }
//       }
//       return boolean;
//     };
//     sort(obj);
//
//     return boolean;
//   };
//   return arr.filter(obj => sortObject(obj));
// }

