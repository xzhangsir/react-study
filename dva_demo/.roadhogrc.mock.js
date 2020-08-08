/* // 如果有多个这样写就很不方便
export default {
  ...require('./mock/product'),
  ...require('./mock/user')
};
 */

import fs from 'fs'
import path from 'path'

const mock = {}

fs.readdirSync(path.join(__dirname + '/mock')).forEach(function (file) {
  if (file.match(/\.js$/)) {
    Object.assign(mock, require('./mock/' + file))
  }
})

export default mock