import React from 'react';



export const ProjectsScreen = () => {
  const items = [
    {id: 1, title: 'Calendar Events', url:'https://www.w3schools.com'},
    {id: 2, title: 'Face Recognition', url:'https://www.google.com'},
    {id: 3, title: 'Systems Tracker', url:'https://www.twitter.com'},
    {id: 4, title: 'Youtube Focus', url:'https://www.facebook.com'},
    {id: 5, title: 'Blog', url:'https://www.reddit.com'}, 
  ]
  return (
    <div>
      {
        items.map((item) => {
          return (
            <div key={item.id} className=' proj'>
              <a href={item.url} target="_blank" rel="noreferrer" className='del-style'>
                {item.title}
              </a>
            </div>
          )}
        )
      }
    </div>
  );
};
