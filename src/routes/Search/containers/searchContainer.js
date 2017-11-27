import { connect } from 'react-redux'
import { getVideos } from '../modules/search'
import { fromJS } from 'immutable'
import Search from '../components/Search'

const actions = {
  getVideos: (value) => getVideos(value)
}

const mapStateToProps = (state) => {
  const search = state.Search
  return {
    videos: search.get('videos', fromJS([])),
    query: search.get('query', '')
  }
}

export default connect(mapStateToProps, actions)(Search)
