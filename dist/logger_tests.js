// Generated by CoffeeScript 1.10.0
var bablic_logger;

bablic_logger = require('./BablicLogger')('erez');

bablic_logger({
  user_id: 1,
  site_id: 2,
  data: 'info'
});

bablic_logger('I am', 1, 'of U');

bablic_logger.error('ERROR');

bablic_logger.warn('warning');

console.log(bablic_logger);
