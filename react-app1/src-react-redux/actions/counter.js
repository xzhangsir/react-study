/* export function add(num) {
  return {
    type: 'ADD',
    num,
  }
}
 */
// 模拟异步  需用用中间件 redux-thunk来处理
export function add(num) {
  return (dispatch) => {
    setTimeout(() => {
      dispatch({
        type: 'ADD',
        num,
      })
    }, 1000)
  }
}


export function cut(num) {
  return {
    type: 'CUT',
    num,
  }
}
