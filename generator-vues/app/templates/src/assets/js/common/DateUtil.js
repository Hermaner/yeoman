
// export const CompareDate = (endTime, startTime) => {
//   return ((new Date(endTime.replace(/-/g, '\/'))) >= (new Date(startTime.replace(/-/g, '\/'))))
// }

export const timestampToTime = (time) => {
  if (!(time > 0)) {
    let timeString = time + ' 00:00:00'
    let date = Date.parse(timeString)
    return date
  }
}
