import React , {useState} from 'react'
import Pen from '../Assets/photo (4).png'
import photo from '../Assets/photo (1).png'
import video from '../Assets/photo (3).png'
import profile from '../Assets/photo (2).png'
import GifSearch from './GifSearch'

function Textarea({comments, setcomments}) {

    const [data, setdata] = useState(false)
    const [value , setvalue] = useState(' ')
    const [imagedata , setimagedata] = useState('')

  
    function submit() { 
       if (imagedata !== '' && value !== '' )  {
       
        const dataobject = {
        imgid : imagedata,
        text : value
       }
   
   setcomments([...comments , dataobject   ])
   setimagedata('')
   setvalue('')
   setdata(false)
    }
       
   
     }

     function handleclick (params) {
          setimagedata('')
          setdata(!data)
       }
    return (
          <section >

            <div className = 'textheader' >

            <div className = 'textheader_children' >

               <img src = {Pen} />

              <span> Compose post </span>

           </div>  

         <div  className = 'textheader_children'>

      <img src = {photo} />

     <span> Photo/Video Album </span>

        </div> 

          <div className = 'textheader_children'>


   <img src = {video} />

   <span> Live Video </span>

        </div>

            </div>

            <div className = 'textArea' >

             <textarea rows = '10' cols  = '60'
             value = {value}
             onChange = {(e)=> setvalue(e.target.value) }
             placeholder = 'Comment...'
             />

           { imagedata !== '' ? <img src = {imagedata}  className = 'image_positon' /> : ' '   }  

         <img  src = {profile}  className = 'profile_img' />

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
        </section>
    )
}

export default Textarea
