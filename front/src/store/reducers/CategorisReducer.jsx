const defState = {
  categories: []
}

const GET_CATEGORIES = "GET_CATEGORIES";

const categoryReducer = (state = defState, action) => {
  switch (action.type) {
    case GET_CATEGORIES:
      return {...state, categories: action.payload};
    default:
      return state
  }
}

export {GET_CATEGORIES};

export default categoryReducer;