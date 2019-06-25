export const GET_SELECTED_PLACE = 'with-my-dog/place/GET_SELECTED_PLACE';

export const getPlaceData = (payload) => ({
  type: GET_SELECTED_PLACE,
  payload
})

const initialState = {
  selected: null,
}

const addPlace = (state = initialState, action) => {
  switch (action.type) {
    case GET_SELECTED_PLACE:
      return {
        ...initialState, selected: action.payload
      }
      default:
        return state;
  }
}

export default addPlace;