import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import {BioScreenSection1} from './sections/BioScreenSection1';
import {BioScreenSection2} from './sections/BioScreenSection2';
import {BioScreenSection3} from './sections/BioScreenSection3';


const BioScreen = () => {
  return (
    <ReactFullpage
      navigation
      scrollingSpeed = {355} /* Options here */
      render={({ state, fullpageApi }) => {

        return (
          <ReactFullpage.Wrapper>


            <div className="section bc-section">
              <BioScreenSection1/>
            </div>


            <div className="section bc-section">
              <BioScreenSection2/>
            </div>


            <div className="section bc-section">
              <BioScreenSection3/>
            </div>
          </ReactFullpage.Wrapper>
        );
      }}
    />
  )}

export default BioScreen;
