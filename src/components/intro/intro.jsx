import React from 'react' 
import "./intro.css"
import Me from "../../img/tevtrial.png"

const Intro = () => {
  return (
    <div className='i'>
      <div className='i-left'>
        <div className='i-left-wrapper'>
          <h2 className='i-preface'>Hello, My name is</h2>
          <h2 className='i-name'>Tevin Milla</h2>
          <div className='i-titles'>
            <div className="i-title-wrappers">
              <div className="title-name">Software Engineer</div>
              <div className="title-name">Cloud DevOps Engineer</div>
              <div className="title-name">UI/UX Engineer</div>
            </div>
          </div>
          <div className="idescribe">
          I am a skilled problem solver leveraging my technology arsenal to build interactive and user centered products that are good and pleasing to the eye.
          </div>
        </div>
      </div>
      <div className='i-right'>
        <div className='i-bg'></div>
        <img src={Me} alt="" className="i-image" />
        </div>
    </div>
  )
}

export default Intro