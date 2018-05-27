const requestsReducer = (state = {}, action) => {
  switch (action.type) {
    case 'REQUEST_GOOGLE_PLACES':
      return {
        ...state,
        makeRequest: true,
        didLoad: false
      }

    case 'RECEIVED_GOOGLE_PLACES':
      return {
        ...state,
        didLoad: true,
      }
    
    case 'REQUEST_REDIRECT_TO_LISTINGS':
      return {
        visited: true
      }
    case 'REQUEST_HOME':
      return {
        ...state,

        requestHome: true,
        requestPreferences: false,
        requestListings: false,
      }
    case 'REQUEST_PREFERENCES':
      return {
        ...state,

        requestHome: false,
        requestPreferences: true,
        requestListings: false,
      }
    case 'REQUEST_LISTINGS':
      return {
        ...state,

        requestHome: false,
        requestPreferences: false,
        requestListings: true,
      }
    default:
      return state
  }
}

export default requestsReducer
