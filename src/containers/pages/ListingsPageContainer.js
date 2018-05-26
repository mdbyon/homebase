import { connect } from 'react-redux'
import { requestHome } from '../../actions/listingActions'
import ListingsPage from '../../ListingsPage';
import { requestListings, requestPreferences } from '../../actions/listingActions';


const mapDispatchToProps = dispatch => {
  return {
    requestHome: () => {
      dispatch(requestHome())
    },
    requestPreferences: () => {
        dispatch(requestPreferences())
    },
  }
}

const mapStateToProps = state => {
    return {
      homeListings: state.listingsForm,
      requests: state.requests,
    }
  }


let ListingsPageContainer = connect(mapStateToProps, mapDispatchToProps)(ListingsPage)
export default ListingsPageContainer
