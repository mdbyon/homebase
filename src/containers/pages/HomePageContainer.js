import { connect } from 'react-redux'
import { requestHome } from '../../actions/listingActions'
import { requestListings, requestPreferences } from '../../actions/listingActions';
import HomePage from '../../HomePage';


const mapDispatchToProps = dispatch => {
  return {
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
      listings: state.listingsForm,
      requests: state.requests,
      profile: state.profile
    }
  }


let HomePageContainer = connect(mapStateToProps, mapDispatchToProps)(HomePage)
export default HomePageContainer
