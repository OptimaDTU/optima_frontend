import React from 'react';
import PropTypes from 'prop-types';

import FetchRender from './FetchRender';

const ModulePageFetch = (props) => {
  const getModule = fetch("https://").then(response => 
    response.json()
  )

  return (
    <React.Fragment />
  )
}

ModulePageFetch.propTypes = PropTypes.shape({
  match: PropTypes.shape({
    params: PropTypes.shape({
      slug: PropTypes.string.isRequired
    })
  })
})

export default ModulePageFetch;