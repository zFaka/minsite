import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import {BioSection} from './sections/BioSection';
import {BioScreenSection1} from './screens/bio/sections/BioScreenSection1';
import {ProjectsSection} from './sections/ProjectsSection';

export const FullpageTemplate = () => (
  <ReactFullpage
    navigation
    anchors={['section1', 'section2', 'section3', 'section4']}
    scrollingSpeed = {500} /* Options here */

    render={({ state, fullpageApi }) => {
      return (
        <ReactFullpage.Wrapper>
          <div className="section bc-section">
            <BioSection/>
          </div>
          <div className="section bc-section">
            <BioScreenSection1/>
          </div>
          <div className="section bc-section">
            <ProjectsSection/>
          </div>



          {/*
          <div className="section bc-section">
            <BlogSection/>
          </div>
          */}
        </ReactFullpage.Wrapper>
      );
    }}
  />
);
