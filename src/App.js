import React , {createContext, useState}from 'react'
import Textarea from './Components/Textarea';
import Comment from './Components/Comment';
export const  Showcontext =  createContext()
function App() {
   const [comments, setcomments] = useState(() =>   []);
   const [show, setShow] = useState(false);
  
   const value = {
    comments : comments , 
    setcomments :  setcomments,
    setShow :  setShow ,
   }

  return (
    <>
    
      <Showcontext.Provider value = {value} >
  
      <div  className = 'Faceebok_comment'  >
       {  show === true ?  <Textarea   />  : '' }
      
         <Comment />
     
      </div>
      </Showcontext.Provider> 
      
    
      </>

  )
}

export default App ;

