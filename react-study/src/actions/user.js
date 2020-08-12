export function changeuser(obj) {
  return {
    type: 'changeuser',
    name: obj.name,
  }
}
