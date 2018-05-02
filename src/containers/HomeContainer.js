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
  

let HomeContainer = connect(null, mapDispatchToProps)(HomeForm)
export default HomeContainer

