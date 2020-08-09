const user = (state = {}, action) => {
  switch (action.type) {
    case 'changeuser':
      return action.obj
    default:
      return state
  }
}
export default user
