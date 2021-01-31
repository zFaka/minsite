import React from 'react';
import {useState} from 'react';
import ReactCollapseSimple from 'react-collapse-simple';


export const BioScreenSection2 = () => {


  const [isOpen1, setIsOpen1] = useState(true);
  const [isOpen2, setIsOpen2] = useState(false);

  return(
    <>
      <div className='center'>
        <p className='bio-clps wow-at-third-sight' onClick={() => {setIsOpen1(!isOpen1); setIsOpen2(false)}} style={{cursor:'pointer'}}> 
          <strong>Frontend</strong>
        </p>

        <ReactCollapseSimple isOpen={isOpen1}>
          <p className='bio-p' >React, Redux, Typescript, UI, UX, </p>
          <p className='bio-p' >Figma, Sass, Flexbox, FullpageJS</p>
        </ReactCollapseSimple>

        <p className='bio-clps wow-at-third-sight' style={{marginTop:'10vh', cursor:'pointer'}} onClick={() => {setIsOpen2(!isOpen2); setIsOpen1(false)}}>                
          <strong>Backend</strong>
        </p>
        <ReactCollapseSimple isOpen={isOpen2}>
        <p className='bio-p' >MongoDB, PostgresDB, NodeJS,</p>
        <p className='bio-p' >Docker, Heroku, Firebase,</p>
        <p className='bio-p' >Netlify, Linux</p>
        </ReactCollapseSimple>

      </div>
    </>
  )
}
