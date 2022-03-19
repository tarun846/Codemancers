import React from 'react'
import profile from '../Assets/photo (2).png'

function Comment({comments}) {
   
    
    let data = comments.map((e,i) => {
  
        return (
            <div key = {i}  className = 'comment' > 
            <span> <img src = {profile} className = 'comment_profile' />  </span>
              <h1>  {e.text} </h1>
              <img src ={e.imgid} />
            </div>
        )
    })

    return (
        <div className = 'Comments' >
          <h1>   Comments </h1>
            {data}
        </div>
    )
}

export default Comment
