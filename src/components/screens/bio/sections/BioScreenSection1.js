import {useState} from "react";
import ReactCollapseSimple from "react-collapse-simple";

export const BioScreenSection1 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [size, setSize] = useState();
  const [subSize1, setSubSize1] = useState();
  const [subSize2, setSubSize2] = useState();
  const [subSize3, setSubSize3] = useState();

  const handleClick = () => {
    setIsOpen(!isOpen);setIsOpen1(false); setIsOpen2(false); setIsOpen3(false);setSubSize1('show');setSubSize2('show');setSubSize3('show')
    if(isOpen === false)
    {setSize('hide')} 
    else {setSize('show')}};

  const handleSubClick1 = () => {
    setIsOpen1(!isOpen1);
    if(isOpen1 === false)
    {setSubSize1('hide')
      setSubSize2('show')
      setSubSize3('show')} 
    else {setSubSize1('show')}}

  const handleSubClick2 = () => {
    setIsOpen2(!isOpen2);
    if(isOpen2 === false)
    {setSubSize2('hide')
      setSubSize1('show')
      setSubSize3('show')}
    else {setSubSize2('show')}}

  const handleSubClick3 = () => {
    setIsOpen3(!isOpen3);
    if(isOpen3 === false)
    {setSubSize3('hide')
      setSubSize1('show')
      setSubSize2('show')}
    else {setSubSize3('show')}}

  return(
    <>
      <div className='center'>

        <h2 
          className={`wow-at-second-sight del-style ${size}`} 
          style={{cursor:'pointer'}} 
          onClick={() => {handleClick()}}>
          Skills
        </h2>


        <ReactCollapseSimple isOpen={isOpen}>
          <p 
            className={`wow-at-third-sight ${subSize3}`} 
            onClick={() => {handleSubClick3();setIsOpen3(!isOpen3); setIsOpen2(false); setIsOpen1(false)}} 
            style={{cursor:'pointer'}}> 
            <strong>Human</strong>
          </p>
          <ReactCollapseSimple isOpen={isOpen3}>
            <p className='exp'>Hangout with the team</p>
            <p className='exp'>Collective property</p>
            <p className='exp'>Empathy, zero ego</p>
            <p className='exp'>Passion for teach</p>
          </ReactCollapseSimple>

          <p 
            className={`wow-at-third-sight ${subSize1}`} 
            onClick={() => {handleSubClick1();setIsOpen1(!isOpen1); setIsOpen2(false); setIsOpen3(false)}} 
            style={{cursor:'pointer'}}> 
            <strong>Frontend</strong>
          </p>
          <ReactCollapseSimple isOpen={isOpen1}>
            <p className='exp' >React, Redux, Typescript, UI, UX, </p>
            <p className='exp' >CSS Grid, Sass, Flexbox, FullpageJS</p>
          </ReactCollapseSimple>

          <p 
            className={`wow-at-third-sight ${subSize2}`} 
            onClick={() => {handleSubClick2();setIsOpen2(!isOpen2); setIsOpen1(false); setIsOpen3(false)}}>
            <strong>Backend</strong>
          </p>
          <ReactCollapseSimple isOpen={isOpen2}>
            <p className='exp' >MongoDB, PostgresDB, NodeJS,</p>
            <p className='exp' >Docker, Firebase, MySQL</p>
            <p className='exp' >Netlify, Heroku, Linux</p>
          </ReactCollapseSimple>
        </ReactCollapseSimple>
      </div>
    </>
  )
}
