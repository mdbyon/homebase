import {connect} from 'react-redux'
import {search} from '../actions/listingActions'
import HomeForm from '../HomeForm';



const mapDispatchToProps = (dispatch) => {
    return {
        onCheck: (criteria, radius, location) => {
            dispatch(search(criteria, radius, location))
        }
      } 
}

const mapStateToProps = (state) => {
    return {
        homeListings: state.listingsForm,
        requests: state.requests
    }
  }

  

let HomeContainer = connect(mapStateToProps, mapDispatchToProps)(HomeForm)
export default HomeContainer

