const moment = require('moment');
exports.formatTime = (time, format = 'YYYY-MM-DD HH:mm:ss') => {
  return time ? moment(time).format(format) : '—';
}

exports.isObject = obj => {
  return obj && typeof obj === 'object' && obj !== null;
};
