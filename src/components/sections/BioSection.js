import React, {useState} from 'react';
import ReactCollapseSimple from "react-collapse-simple";
import {FaLinkedinIn} from 'react-icons/fa';
import {HiMail} from 'react-icons/hi';


export const BioSection = () => {
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
        className={`wow-at-first-sight del-style ${size}`}
        onClick={() => handleClick()}>
        FAKA
      </h1>



      <ReactCollapseSimple isOpen={isOpen}>
        <div className='del-style mgz' onClick={() => handleClick()}>

          <p className='exp' style={{marginTop:'0'}}>                
            <strong>IT Consultant</strong> with <strong>+2</strong> yrs of experience
          </p>

          <p className='exp'style={{marginTop:'0'}}>
            Technically minded, <strong>Stoic</strong> & <i>Creative</i>
          </p>

          <p className='exp' style={{marginTop:'0'}}>                
            Focused on <strong>Growing</strong> your business
          </p>

          <p className='exp' style={{marginTop:'0'}}>                
            Dev for <strong>Increase</strong> your customers
          </p>

          <p className='exp' style={{marginTop:'0'}}>                
            NI's Philosophy practitioner
          </p>

        </div>
        <div className='social-container'>
          <a href='https://www.linkedin.com/in/facundo-arenas/' target="_blank" rel="noreferrer" className='del-style iconsz'>
            <FaLinkedinIn/></a>
          <a href='mailto:facundoarenas29@gmail.com' target="_blank" rel="noopener noreferrer" className='del-style iconsz'>
            <HiMail/></a>
        </div>
      </ReactCollapseSimple>

    </>
  )
}
