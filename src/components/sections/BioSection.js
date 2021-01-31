import React, {useState} from 'react';
import ReactCollapseSimple from "react-collapse-simple";
import {BioScreenSection3} from '../screens/bio/sections/BioScreenSection3';


export const BioSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [size, setSize] = useState();

  const handleClick = () => {
    setIsOpen(!isOpen);
    if(isOpen === false)
    {setSize('hide')} else {setSize('showTitle')}
  };

  return (
    <>
      <h1 
        className={`wow-at-first-sight del-style ${size}`}
        onClick={() => handleClick()}>
        FAKA
      </h1>



      <ReactCollapseSimple isOpen={isOpen}>
        {/*<BioScreenSection3/>*/}

        <div className='center'>
          <p className='bio-p' style={{marginTop:'0'}}>                
            Focused on <strong>growing</strong> your business
          </p>
          <p className='bio-p bio-mind 'style={{marginTop:'5px'}}>
            Technically minded, <strong>stoic</strong>, and <i>creative</i>
          </p>
          <p className='bio-p' style={{marginTop:'5px'}}>                
            NI's Philosophy practitioner
          </p>
        </div>
      </ReactCollapseSimple>
    </>
  )
}
