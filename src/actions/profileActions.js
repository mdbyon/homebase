let profileActions = {
    addUser : function(user) {
      return {
        type: 'ADD_USER',
        payload: user,
      }
    },
    deleteUser: function(user) {
      return {
        type: 'DELETE_TODO',
        payload: user
       }
    }
  }
  export default profileActions