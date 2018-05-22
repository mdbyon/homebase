import {connect} from 'react-redux'
import search from '../actions/listingActions'
import ListingsTable from '../ListingsTable';

function mapStateToProps(state) {
    return {
        listings: state.listingsForm,
        requests: state.requests
    }
  }

let ListingsContainer = connect(mapStateToProps, null)(ListingsTable)
export default ListingsContainer
