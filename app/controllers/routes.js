const Create = require('./users/create.js')
const Show = require('./users/show.js')
const Update = require('./users/update.js')
const Delete = require('./users/delete.js')
module.exports = {
  users: {
    Create,
    Show,
    Update,
    Delete
  }
}
