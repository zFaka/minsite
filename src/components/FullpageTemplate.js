import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import {ProjectsSection} from './sections/ProjectsSection';
import {BioSection} from './sections/BioSection';
import {BlogSection} from './sections/BlogSection';

const anchors = ["bio", "projects", "blog"];
export const FullpageTemplate = () => (
  <ReactFullpage
    navigation
    anchors={anchors}
    scrollingSpeed = {555} /* Options here */

    render={({ state, fullpageApi }) => {
      return (
        <ReactFullpage.Wrapper>
          <div className="section bc-section">
            <BioSection/>
          </div>
          <div className="section bc-section">
            <ProjectsSection/>
          </div>
          <div className="section bc-section">
            <BlogSection/>
          </div>
        </ReactFullpage.Wrapper>
      );
    }}
  />
);
