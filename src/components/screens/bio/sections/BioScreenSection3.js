import React from 'react';
import {FaLinkedinIn} from 'react-icons/fa';
import {HiMail} from 'react-icons/hi';

export const BioScreenSection3 = () => { return (
  <>
    <div className='center'>

      <p className='bio-p' style={{marginTop:'5px'}}>                
        Focused on <strong>growing</strong> your business
      </p>
      <p className='bio-p bio-mind 'style={{marginTop:'5px'}}>
        Technically minded, <strong>stoic</strong>, and <i>creative</i>
      </p>
      <p className='bio-p' style={{marginTop:'5px'}}>                
        NI's Philosophy practitioner
      </p>
      <div className='social-container icon-sz' style = {{
        position: "fixed",
        right: "-25px",
        bottom: "0",
        width: "100%",
      }}>
        <a href='https://www.linkedin.com/in/facundo-arenas/' target="_blank" rel="noreferrer" className='del-style'>
          <FaLinkedinIn/>
        </a>
        <a href='mailto:facundoarenas29@gmail.com' target="_blank" rel="noopener noreferrer" className='del-style'>
          <HiMail/>
        </a>
      </div>
    </div>
  </>
)
}
