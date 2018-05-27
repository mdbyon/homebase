const listingsReducer = (state = {}, action) => {
  switch (action.type) {
    case 'LIST_hospital':
      return {
        ...state,

        hospitals: action.payload,
      }

    case 'LIST_school':
      return {
        ...state,

        schools: action.payload,
      }

    case 'LIST_church':
      return {
        ...state,

        churches: action.payload,
      }

    case 'LIST_library':
      return {
        ...state,

        libraries: action.payload,
      }

    case 'DELETE_USER':
      const updatedUsers = state.users.filter(
        user => user.payload !== action.payload
      )
      return { updatedUsers }
    default:
      return state
  }
}

export default listingsReducer
