import React from 'react';

const filterList = ['all', 'mine', 'development', 'design', 'marketing', 'sales']

const ProjectFilter = ({currentFilter, changeFitler}) => {


  const handleClick = (newFilter) => {
    changeFitler(newFilter)
  }
  return (
    <div className="project-filter">
      <nav>
        <p>Filter by:</p>
        {filterList.map((f) => (
          <button key={f} className={currentFilter === f ? 'active' : ''} onClick={() => handleClick(f)}>
            {f}
          </button>
        ))}
      </nav>
    </div>
  );
};

export default ProjectFilter;
