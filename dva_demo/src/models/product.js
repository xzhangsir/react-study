import * as api from '../services/example'

export default {
  namespace: 'product',
  state: {
    productList: [
      {
        name: "玉米"
      },
      {
        name: '紫薯'
      }
    ]
  },
  reducers: {
    updateProductList(state, action) {
      // 不建议直接修改state 通过deepClone克隆一份
      let currentProductList = deepClone(state);
      currentProductList.productList.push(action.payload);
      return currentProductList
    }
  },
  effects: {
    *updateListAsync({ payload }, { call, put }) {
      yield put({
        type: 'updateProductList',
        payload
      })
    },
    // 异步请求数据
    *updateHttp({ payload }, { call, put }) {
      const result = yield call(api.getProduct, payload)
      const { data } = result
      console.log(data)
      if (data) {
        yield put({
          type: 'updateProductList',
          payload: data
        })
      }
    }
  },
  subscriptions: {
    hello({ dispatch, history }) {
      window.onresize = () => {
        console.log('11111111111111');
      }
    },
  },
}
function deepClone(state) {
  let _obj = JSON.stringify(state),
    objclone = JSON.parse(_obj);
  return objclone
}