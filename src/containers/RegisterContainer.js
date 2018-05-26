import { connect } from 'react-redux'
import { search, requestHome, requestPreferences } from '../actions/listingActions'
import RegisterPage from '../RegisterPage';

const mapDispatchToProps = dispatch => {
  return {
    goHome: () => {
      dispatch(requestHome())
    }
  }
}

const mapStateToProps = state => {
  return {
    requests: state.requests,
  }
}

let RegisterContainer = connect(mapStateToProps, mapDispatchToProps)(RegisterPage)
export default RegisterContainer
