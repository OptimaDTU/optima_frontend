import React from 'react';
import PropTypes from 'prop-types';

const Module = (props) => {
  return (
    <div className="col-sm-3">
      <div className="card">
        <img className="card-img-top" src={props.imageUrl} alt={props.moduleNumber} />
        <div class="card-body">
          <p class="card-text">{props.data}</p>
        </div>
      </div>
    </div>
  )
}

Module.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  data: PropTypes.string.isRequired,
  moduleNumber: PropTypes.string.isRequired
}

export default Module;