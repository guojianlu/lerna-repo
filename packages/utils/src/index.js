import moment from 'moment';

class Utils {
  static formatTime(time, format = 'YYYY-MM-DD HH:mm:ss') {
    return time ? moment(time).format(format) : '—';
  }

  static formatDate(time, format = 'YYYY-MM-DD') {
    return time ? moment(time).format(format) : '—';
  }

  static getTimeStamp(time) {
    return time ? moment(time).valueOf() : moment().valueOf();
  }
}

export default Utils;
