// Generated by CoffeeScript 1.10.0
var BablicLogger;

BablicLogger = (function() {
  function BablicLogger(component1) {
    this.component = component1;
    return;
  }

  return BablicLogger;

})();

module.exports = function(component) {
  var func;
  func = function(object) {
    if (typeof object !== 'object') {
      object = {
        message: object
      };
    }
    return func.info(object);
  };
  func.log = function(arg) {
    var data, e, error, message, object, site_id, user_id;
    user_id = arg.user_id, site_id = arg.site_id, message = arg.message, data = arg.data;
    object = arguments[0];
    object.component = component;
    try {
      return console.log(JSON.stringify(object));
    } catch (error) {
      e = error;
      return console.log(object);
    }
  };
  func.info = function(arg) {
    var data, message, object, site_id, user_id;
    user_id = arg.user_id, site_id = arg.site_id, message = arg.message, data = arg.data;
    object = arguments[0];
    object.log_level = 'info';
    return this.log(object);
  };
  func.warn = function(arg) {
    var data, message, object, site_id, user_id;
    user_id = arg.user_id, site_id = arg.site_id, message = arg.message, data = arg.data;
    object = arguments[0];
    object.log_level = 'warn';
    object.caller = arguments.callee.caller.toString();
    return this.log(object);
  };
  func.error = function(arg) {
    var data, message, object, site_id, user_id;
    user_id = arg.user_id, site_id = arg.site_id, message = arg.message, data = arg.data;
    object = arguments[0];
    object.log_level = 'error';
    object.trace = new Error().stack;
    return this.log(object);
  };
  return func;
};
