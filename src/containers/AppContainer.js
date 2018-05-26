import { connect } from 'react-redux'
import { search, requestHome, requestPreferences } from '../actions/listingActions'
import HomePage from '../HomePage';

const mapDispatchToProps = dispatch => {
  return {
    goHome: () => {
      dispatch(requestHome())
    },
    goPreferences: () => {
        dispatch(requestPreferences())
    }
  }
}

const mapStateToProps = state => {
  return {
    requests: state.requests,
  }
}

let AppContainer = connect(mapStateToProps, mapDispatchToProps)(HomePage)
export default AppContainer
