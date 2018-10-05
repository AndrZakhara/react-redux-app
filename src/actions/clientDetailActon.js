export const SET_ACTIVE_ITEM = 'SET_ACTIVE_ITEM';

export function setActiveItem(selectedItem) {
  return {
    type: SET_ACTIVE_ITEM,
    payload: selectedItem,
  }
}