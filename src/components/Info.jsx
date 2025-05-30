import React from 'react'
import DecryptedText from './DecryptedText'
import {homeText1} from './HomePageText';


function Info() {
  return (
    <div >
      
   <div className="info-page">
      <DecryptedText
  text={homeText1}
  animateOn="always"
  speed={30}
  revealDirection="start"
  maxIterations={65}
  className="revealed"
  encryptedClassName="encrypted"
  parentClassName="info-paragraph"
/>

    </div>


      </div>
    
  )
}

export default Info
