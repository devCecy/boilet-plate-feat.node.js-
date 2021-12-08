if (process.env.NODE_ENV === 'production') {
  module.export = require('./production');
} else {
  module.export = require('./development');
}
