import React,{useState} from 'react'
import PropTypes from 'prop-types'

export default function TextForm(props) {
    const handleUpClick=()=>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase!","success");
    }
    const handleLoClick=()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase!","success");
    }
    const handleClearClick=()=>{
        setText('');
        props.showAlert("Cleared!","success");
    }
    const handleCopyClick=()=>{
        navigator.clipboard.writeText(text);
        document.getSelection().removeAllRanges();
        props.showAlert("Copied to clipboard!","success");

    }
    const handleextraspaceClick=()=>{
        let newText=text.split(/[ ]+/);
        let new1Text=newText.join(" ");
        setText(new1Text);
        props.showAlert("Extra space removed!","success");
    }
    const onChangeHandle=(event)=>{
        setText(event.target.value);
    }

    const [text,setText]=useState("");
  return (
    <>
    
    <div className='container my-3 ' style={{color: props.mode==='light'?'black':'white'}}>
    <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control " value={text} style={{backgroundColor: props.mode==='light'?'white':'#282727', color: props.mode==='light'?'black':'white'}} onChange={onChangeHandle} id="mybox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-1 my-1" disabled={text.length===0} onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-1 my-1" disabled={text.length===0} onClick={handleLoClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-1 my-1" disabled={text.length===0} onClick={handleextraspaceClick}>Remove extra space</button>
        <button className="btn btn-primary mx-1 my-1" disabled={text.length===0} onClick={handleCopyClick}>Copy to Clipboard</button>
        <button className="btn btn-primary mx-1 my-1" disabled={text.length===0} onClick={handleClearClick}>Clear Text</button>

    </div>
    <div className="container my-3" style={{color: props.mode==='light'?'black':'white'}}>
        <h2>Your Text Summary</h2>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words</p>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).join("").length} characters</p>
        <h2>Your Preview</h2>
        <p>{text}</p>
    </div>
    </>
    
  )
}

TextForm.propTypes={
    heading : PropTypes.string.isRequired
}