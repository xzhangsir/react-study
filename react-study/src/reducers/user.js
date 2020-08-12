const user = (state = [], action) => {
  switch (action.type) {
    case 'changeuser':
      return [...state, action.name]
    default:
      return state
  }
}
export default user
