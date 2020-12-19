import axios from 'axios';

const initialState = [];

export default function reducer(state = initialState, action) {

  const {type, payload} = action;

  switch(type) {

    case "GETRESUlTS":
      return payload;

    default:
      return state;
  }
}


export const getResults = (payload) => async dispatch => {

    let results = await axios
      .get(
        `${'https://cors-anywhere.herokuapp.com/'}https://api.yelp.com/v3/businesses/search`,
        {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
          },
          params: {
            location: payload,
            term: 'restaurants',
          },
        },
      )


    console.log('API RESULTS:>>', results.data.businesses);

    dispatch({
      type: 'GETRESUlTS',
      payload: results.data.businesses
    })

}
