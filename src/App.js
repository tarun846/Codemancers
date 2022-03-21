import React , {useState}from 'react'
import Textarea from './Components/Textarea';
import Comment from './Components/Comment';

function App() {
   const [comments, setcomments] = useState(() =>   []);
   const [show, setShow] = useState(false);
  return (
      <div  className = 'Faceebok_comment'  >
      {  show === true ?  <Textarea  setcomments = {setcomments} comments = {comments} setShow = {setShow} />  : '' }
      <button onClick = {()=>{setShow(true)}}  disabled = {show} className = 'main_btn_facebook'  > Add a comment </button>
       
       <Comment comments = {comments} setcomments = {setcomments} />
      </div>
  )
}

export default App

