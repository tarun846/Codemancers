import React , {useState} from 'react'
import Pen from '../Assets/photo (4).png'
import photo from '../Assets/photo (1).png'
import video from '../Assets/photo (3).png'
import profile from '../Assets/photo (2).png'
import Papa from '../Assets/papaamma.jpg'
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

           <div className = 'textheader_first' >
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
           </div>
        <div className = 'textheader_second' >
        <h4 onClick = {()=>{setShow(false)}} className = 'cross'  > X </h4>
        </div>

            </div>

            <div className = 'textArea' >
 
             <textarea 
             value = {value}
             onChange = {(e)=> setvalue(e.target.value) }
             placeholder = 'Write something'
             />
<div className = 'Gif-CONTAINERs' >

 {imagedata !== '' ? <img src = {imagedata}  className = 'image_positon'/> : " "  }  
</div>
         

         <img  src = {profile}   className = 'profile_img'   />

         <div className = 'text_buttonsContainer' >

         <div className = 'Text_buttons' >
         <img src = {Pen} /> 
              <div className = 'input' children = 'Tag friends' disabled = {true}   />
           </div>

           <div className = 'Text_buttons' >
           <img src = {profile} /> 

              <div className = 'input' disabled = {true}  children = 'Check in' />
           </div>

           <div className = 'Text_buttons' >
           <img src = {Pen} /> 
              <div className = 'input' children = 'Gif' disabled = {true}  onClick = {handleclick}  />
               
           </div>

           <div className = 'Text_buttons' >
           <img src = {profile} /> 
              <div className = 'input' disabled = {true}  children = 'Tag Event' />
             
           </div>
           { data ?    <GifSearch setimagedata = {setimagedata}  setdata = {setdata} /> : '' }
            </div>
         
            </div>
           


    <div className = 'TextArea_button_Container' >
            <div className = 'TextArea_buttons' >
            <button> Only me </button>
            <button  onClick = {submit}  > post  </button>
            </div>
   </div>
            </div>
 
        </section>
    )
}

export default Textarea
