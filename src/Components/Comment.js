import React from 'react'
import profile from '../Assets/photo (2).png';

function Comment({comments}) {
   
    
    let data = comments.map((e,i) => {
  
        return (
            <div key = {i}  className = 'comment' > 
            <span> <img src = {profile} className = 'comment_profile' />  </span>
             <div className = 'Comment_whole'  >  
                    <h4>  {e.text} </h4>
              <img src ={e.imgid}  className = 'comment_img' />
             </div>
            </div>
        )
    })

    return (
        <div className = 'Comments' >
          <h1>   Comments... </h1>
            {data}
        </div>
    )
}

export default Comment
