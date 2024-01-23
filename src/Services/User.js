
export default class User {
    /* constructor() {
         /* this.setUserActivity(id)
        this.setUserPerformance(id)
        this.setUserAverageSessions(id)
          *//* 
        this.userInfos = []
        this.userActivity = []
        this.userPerformance = []
        this.userAverageSessions = []
        this._userInfos = wData
        var self = this
    } */

        
        
        get userActivity() {
            return this._userActivity
        };
        get userPerformance(){
            return this._userPerformance
        };
        get userAverageSessions(){
            return this._userAverageSessions;
        };
        get userInfos() {
            return this._userInfos
        };
        
        async setUserActivity(data) {
            //getData('USER_ACTIVITY', wId).then(ww => this._userActivity = ww);
            //wResult = getData('USER_ACTIVITY', wId)
            this._userActivity = await data
        };
        get chien(){
            return this._chien
        }
        set chien(ww){
            this._chien = ww
        }
        async setUserPerformance(data) {
            //getData('USER_PERFORMANCE', wId).then(ww => this._userPerformance = ww);
            /*wResult = getData('USER_PERFORMANCE', wId)
            this._userActivity = wResult */
            this._userPerformance = await data
        };
        async setUserAverageSessions (data) {
            //getData('USER_AVERAGE_SESSIONS', wId).then(ww => this._userAverageSessions = ww);
            /* wResult = getData('USER_AVERAGE_SESSIONS', wId)
            this._userActivity = wResult */
            this._userAverageSessions = await data
            
        };
        async setUserInfos (data) {/* 
            getData('USER_MAIN_DATA', wId).then(ww => this._userInfos = ww); 
            /* wResult = await getData('USER_MAIN_DATA', wId)
            console.log(wResult)
            this._userInfos = wResult *//* 
            wResult = getData('USER_MAIN_DATA', wId) 
            console.log(wResult.data)
             */
            this._userInfos = await data
            return
        };

         wSetUserInfos(data){
            console.log(data)
        }
        
        async wData(data){
            this._userInfos = data
        }
}
    

