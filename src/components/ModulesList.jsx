import React from 'react';

import FetchRender from './FetchRender';
import Module from './Module';

/**
 * Fetches the list of modules and renders the list
 */
const ModulesList = () => {
  const getModules = fetch("http://www.mocky.io/v2/5b9d16613200004900db9345").then(response => {
    return response.json();
  });

  return (
    <div className="Modules container">
      <div className="row">
        <FetchRender 
          toComplete={getModules}
          render={(data) => {
            return (
              <React.Fragment>
                {data.map(module => <Module imageUrl={module.image} moduleNumber={module.number} data={module.about} />)}
              </React.Fragment>
            )
          }}
        />
      </div>
    </div>
  )
}

export default ModulesList;