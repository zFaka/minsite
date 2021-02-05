import {useState} from "react";
import ReactCollapseSimple from "react-collapse-simple";
//icons
//frontend
import {FaReact} from "react-icons/fa";
import {SiRedux} from "react-icons/si";
import {SiTypescript} from "react-icons/si";
import {SiSass} from "react-icons/si";
import {SiCss3} from "react-icons/si";
//backend
import {SiMongodb} from "react-icons/si";
import {SiPostgresql} from "react-icons/si";
import {FaNodeJs} from "react-icons/fa";
import {FaDocker} from "react-icons/fa";
import {SiFirebase} from "react-icons/si";
import {GrMysql} from "react-icons/gr";
import {SiNetlify} from "react-icons/si";
import {DiHeroku} from "react-icons/di";
import {DiLinux} from "react-icons/di";


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
    {setSubSize1('subhide')
      setSubSize2('show')
      setSubSize3('show')} 
    else {setSubSize1('show')}}

  const handleSubClick2 = () => {
    setIsOpen2(!isOpen2);
    if(isOpen2 === false)
    {setSubSize2('subhide')
      setSubSize1('show')
      setSubSize3('show')}
    else {setSubSize2('show')}}

  const handleSubClick3 = () => {
    setIsOpen3(!isOpen3);
    if(isOpen3 === false)
    {setSubSize3('subhide')
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
          SKILL
        </h2>


        <ReactCollapseSimple isOpen={isOpen}>
          <p 
            className={`wow-at-third-sight del-style ${subSize3}`} 
            onClick={() => {handleSubClick3();setIsOpen3(!isOpen3); setIsOpen2(false); setIsOpen1(false)}} 
            style={{cursor:'pointer'}}> 
            <strong>Human</strong>
          </p>
          <ReactCollapseSimple isOpen={isOpen3}>
            <div
              onClick={() => {handleSubClick3();setIsOpen3(!isOpen3); setIsOpen2(false); setIsOpen1(false)}} 
              className={`del-style`} 
            >
              <p className='exp'>Hangout with the team</p>
              <p className='exp'>Collective property</p>
              <p className='exp'>Empathy, zero ego</p>
              <p className='exp'>Passion for teach</p>
            </div>
          </ReactCollapseSimple>


          <p 
            className={`wow-at-third-sight del-style ${subSize1}`} 
            onClick={() => {handleSubClick1();setIsOpen1(!isOpen1); setIsOpen2(false); setIsOpen3(false)}} 
            style={{cursor:'pointer'}}> 
            <strong>Frontend</strong>
          </p>
          <ReactCollapseSimple isOpen={isOpen1}>
            <div
              onClick={() => {handleSubClick1();setIsOpen1(!isOpen1); setIsOpen2(false); setIsOpen3(false)}} 
              className={`del-style iconsz`} 
            >
              <div>
                <FaReact/>{` `}
                <SiRedux/>{` `}
                <SiTypescript/>{` `}
                <SiSass/>
              </div>
              <div
                style={{display:'flex', justifyContent:'space-around', marginTop:'1rem'}}
              >
                <p className='del-style mgne'>
                  UI{` `}</p>
                <p className='del-style mgne'>
                  UX{` `}</p>
                <SiCss3/>{` `}
              </div>

              {/*
              <p className='exp' >React, Redux, Typescript, UI, UX, </p>
              <p className='exp' >CSS Grid, Sass, Flexbox, FullpageJS</p>
              */}
            </div>
          </ReactCollapseSimple>


          <p 
            className={`wow-at-third-sight del-style ${subSize2}`} 
            onClick={() => {handleSubClick2();setIsOpen2(!isOpen2); setIsOpen1(false); setIsOpen3(false)}}>
            <strong>Backend</strong>
          </p>
          <ReactCollapseSimple isOpen={isOpen2}>
            <div
              onClick={() => {handleSubClick2();setIsOpen2(!isOpen2); setIsOpen1(false); setIsOpen3(false)}}
              className={`del-style iconsz`} 
            >
              <div
              >
                <SiMongodb/>{` `}
                <SiPostgresql/>{` `}
                <FaNodeJs/>{` `}
                <FaDocker/>{` `}
                <SiFirebase/>{` `}
              </div>
              <div
                style={{marginTop:'0.7rem'}}
              >
                <GrMysql/>{` `}
                <SiNetlify/>{` `}
                <DiHeroku/>{` `}
                <DiLinux/>
              </div>
            </div>
          </ReactCollapseSimple>
        </ReactCollapseSimple>
      </div>
    </>
  )
}
