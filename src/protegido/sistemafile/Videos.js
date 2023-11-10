import React from 'react';
import video1 from './videos/video1.mp4';
import video2 from './videos/video2.mp4';

const Videos = () => {
  return (
    <div id='file'>
      <h1>Videos</h1>
      Página para videos... <br></br>
      VIDEO 1 <br></br>
      <video controls width="400">
        <source src={video1} type="video/mp4" />
        Tu navegador no admite la reproducción de videos.
      </video><br></br>

      VIDEO 2 <br></br>
      <video controls width="400">
        <source src={video2} type="video/mp4" />
        Tu navegador no admite la reproducción de videos.
      </video><br></br>
    </div>
  )
}

export default Videos
