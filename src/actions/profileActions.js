export const addUser = user => {
  return {
    type: 'ADD_USER',
    payload: user,
  }
}

export const deleteUser = user => {
  return {
    type: 'DELETE_TODO',
    payload: user,
  }
}
