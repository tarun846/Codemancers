import React , {useState} from 'react'
import Pen from '../Assets/photo (4).png'
import photo from '../Assets/photo (1).png'
import video from '../Assets/photo (3).png'
import profile from '../Assets/photo (2).png'
import GifSearch from './GifSearch'

function Textarea({comments, setcomments ,setShow}) {

      const [data, setdata] = useState(false)
      const [value , setvalue] = useState(' ')
      const [imagedata , setimagedata] = useState('')

  
    function submit() { 
       
        if (imagedata !== '' && value !== '' )  {
       
        const dataobject = {
        imgid : imagedata,
        text : value,
        id :Date.now()
       }
   
     setcomments([...comments , dataobject   ])
     setimagedata('')
     setvalue('')
     setdata(false)
     setShow(false)
    }
       
   
    }

     function handleclick () {
          setimagedata('')
          setdata(!data)
       }

    return (
          <section >
       <div className = 'Main_textarea'  >


            <div className = 'textheader' style = {{position : 'relative'}}  >

            <div className = 'textheader_children' >

               <img src = {Pen}  alt ='pen'  />

              <span> Compose post </span>

           </div>  

         <div  className = 'textheader_children'>

      <img src = {photo} alt ='photo' />

     <span> Photo/Video Album </span>

        </div> 

          <div className = 'textheader_children'>


      <img src = {video} alt = 'video'  />

       <span> Live Video </span>

        </div>
        <h4 onClick = {()=>{setShow(false)}} className = 'cross'  > X </h4>

            </div>

            <div className = 'textArea' >
  <div className = 'Gif-CONTAINER' >
             <textarea 
             value = {value}
             onChange = {(e)=> setvalue(e.target.value) }
             placeholder = 'Comment...'
             />

           { imagedata !== '' ? <img src = {imagedata}  className = 'image_positon'   /> : ' '   }  
</div>
         <img  src = {profile}   className = 'profile_img'   />

         <div className = 'text_buttonsContainer' >

         <div className = 'Text_buttons' >
              <div className = 'input' children = 'Add gif' disabled = {true}  onClick = {handleclick}  />
               <img src = {Pen} /> 
           </div>

           <div className = 'Text_buttons' >
              <div className = 'input' disabled = {true}  children = 'Submit' onClick = {submit}  />
               <img src = {profile} /> 
           </div>
            </div>
         
            </div>
            { data ?    <GifSearch setimagedata = {setimagedata}  setdata = {setdata} /> : '' }

            </div>

        </section>
    )
}

export default Textarea
