var level = require('level')
var hypercore = require('hypercore')
var createImportPipeline = require('./lib/import.js')
var DatabaseTracker = require('./lib/databaseTracker.js')

module.exports = Jawn

function Jawn (opts) {
  if (!opts) opts = {}
  var db = opts.db || level('data.jawn')
  this.core = opts.core || hypercore(db)
  this.db = this.core.db
}

Jawn.prototype.createImportPipeline = function (opts) {
  return createImportPipeline(this, opts)
}

Jawn.prototype.createDatabaseTracker = function (dbfile) {
  return new DatabaseTracker(dbfile)
}
