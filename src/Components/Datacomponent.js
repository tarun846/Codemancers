import React , {useState} from 'react'
import butterfly from  '../Assets/butterfly.jpeg'
import profile from '../Assets/photo (2).png'
import { LikeIcon  , UnlikeIcon ,ShareIcon , CommentIcon } from "../icons";
function Datacomponent({setShow}) {
    return (
                  <>
                  <header>
            <nav>
              <div>
              Facebook
             </div>

            <div>
            <h1>... </h1>
            </div>
            
            </nav>
                  </header>
             <div className = 'Window_image' >
 <div className = 'Window_container' >


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
          <div className = 'Card_buttons_wrapper' >
    <LikeButton/>
    <ShareIcon/>
    <CommentIcon/>
  </div>
           <h4 className = 'comment_description'  > 'This Photo has so many thing , it has so many beautiful things' 'This Photo has so many thing , it has so many beautiful thin  </h4>
           <button onClick = {()=>{setShow(true)}}    className = 'main_btn_facebook'  > Add a comment </button>
           </div>
            
        </div>
       </>
    )
}
function LikeButton(){
    const [liked , setliked ] = useState(false) ;
    const Icon =  liked  ? UnlikeIcon :  LikeIcon;
    const className = liked ? 'liked' : 'like';
    const onclick =  liked ? handleUnlike : handlelike ;
    function handlelike() {
    setliked(true)
    console.log('true')
  } 
  function handleUnlike () {
    setliked(false)
    console.log('true2')
  
  } 
  
  return(
    <>
    <Icon  onClick = {onclick}  className =  {className} />
    </>
  )
}
export default Datacomponent;
