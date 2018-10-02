import React from 'react';

import FetchRender from './FetchRender';
import ModuleCard from './ModuleCard';

/**
 * Fetches the list of modules and renders the list
 */
const ModulesList = () => {
  const getModules = fetch("https://optimadtu.herokuapp.com/modules/?format=json")
    .catch(err => fetch("https://www.mocky.io/v2/5bb31c12330000570011ca8b"))
    .then(response => response.json());

  const renderModules = (data) => {
    return (
      <div className="row">
        {
          data.map(module => 
            <ModuleCard 
              imageUrl={module["thumbnail"]} 
              moduleNumber={module["id"]} 
              data={module["description"]} 
              key={module["slug"]} 
              slug={module["slug"]} 
            />
          )
        }
      </div>
    )
  }

  return (
    <div className="Modules container">
      <FetchRender 
        toComplete={getModules}
        render={renderModules}
      />
    </div>
  )
}

export default ModulesList;