import React, {useState} from 'react'
import PropTypes from 'prop-types'



export default function TextForm(props) {
    const [text, setText] = useState('Enter Text here');
    const handleUpClick = () =>{
        console.log("uppercase was clicked")
        let newText = text.toUpperCase()
        setText(newText);
        props.showAlert("Converted to UpperCase","success")
    }
    const handlelowClick = () =>{
        console.log("uppercase was clicked")
        let newText = text.toLowerCase()
        setText(newText);
        props.showAlert("Converted to LowerCase","success")
    }
    const handleClearClick = () =>{
        setText('');
        props.showAlert("Text Cleared","success");
    }
    const handleOnChange = (event) =>{
      setText(event.target.value);
    }
  return (
    <>
    <div className="container"  style={{color : props.mode==="dark"?"white":"black"}}>
    <h1>{props.heading}</h1>     
   <div className="mb-3">
  <label for="mytextarea" className="form-label">Example textarea</label>
  <textarea className="form-control" style={{backgroundColor : props.mode==="dark"?"grey":"white" ,color : props.mode==="dark"?"white":"black"}} value={text} onChange={handleOnChange} id="mytextarea" rows="8"></textarea>
</div>
<button className='btn btn-primary my-2 mx-1' onClick={handleUpClick}>Convert to Uppercase</button>
<button className='btn btn-primary my-2 mx-1' onClick={handlelowClick}>Convert to Lowercase</button>
<button className='btn btn-primary my-2 mx-1' onClick={handleClearClick}>Clear Text</button>
<div className='cointainer my-3'>
    <h1>Your Text summary</h1>
    <p>{text.split(" ").length} words and {text.length} character</p>
</div>
</div>
    </>
  )
}
