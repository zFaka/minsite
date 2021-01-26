import {useState} from "react";
import ReactCollapseSimple from "react-collapse-simple";

export const BioScreenSection1 = () => {
  const [isOpen, setIsOpen] = useState(true);
  return(
    <>
      <div className='center'>

        <h2 className='bio-clps' style={{marginBottom:'30px', cursor:'pointer'}} onClick={() => setIsOpen(!isOpen)}>Web Dev</h2>

        <ReactCollapseSimple isOpen={isOpen}>
        <p className='bio-p bio-app' style={{marginTop:'10px'}}>                
          Creator of <strong>Aday</strong>, an interactive habit app
        </p>

        <p className='bio-p' style={{marginTop:'10px'}}>                
          Dev for <strong>Increase</strong> your customers
        </p>

        <p className='bio-p' style={{marginTop:'10px'}}>                
          Working as <strong>IT Consultant</strong> 
        </p>
        </ReactCollapseSimple>
      </div>
    </>
  )
}
