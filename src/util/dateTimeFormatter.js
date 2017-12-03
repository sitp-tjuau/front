/**
 * 个位数前加零
 * @param  {Number} val
 * @return {String/Number}
 */
const zerofill = val => val >= 10 ? val : '0' + val

/* 相当于：
  var zerofill = function (val) {
    return val >=10 ? val : '0' + val
  };
*/
/**
 * 格式化时间
 * @param  {Number} time 时间戳
 * @param  {Number} type 格式化类型
 * @return {String}
 */
export default function dataTimeFormatter (time, type = 0) {
  let date = new Date(time)
  let year = date.getFullYear()
  let month = date.getMonth() + 1
  let day = date.getDate()
  let hours = date.getHours()
  let minutes = date.getMinutes()

  switch (type) {
    case 0:
      let timeNow = parseInt(new Date().getTime() / 1000)
      let d = timeNow - parseInt(date.getTime() / 1000)
      let ddays = parseInt(d / 86400)
      let dhours = parseInt(d / 3600)
      let dminutes = parseInt(d / 60)
      if (ddays === 1) {
        return '昨天'
      } if (ddays > 0 && ddays < 8) {
        return ddays + '天前'
      } else if (ddays <= 0 && dhours > 0) {
        return dhours + '小时前'
      } else if (dhours <= 0 && dminutes > 0) {
        return dminutes + '分钟前'
      } else if (dminutes === 0) {
        return '刚刚'
      }
      return `${month}月${day}日`
    case 1: // 2015-01-05 11:12
      return `${year}年${month}月${day}日 ${zerofill(hours)}:${zerofill(minutes)}`
    case 2:
      timeNow = parseInt(new Date().getTime() / 1000)
      d = timeNow - parseInt(date.getTime() / 1000)
      ddays = parseInt(d / 86400)
      dhours = parseInt(d / 3600)
      dminutes = parseInt(d / 60)
      if (ddays === 1) {
        return `昨天 ${zerofill(hours)}:${zerofill(minutes)}`
      } else if (ddays <= 0 && dhours > 0) {
        return dhours + '小时' + dminutes % 60 + '分钟前'
      } else if (dhours <= 0 && dminutes > 0) {
        return dminutes + '分钟前'
      } else if (dminutes === 0) {
        return '刚刚'
      }
      return `${month}月${day}日`
    default:
      return `${year}年${month}月${day}日`
  }
}
