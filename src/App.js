import React , {useState}from 'react'
import Textarea from './Components/Textarea';
import Comment from './Components/Comment';

function App() {
   const [comments, setcomments] = useState(() =>   [])
 
  return (
      <>
      <Textarea  setcomments = {setcomments} comments = {comments}  />
       <Comment comments = {comments} />
      </>
  )
}

export default App

