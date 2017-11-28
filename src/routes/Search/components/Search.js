import React from 'react'
import PropTypes from 'prop-types';

export const Search = (props) => {
  const { getVideos, videos, query } = props
  return (
    <div>
      Hello World!
    </div>
  )
}

Search.propTypes = {
  getVideos: PropTypes.func,
  videos: PropTypes.any,
  query: PropTypes.string
}

export default Search
