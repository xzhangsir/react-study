import axios from 'axios'

export const userSignupRequest = (userInfo) => {
  return (dispatch) => {
    return axios.post('http://localhost:3030/api/users', userInfo)
  }
}
