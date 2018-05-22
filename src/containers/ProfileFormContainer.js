import { connect } from 'react-redux'
import { addUser } from '../actions/profileActions'
import ProfileForm from '../ProfileForm'

const mapDispatchToProps = dispatch => {
  return {
    onSubmit: user => {
      dispatch(addUser(user))
    },
  }
}

let ProfileFormContainer = connect(null, mapDispatchToProps)(ProfileForm)
export default ProfileFormContainer
