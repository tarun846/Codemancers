import React , {useState}from 'react'
import Textarea from './Components/Textarea';
import Comment from './Components/Comment';
function App() {
   const [comments, setcomments] = useState(() =>   []);
   const [show, setShow] = useState(false);
  return (
      <div  className = 'Faceebok_comment'  >
      {  show === true ?  <Textarea  setcomments = {setcomments} comments = {comments} setShow = {setShow} />  : '' }
      
       <Comment comments = {comments} setcomments = {setcomments} setShow = {setShow} />
     
      </div>
  )
}

export default App

