import { fromJS } from 'immutable'
import fetch from 'isomorphic-fetch'
import { isEmpty } from 'lodash'
import { apiKey } from 'auth/apiKey'

// CONSTANTS
export const SET_VIDEOS = "SET_VIDEOS"
export const SET_QUERY = "SET_QUERY"

// ACTIONS
export const setVideos = (videos) => {
  return {
    type: SET_VIDEOS,
    payload: videos
  }
}

export const setQuery = (query) => {
  return {
    type: SET_QUERY,
    payload: query
  }
}

export const getVideos = (query) => {
  return (dispatch, getState) => {
    dispatch(setQuery(query))
    !isEmpty(query) ? fetch('https://www.googleapis.com/youtube/v3/search?q=' + query + '&key=' + apiKey)
    .then(response => {
      if(response.status >= 400) {
        throw new Error("Bad response from the server")
      }
      return response.json()
    }).then(videos => {
      dispatch(setVideos(videos.items))
    }).catch(error => {
      console.log(error)
    }) : dispatch(setVideos([]))
  }
}

export const action = {
  getVideos
}

// ACTION HANDLERS
const ACTION_HANDLERS = {
  [SET_VIDEOS]: (state, {payload: videos}) => {
    return state.set('videos', fromJS(videos))
  },
  [SET_QUERY]: (state, {payload: query}) => {
    return state.set('query', fromJS(query))
  }
}

// REDUCERS
const initialState = fromJS({})
export default (state = initialState, action) => {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
