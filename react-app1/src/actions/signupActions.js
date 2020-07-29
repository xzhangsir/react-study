import axios from 'axios'

export const userSignupRequest = (userInfo) => {
  return (dispatch) => {
    return axios.post('/api/users', userInfo)
  }
}
