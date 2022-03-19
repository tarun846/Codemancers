import React , {useState , useEffect} from 'react'
import axiosclient from '../apis/giphy'

function GifSearch({setimagedata , setdata}) {
  
   const [state, setstate] = useState([])
  const [search, setsearch] = useState('') 


  useEffect(() => {
     async function datas() {
        let bini = await axiosclient.get('/trending')
        setstate(bini.data.data)
       }

       datas()
     }, [])
    
     async  function handleSubmit (){
      setstate([ ])
        let bini = await axiosclient.get(`/search` , {
            params : {
                q: search
            }
        });

      setstate(bini.data.data)
    
      
}
       function handleclick(e) {
        setimagedata(e.images.fixed_height.url);
        setdata(false)
      }

       
    return (
        <div className = 'gif_mainContainer' >
        <div className = 'gif_container' >
        <div className = 'Search_image' >
        <input value = {search}  onChange ={ (e) => setsearch(e.target.value)} className = 'gif_input' />
        <button onClick = {handleSubmit} >  Click </button>
        <div className = 'image_grid' >
       
        {state.map((e , i) => {
        return  (
        <div key = {i}>
          <img src = {e.images.fixed_height.url}  onClick ={() => handleclick(e)} />
        </div>
 )
      })}
        </div>
  <div className = 'triangle' >
      
  </div>
</div>
      
</div>
</div>
    )
}

export default GifSearch
