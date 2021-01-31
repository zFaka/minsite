import React, {useState} from 'react';
import ReactCollapseSimple from 'react-collapse-simple';
import {ProjectsScreen} from '../screens/projects/ProjectsScreen';

export const ProjectsSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [size, setSize] = useState();

  const handleClick = () => {
    setIsOpen(!isOpen);
    if(isOpen === false)
    {setSize('hide')} else {setSize('show')}
  };
  return (
    <>
      <h1 
        className={`wow-at-second-sight del-style ${size}`}
        onClick={() => handleClick()}>
        Projects 
      </h1> 



      <ReactCollapseSimple isOpen={isOpen}>
        <ProjectsScreen/>
      </ReactCollapseSimple>
    </>
  )
}
