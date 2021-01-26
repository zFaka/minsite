import React, {useState} from 'react';
import ReactCollapseSimple from 'react-collapse-simple';

export const BlogScreen = () => {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <h1 
        style={{cursor:'pointer'}}
        onClick={()=>{setIsOpen(!isOpen)}}
      >Blog</h1> 
      <ReactCollapseSimple isOpen={isOpen}>
      <div
        className='btn-hvr'
        style={{margin:'10px'}} 
      >
        You will find my reflections and my thoughts on: 
      </div>
        <div style={{margin:0}}>
          web dev 
        </div>
        <div style={{margin:0}}>
          self development 
        </div>
        <div style={{margin:0}}>
          marketing
        </div>
        <div style={{margin:0}}>
          nutrition
        </div>
        <div style={{margin:0}}>
          meditation
        </div>
        <div style={{margin:0}}>
          indie hacking
        </div>
        <div style={{margin:0}}>
          improv
        </div>
        <div style={{margin:0}}>
          habit formation
        </div>
        <div style={{marginBottom:'10px'}}>
          fitness
        </div>
      </ReactCollapseSimple>
      <p style={{margin:0}}>
        <strong>Thanks for Reading</strong>
      </p>
    </>
  )}
