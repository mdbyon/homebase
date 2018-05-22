const requestsReducer = (state = {}, action) => {
  switch (action.type) {
    case 'REQUEST_GOOGLE_PLACES':
      return {
        ...state,
        makeRequest: true,
        didLoad: false,
      }

    case 'RECEIVED_GOOGLE_PLACES':
      return {
        ...state,

        didLoad: true,
      }
    default:
      return state
  }
}

export default requestsReducer
