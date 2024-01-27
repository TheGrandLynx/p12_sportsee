import axios from 'axios'

//soutenance 2

const api = axios.create({
  baseURL: `http://localhost:3000/`,
})

export const getUserActivity = async (id) => {
  try {
    const res = await api.get('http://localhost:3000/user/' + id + '/activity')
    let { data } = res
    return data
  } catch (e) {
    console.log(e)
  }
}

export const getUserInfos = async (id) => {
  try {
    const res = await api.get(`http://localhost:3000/user/${id}`)
    let { data } = res
    return data
  } catch (e) {
    console.log(e)
  }
}

export const getUserPerformance = async (id) => {
  try {
    const res = await api.get(`http://localhost:3000/user/${id}/performance`)
    let { data } = res
    return data
  } catch (e) {
    console.log(e)
  }
}

export const getUserAverageSessions = async (id) => {
  try {
    const res = await api.get(
      `http://localhost:3000/user/${id}/average-sessions`
    )

    let { data } = res
    return data
  } catch (e) {
    console.log(e)
  }
}
