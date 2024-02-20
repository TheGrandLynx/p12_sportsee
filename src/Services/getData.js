/* import {
  getUserActivity,
  getUserAverageSessions,
  getUserInfos,
  getUserPerformance,
} from './Api.js' */
import {
  getUserActivity,
  getUserAverageSessions,
  getUserInfos,
  getUserPerformance,
} from '../data/data.js'

//soutenance 3

export const getData = async (type, id) => {
  let wData

  switch (type) {
    case 'USER_ACTIVITY':
      wData = await getUserActivity(id)

      break
    case 'USER_PERFORMANCE':
      wData = await getUserPerformance(id)

      break
    case 'USER_AVERAGE_SESSIONS':
      wData = await getUserAverageSessions(id)

      break
    case 'USER_MAIN_DATA':
      wData = await getUserInfos(id)

      break
    default:
  }
  //console.log(wData)
  return wData.data
}
