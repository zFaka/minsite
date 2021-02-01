import React from 'react';
import Carousel from 'react-elastic-carousel';
import ReactFullpage from '@fullpage/react-fullpage';

const state = {
  items: [
    {id: 1, title: 'Calendar Events', url:'https://www.w3schools.com'},
    {id: 2, title: 'Face Recognition', url:'https://www.google.com'},
    {id: 3, title: 'Systems Tracker', url:'https://www.twitter.com'},
    {id: 4, title: 'Youtube Focus', url:'https://www.facebook.com'},
    {id: 5, title: 'Blog', url:'https://www.reddit.com'}, 
  ]
}

const { items } = state;


export const ProjectsScreen = () => (
  <ReactFullpage
    render={({ state, fullpageApi }) => {
      return (
        <ReactFullpage.Wrapper>
          <div className="section bc-section" style={{backgroundColor:'black'}}>
            <Carousel display='flex' showArrows={false}>
              {items.map(item => <div key={item.id}>
                <a href={item.url} target="_blank" rel="noreferrer" className='del-style'>
                    {item.title}
                </a>
              </div>)}
            </Carousel>
          </div>
        </ReactFullpage.Wrapper>
      );
    }}
  />
);
