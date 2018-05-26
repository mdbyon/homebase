import { connect } from 'react-redux'
import { requestHome } from '../../actions/listingActions'
import PreferencesPage from '../../PreferencesPage';
import { requestListings, requestPreferences } from '../../actions/listingActions';


const mapDispatchToProps = dispatch => {
  return {
    requestHome: () => {
      dispatch(requestHome())
    },
    requestPreferences: () => {
        dispatch(requestPreferences())
    },
    requestListings: () => {
        dispatch(requestListings())
    },
  }
}

const mapStateToProps = state => {
    return {
      homeListings: state.listingsForm,
      requests: state.requests,
    }
  }


let PreferencesPageContainer = connect(mapStateToProps, mapDispatchToProps)(PreferencesPage)
export default PreferencesPageContainer
