import request from '../utils/request';

export function query() {
  return request('/api/user');
}
export function queryMock() {
  return request('/api/mock');
}
export function getProduct() {
  return request('/api/product')
}
