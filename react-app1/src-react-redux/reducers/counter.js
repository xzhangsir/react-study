const counter = (state = 0, action) => {
  switch (action.type) {
    case 'ADD':
      return state + action.num
    case 'CUT':
      return state - action.num
    default:
      return state
  }
}
export default counter
