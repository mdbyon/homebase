const requestsReducer = (state = {}, action) => {
  switch (action.type) {
    case "REQUEST_GOOGLE_PLACES":
      return {
        ...state,
        makeRequest: true,
        didLoad: false
      };

    case "RECEIVED_GOOGLE_PLACES":
      return {
        ...state,
        didLoad: true
      };

    case "REQUEST_REDIRECT_TO_LISTINGS":
      return {
        redirect: true,
        completedPreferences: true
      };
    case "REQUEST_HOME":
      return {
        ...state,
        redirect: false,
        requestHome: true,
        requestPreferences: false,
        requestListings: false
      };
    case "REQUEST_PREFERENCES":
      return {
        ...state,
        redirect: false,
        requestHome: false,
        requestPreferences: true,
        requestListings: false
      };
    case "REQUEST_LISTINGS":
      return {
        ...state,
        redirect: false,
        requestHome: false,
        requestPreferences: false,
        requestListings: true
      };
    case "REQUEST_OPEN_MODAL":
      return {
        ...state,
        openModal: true
      };
    case "REQUEST_CLOSE_MODAL":
      return {
        ...state,
        openModal: false
      };
    case "FINISHED_FETCHING":
      return {
        ...state,
        finishedFetching: true
      };
    default:
      return state;
  }
};

export default requestsReducer;
