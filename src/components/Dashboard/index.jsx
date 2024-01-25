import { useParams } from 'react-router-dom'
import React, { useState, useEffect } from 'react'

import User from '../../Services/User.js'
import ChartActivity from '../ChartActivity'
import ChartAverageSessions from '../ChartAverageSessions'
import Card from '../Card'
import ChartsCard from '../ChartsCard'
import ChartPerformance from '../ChartPerformance'
import ChartGoal from '../ChartGoal'

import energy from '../../assets/energy.svg'
import chicken from '../../assets/chicken.svg'
import apple from '../../assets/apple.svg'
import cheeseburger from '../../assets/cheeseburger.svg'
import { getData } from '../../Services/getData.js'

const wUser = new User()

function Profil() {
  let { id } = useParams()
  localStorage.setItem('user', id)

  const userDataInfos = async () => {
    const request = await getData('USER_MAIN_DATA', id)
    wUser.setUserInfos(request)
    SetLoading(false)
  }
  userDataInfos()
  const userDataActivty = async () => {
    const request = await getData('USER_ACTIVITY', id)
    wUser.setUserActivity(request)
    SetLoading4(false)
  }
  userDataActivty()
  const userDataAverageSessions = async () => {
    const request = await getData('USER_AVERAGE_SESSIONS', id)
    wUser.setUserAverageSessions(request)
    SetLoading2(false)
  }
  userDataAverageSessions()
  const userDataPerformance = async () => {
    const request = await getData('USER_PERFORMANCE', id)
    wUser.setUserPerformance(request)
    SetLoading3(false)
  }
  userDataPerformance()

  document.title = 'Profil - SportSee'

  const [data, setData] = useState([])

  const [isLoading, SetLoading] = useState(true)
  const [isLoading2, SetLoading2] = useState(true)
  const [isLoading3, SetLoading3] = useState(true)
  const [isLoading4, SetLoading4] = useState(true)

  const [activityData, setActivityData] = useState([])
  const [sessionsData, setSessionsData] = useState([])
  const [performanceData, setPerformanceData] = useState([])

  const fetchActivity = () => {
    setActivityData(wUser.userActivity)
  }

  const fetchSessions = () => {
    setSessionsData(wUser.userAverageSessions)
  }

  const fetchInfo = () => {
    setData(wUser.userInfos)
  }

  const fetchPerformance = () => {
    setPerformanceData(wUser.userPerformance)
  }

  useEffect(() => {
    fetchActivity()

    fetchInfo()
    fetchSessions()
    fetchPerformance()
  }, [data, performanceData, activityData, sessionsData])

  if (isLoading) {
    return <div className="App">Loading...</div>
  }
  if (isLoading2) {
    return <div className="App">Loading...</div>
  }
  if (isLoading3) {
    return <div className="App">Loading...</div>
  }
  if (isLoading4) {
    return <div className="App">Loading...</div>
  }

  return (
    <section className="profil-wrapper">
      {data && (
        <div className="profil">
          <h2 className="profil-title">
            Bonjour{' '}
            <span className="profil-firstName">{data.userInfos.firstName}</span>
          </h2>
          <p className="profil-subtitle">
            Félicitations ! Vous avez explosé vos objectifs hier 👏
          </p>
        </div>
      )}
      <div className="dashboard">
        <div className="chartsWrapper">
          <div className="activity-charts">
            {activityData && <ChartActivity data={activityData.sessions} />}
          </div>
          <div className="smallChartsWrapper">
            <div>
              {sessionsData && (
                <ChartsCard
                  className="average-sessions"
                  content={
                    <ChartAverageSessions data={sessionsData.sessions} />
                  }
                />
              )}
            </div>
            <div>
              {performanceData && (
                <ChartsCard
                  className="performance"
                  content={<ChartPerformance data={performanceData} />}
                />
              )}
            </div>
            <div>
              {data && (
                <ChartsCard
                  className="score"
                  content={<ChartGoal data={data} />}
                />
              )}
            </div>
          </div>
        </div>

        <div className="dashboard-aside">
          <Card
            userKeyData={data.keyData.calorieCount}
            unit="kCal"
            subtitle="Calories"
            className="calorie"
            logo={energy}
          />
          <Card
            userKeyData={data.keyData.proteinCount}
            unit="g"
            subtitle="Proteines"
            className="protein"
            logo={chicken}
          />
          <Card
            userKeyData={data.keyData.carbohydrateCount}
            unit="g"
            subtitle="Glucides"
            className="carbohydrate"
            logo={apple}
          />
          <Card
            userKeyData={data.keyData.lipidCount}
            unit="g"
            subtitle="Lipides"
            className="lipid"
            logo={cheeseburger}
          />
        </div>
      </div>
    </section>
  )
}

export default Profil
