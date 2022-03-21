import React from 'react'
import profile from '../Assets/photo (2).png';
import Trash from '../Assets/filled-trash_delete.png';
import butterfly from  '../Assets/butterfly.jpeg'

function Comment({comments , setcomments ,setShow}) {
     
  
      function handleDelete(id) {
         let UpdatedComments = comments.filter((e => e.id !== id) )  
         setcomments(UpdatedComments)
      }
    
    let data = comments.map((e,i) => {
   
        return (
            <div key = {i}  className = 'comment' > 
              
            <span> <img src = {profile} className = 'comment_profile' />  </span>
          
             <div className = 'Comment_whole'  > 
                    <div className = 'text_box_comment' > 
                    <h4>  {e.text} </h4>
                  <div className = 'img_Container' >
                  <img src = {Trash} className = 'trash' onClick = {() => handleDelete(e.id)} /> 
                  </div>

                    </div>
                <img src ={e.imgid}  className = 'comment_img' />
             </div>
           
            </div>
        )
    })

    return (
        <div className = 'Comments' >
          <h3 style = {{fontFamily : 'sans-serif'}} > 'This Photo has so many thing , it has so many beautiful things' </h3>
         <img  src = {butterfly} className = 'butter' /> 
           <button onClick = {()=>{setShow(true)}}   className = 'main_btn_facebook'  > Add a comment </button>
            {data}
        </div>
    )
}

export default Comment
