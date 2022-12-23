import React, { useState } from "react";

import AddCircleIcon from '@mui/icons-material/AddCircle';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';
var arr=[]
function CreateArea(props) {

  const [inputObj,setInputObj]=useState([{
    title:"",
    content:""}]);

  
  
  function handleChange(event){
  
   setInputObj((prev)=>{return{...prev, [event.target.name]:event.target.value}})


  }
  
  function handleClick(event){
      props.onAdd(inputObj);
      event.preventDefault();
    setInputObj({title:"",
    content:""});
  }
 
  const [full, showFull]= useState(false);
  function expandArea(){
    showFull(true);
    
    

  }
  return (
    <div>
      <form className="create-note" onClick={expandArea}>
        {
          full? <input name="title" placeholder="Title" onChange={handleChange} value={inputObj.title} />:null
     
    
        }
        <textarea name="content" placeholder="Take a note..." rows={
          full? 3:1
        } onChange={handleChange} value={inputObj.content }

        
        


        />
        <Zoom in={true}>
        <Fab onClick={handleClick}>
          <AddCircleIcon />
        </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
export {arr};