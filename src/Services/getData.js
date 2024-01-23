import { getUserActivity,getUserAverageSessions, getUserInfos, getUserPerformance, } from "./Api.js"
//import { getUserActivity,getUserAverageSessions, getUserInfos, getUserPerformance, } from  "../data/data.js"

//let isMocked = true

/* (async () => {
    if (isMocked) {
      // import module for side effects
      await import({ getUserActivity,getUserAverageSessions, getUserInfos, getUserPerformance, }, "../data/data.js")
    }else{
        await import("../data/data.js");
    }
  })(); */

/* if (isMocked){
    //import { getUserActivity,getUserAverageSessions, getUserInfos, getUserPerformance, } from "./ApiCall";
import ({ getUserActivity,getUserAverageSessions, getUserInfos, getUserPerformance, }, "./ApiCall.js")

}else{
    
import ({ getUserActivity,getUserAverageSessions, getUserInfos, getUserPerformance, } , "../data/data.js")

} */



export const getData = async (type, id) => {
    let data

    

    switch (type) {
      case "USER_ACTIVITY":
        data = await getUserActivity(id);
        
        break;
      case "USER_PERFORMANCE":
        data = await  getUserPerformance(id);
        
        break;
      case "USER_AVERAGE_SESSIONS":
        data = await getUserAverageSessions(id);
        
        break;
      case "USER_MAIN_DATA":
        data = await getUserInfos(id);
        
        break;
        default:
    }
    console.log(data)
    return data.data;
  }; 

