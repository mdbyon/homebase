const profileReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_USER':
      return [
        ...state,
        {
          age: action.payload.age,
          sex: action.payload.sex,
          lookingFor: action.payload.lookingFor,
        },
      ]
    case 'DELETE_USER':
      const updatedUsers = state.users.filter(
        user => user.payload !== action.payload
      )
      return { updatedUsers }
    default:
      return state
  }
}

export default profileReducer
