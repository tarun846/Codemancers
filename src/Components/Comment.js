import React , {useContext} from 'react'
import profile from '../Assets/photo (2).png';
import Trash from '../Assets/filled-trash_delete.png';
import Datacomponent from './Datacomponent';
import {Showcontext} from '../App'

function Comment() {
  const {comments, setcomments ,setShow} = useContext(Showcontext)
     
  
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
       <div>
         <Datacomponent setShow ={setShow} />
         
         
           <h2 className = 'Head_text' > your comments </h2  >
            {data}
        </div>
    )
}

export default Comment
