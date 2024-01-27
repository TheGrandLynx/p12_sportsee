import {
  getUserActivity,
  getUserAverageSessions,
  getUserInfos,
  getUserPerformance,
} from './Api.js'
/* import {
  getUserActivity,
  getUserAverageSessions,
  getUserInfos,
  getUserPerformance,
} from '../data/data.js' */

//soutenance 3

export const getData = async (type, id) => {
  let data

  switch (type) {
    case 'USER_ACTIVITY':
      data = await getUserActivity(id)

      break
    case 'USER_PERFORMANCE':
      data = await getUserPerformance(id)

      break
    case 'USER_AVERAGE_SESSIONS':
      data = await getUserAverageSessions(id)

      break
    case 'USER_MAIN_DATA':
      data = await getUserInfos(id)

      break
    default:
  }
  //console.log(data)
  return data.data
}
