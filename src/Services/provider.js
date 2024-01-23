import { getData } from "./getData"
import User from "./User"

export const  init = async (id) => {
    const wUser = new User()
    console.log(getData('USER_MAIN_DATA', id))
    const userDataInfos = await getData('USER_MAIN_DATA', id)
const userDataActivty = await getData('USER_ACTIVITY', id)
const userDataAverageSessions = await getData('USER_AVERAGE_SESSIONS', id)
const userDataPerformance =  await getData('USER_PERFORMANCE', id)
    console.log(userDataInfos)
wUser.setUserActivity(userDataActivty)
wUser.setUserAverageSessions(userDataAverageSessions)
wUser.setUserPerformance(userDataPerformance)
wUser.setUserInfos(userDataInfos)
console.log(wUser)
return wUser
}