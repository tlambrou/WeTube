import React, { PropTypes } from 'react'

export const Search = (props) => {
  const { getVideos, videos, query } = props
  return (
    <div>
      Hello World
    </div>
  )
}

Search.propTypes = {
  getVideos: PropTypes.func,
  videos: PropTypes.any,
  query: PropTypes.string
}

export default Search
