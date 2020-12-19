const initialState = {};

export default function reducer(state = initialState, action) {

  const  {type, payload} = action;

  switch(type) {

    case "ADDTOLIST":
      return {
        ...state,
        [payload.id]: payload
      }
    
    case "DELETEFROMLIST":
      let newState = {...state}
      delete newState[payload.id];
      return newState;

    default:
      return state;
  }
}

export const addToList = (restaurant) => {
  return {
    type: "ADDTOLIST",
    payload: restaurant
  }
}

export  const deleteFromList = (restaurant) => {
  return {
    type: "DELETEFROMLIST",
    payload: restaurant
  }
} 