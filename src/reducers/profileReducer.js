const profileReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_POINTS':
      return [
        ...state,
        {
          points: action.payload,
          sex: action.payload.sex,
          lookingFor: action.payload.lookingFor,
        },
      ]
    default:
      return state
  }
}

export default profileReducer
