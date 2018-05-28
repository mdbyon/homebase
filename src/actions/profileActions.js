export const addPoints = points => {
  return {
    type: 'ADD_POINTS',
    payload: points,
  }
}

export const deleteUser = user => {
  return {
    type: 'DELETE_TODO',
    payload: user,
  }
}
