import React, { useState } from 'react'


export default function TextForm(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLowerClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleclear = () => {
        let newText = "";
        setText(newText);
    }
    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const [text, setText] = useState('');
    // text = "new text"; // wrong way to change the state 
    // setText = ("new text"); // correct way to change the state

    return (
        <>
            <div className="container" style={{color: props.mode==='light'?'black':'white' }}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode==='light'?'white':'gray' , color: props.mode==='light'?'black':'white'}} id="myBox" rows="6"></textarea>
                </div>
                <button type="button" className={`btn btn-${props.mode} mx-1`} onClick={handleUpClick}>Uppercase</button>
                <button type="button" className={`btn btn-${props.mode} mx-1`} onClick={handleLowerClick}>Lowercase</button>
                <button type="button" className={`btn btn-${props.mode} mx-1`} onClick={handleclear}>Clear Text</button>
            </div>
            <hr/>
            <div className="container my-3" style={{color: props.mode==='light'?'black':'white' }}>
                <h2>Your text summary</h2>
                <p>{text.split(" ").length} Words and {text.length} Characters</p>
                <p>{0.008 * text.split(" ").length} Minute To Read</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
            </div>
        </>
    )
}
