import {connect} from 'react-redux'
import  PersonsTable  from '../PersonsTable';

function mapStateToProps(state) {
    return {
        users: state.profileForm
    }
  }
  

let PersonsTableContainer = connect(mapStateToProps, null)(PersonsTable)
export default PersonsTableContainer
