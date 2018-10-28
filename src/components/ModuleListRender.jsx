import React from "react";

import ModuleCard from "./ModuleCard";

const ModuleListRender = props => {
  const { data } = props;
  return (
    <div className="row align-items-stretch">
      {data.map(module => (
        <ModuleCard
          imageUrl={module.thumbnail}
          moduleNumber={module.id}
          data={module.description}
          key={module.slug}
          slug={module.slug}
        />
      ))}
    </div>
  );
};

export default ModuleListRender;
