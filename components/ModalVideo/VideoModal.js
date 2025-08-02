
import React, { useState } from 'react'
import ModalVideo from 'react-modal-video'



const VideoModal = () => {

  const [isOpen, setOpen] = useState(false)

  return (
    <React.Fragment>
      <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="VqmFKnHG5q8?si=YcvnY_zzMv21k4iM" onClose={() => setOpen(false)} />


      <button className="video-btn" onClick={() => setOpen(true)}><i className="flaticon-play"></i></button>
     

    </React.Fragment>
  )
}

export default VideoModal;