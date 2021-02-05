import {useState} from "react";
import ReactCollapseSimple from "react-collapse-simple";
import {BiWindowOpen} from 'react-icons/bi';

export const ProjectsSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [size, setSize] = useState();
  const [subSize1, setSubSize1] = useState();
  const [subSize2, setSubSize2] = useState();

  const handleClick = () => {
    setIsOpen(!isOpen);setIsOpen1(false); setIsOpen2(false);setSubSize1('show');setSubSize2('show');
    if(isOpen === false)
    {setSize('hide')} 
    else {setSize('show')}};

  const handleSubClick1 = () => {
    setIsOpen1(!isOpen1);
    if(isOpen1 === false)
    {setSubSize1('subhide')
      setSubSize2('show')} 
    else {setSubSize1('show')}}

  const handleSubClick2 = () => {
    setIsOpen2(!isOpen2);
    if(isOpen2 === false)
    {setSubSize2('subhide')
      setSubSize1('show')}
    else {setSubSize2('show')}}

  return(
    <>
      <div className='center'>

        <h2 
          className={`wow-at-second-sight del-style ${size}`} 
          style={{cursor:'pointer'}} 
          onClick={() => {handleClick()}}>
          EXP
        </h2>


        <ReactCollapseSimple isOpen={isOpen}>
          <p 
            className={`wow-at-third-sight del-style ${subSize1}`} 
            onClick={() => {handleSubClick1();setIsOpen1(!isOpen1); setIsOpen2(false)}} 
            style={{cursor:'pointer'}}> 
            <strong>Calxy</strong>
          </p>
          <ReactCollapseSimple isOpen={isOpen1}>
            <div
              onClick={() => {handleSubClick1();setIsOpen1(!isOpen1); setIsOpen2(false)}} 
              className={`del-style`} 
            >
              <p className='exp'
                style={{marginTop:'-1px'}}
              >Calendar events app for teams,</p>
              <p className='exp'
                style={{marginTop:'-18px'}}
              >you can create, edit, delete, administrate your own events</p>
              <p className='exp'
                style={{marginTop:'-18px'}}
              >and see those of your team</p>
              <ul className='center' style={{textAlign:'initial', marginBottom:'20px'}}>
                <li>
                  ReactJS to create components
                </li>
                <li>
                  Hooks to use the form 
                </li>
                <li>
                  Router to create the routes
                </li>
                <li>
                  Redux to manage the state
                </li>
                <li>
                  Node JS to the creation of backend
                </li>
                <li>
                  JWT to keep the session for a time
                </li>
                <li>
                  MongoDB to create the database
                </li>
                <li>
                  Heroku to deploy the app
                </li>
              </ul>
              <a 
                href='https://calxy.herokuapp.com/' 
                target="_blank" 
                rel="noreferrer" 
                className='wow-at-third-sight del-style' 
                style={{fontWeight:'555'}}
              >
                <BiWindowOpen/>
              </a>
            </div>
          </ReactCollapseSimple>


          <p 
            className={`wow-at-third-sight del-style ${subSize2}`} 
            onClick={() => {handleSubClick2();setIsOpen2(!isOpen2); setIsOpen1(false)}} 
            style={{cursor:'pointer'}}> 
            <strong>Journld</strong>
          </p>
          <ReactCollapseSimple isOpen={isOpen2}>
            <div
              onClick={() => {handleSubClick2();setIsOpen2(!isOpen2); setIsOpen1(false)}} 
              className={`del-style`} 
            >
              <p className='exp'
                style={{marginTop:'-1px'}}
              >It's a journal app where you can </p>
              <p className='exp'
                style={{marginTop:'-18px'}}
              >register using the google account, </p>
              <p className='exp'
                style={{marginTop:'-18px'}}
              >(this works with linkedin,github,etc)</p>
              <p className='exp'
                style={{marginTop:'-18px'}}
              >use Sass to styling the app and</p>
              <p className='exp'
                style={{marginTop:'-18px'}}
              >upload images from your device</p>
              <ul style={{textAlign:'initial'}}>
                <li>
                  ReactJS to create components
                </li>
                <li>
                  Hooks to use the form 
                </li>
                <li>
                  Router to create the routes
                </li>
                <li>
                  Redux to manage the state
                </li>
                <li>
                  Firebase to create the database
                </li>
              </ul>
              <a 
                href='https://zfaka.github.io/journld/' 
                target="_blank" 
                rel="noreferrer" 
                className='wow-at-third-sight del-style' 
                style={{fontWeight:'555'}}
              >
                <BiWindowOpen/>
              </a>
            </div>
          </ReactCollapseSimple>
        </ReactCollapseSimple>
      </div>
    </>
  )
}
