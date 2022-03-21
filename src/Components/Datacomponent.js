import React from 'react'
import butterfly from  '../Assets/butterfly.jpeg'
import profile from '../Assets/photo (2).png'

function Datacomponent() {
    return (
    
             <div className = 'Window_image' >
          <div className = 'profile_container' >
           <div className = 'Window_profile' >
           <img src = {profile} />
           <span> Tarun Kumar </span>
           </div>
          <h3 style = {{fontFamily : 'sans-serif'}} > 'This Photo has so many thing , it has so many beautiful things' </h3>
        
          </div>
          <div className = 'butterfly_image_container' >
          <img  src = {butterfly} className = 'butter' /> 
          </div>
           <h4 className = 'comment_description'  > 'This Photo has so many thing , it has so many beautiful things' 'This Photo has so many thing , it has so many beautiful thin  </h4>
        </div>
       
    )
}

export default Datacomponent
