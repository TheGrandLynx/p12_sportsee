export default class User {
  //soutenance 6
  get userActivity() {
    return this._userActivity
  }
  get userPerformance() {
    return this._userPerformance
  }
  get userAverageSessions() {
    return this._userAverageSessions
  }
  get userInfos() {
    return this._userInfos
  }

  async setUserActivity(data) {
    this._userActivity = await data
  }

  async setUserPerformance(data) {
    this._userPerformance = await data
  }
  async setUserAverageSessions(data) {
    this._userAverageSessions = await data
  }
  async setUserInfos(data) {
    this._userInfos = await data
    return
  }
}
