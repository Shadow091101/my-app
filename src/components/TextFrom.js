import React, { useState } from 'react'

export default function TextFrom(props) {
    const handleUPclick = () => {
        // console.log("Uppercase was clicked");
        if(text!=='' || /[\w]/.test(text)){

            let newText = text.toUpperCase();
            setText(newText)
            props.showAlert("Converted to Uppercase","success")
        }
        else{
            props.showAlert("Please Enter a Valid Text","error")

        }
    }
    const handleLOclick = () => {
        // console.log("Uppercase was clicked");
        if(text!=='' || /[\w]/.test(text)){
            let newText = text.toLowerCase();
            setText(newText)
            props.showAlert('Converted to Lowercase','success')

        }
        else{
            props.showAlert("Please Enter a Valid Text","error")

        }
    }
    const handleclearclick = () => {
        // console.log("Uppercase was clicked");
        // let newText=text.toLowerCase();
        if(text!==''){
            setText('')
            props.showAlert('Text Cleared','success')

        }
    }
    const handleOnchange = (event) => {
        
        // console.log("on change");
        setText(event.target.value)
    }
    
    const handleColorChange = ( color) => {
        if(text!==''){
            setTextColor(color);
            props.showAlert(`Color of Text Changed to ${color}. See Preview`,'success')

        }
    }
    
    const downloadTextFile = () => {
        if(text!==''){
            const blob = new Blob([text], { type: 'text/plain' });
            const link = document.createElement('a');
            link.href = URL.createObjectURL(blob);
            link.download = 'text-preview.txt';
            link.click();
            props.showAlert('Text File has been Downloaded. Check Downloads','success')
            
        }
    }
    
    const capitalizeWords = (text) => {
        if (typeof text !== 'string' || text.trim()==='' ||  /[\w]/.test(text)) {
            props.showAlert("Please Enter a Valid Text","error")
            return ''; // Return empty string if text is not a string
        }
        if(props && props.showAlert){
            props.showAlert("Text is Capitalized",'success')

        }
            return text.split(' ')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
            .join(' ');
        
        
    }
    
    const handleCopy = () => {
        

            var text = document.getElementById('myBox')
            text.select()
            text.setSelectionRange(0, 9999);
            navigator.clipboard.writeText(text.value)
            document.getSelection().removeAllRanges();
            props.showAlert("Text is Copied To Clipboard",'success')
        
    }
    
    const handleExtraSpaces = () => {
        if(text!==''){

            let newText = text.split(/\s+/);
            setText(newText.join(' '))
            props.showAlert("Extra Spaces is Removed from Text",'success')
        }
    }


    const [text, setText] = useState('')
    const [textColor, setTextColor] = useState('black')
    // textColor='black'
    // text='new task';//Wrong way to change the state
    // setText('new Text')
    console.log(useState('Enter text here2'))
    console.log(typeof text)

// filter((element)=>{return element.length!==0}).length
    let slow_read_speed = 0.008 * text.split(' ').filter((element)=>{return element.length!==0}).length;
    let medium_read_speed = 0.0047 * text.split(' ').filter((element)=>{return element.length!==0}).length;
    let fast_read_speed = 0.003 * text.split(' ').filter((element)=>{return element.length!==0}).length;
    // Labels for reading time units
    let slow_read_speed_label = 'minutes';
    let medium_read_speed_label = 'minutes';
    let fast_read_speed_label = 'minutes';

    if (slow_read_speed <= 1) {
        slow_read_speed_label = 'seconds';
        slow_read_speed *= 60;
    }

    if (medium_read_speed <= 1) {
        medium_read_speed_label = 'seconds';
        medium_read_speed *= 60;
    }

    if (fast_read_speed <= 1) {
        fast_read_speed_label = 'seconds';
        fast_read_speed *= 60;
    }

    const lightbg = {
        backgroundColor: 'white',
        color: 'black'
    }
    const darkbg = {
        backgroundColor: 'grey',
        color: 'white'
    }

    const TextColor = props.mode === 'light' ? 'text-dark' : 'text-light'
    // const textAreaColor = props.mode === 'light' ? lightbg : darkbg
    const textAreaBorder = props.mode === 'light' ? 'border-dark' : 'border-light'
    const textAreaBg = props.mode === 'light' ? lightbg : darkbg
    console.log(TextColor)
    return (
        <>
            <div className='container'>
                <h1 className={TextColor}>{props.heading}</h1>
                <div className={`mb-3 ${TextColor}`}>
                    {/* <label for="myBox" className="form-label">Example textarea</label> */}
                    <textarea className={`form-control border border-${textAreaBorder} text-${textAreaBg}`} style={textAreaBg} value={text} onChange={handleOnchange} id="myBox" rows="8"></textarea>
                </div>
                <button disabled={text.length===0} className="btn btn-primary mx-3 my-2" onClick={handleUPclick}>Convert To Uppercase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-3 my-2" onClick={handleLOclick}>Convert To Lowercase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-3 my-2" onClick={handleCopy}>Copy Text to ClipBoard</button>
                <button disabled={text.length===0} className="btn btn-primary mx-3 my-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
                <button disabled={text.length===0} className="btn btn-primary mx-3 my-2" onClick={() => setText(capitalizeWords(text))}>Capitalize</button>
                <button disabled={text.length===0} className={`btn btn-danger`} onClick={handleclearclick}>Clear</button>
                <br />
                <br />
                <br />
                <hr />

                <h2 className={` ${TextColor}`}>Change Text Color</h2>


                <br />
                <button className="btn btn-danger mx-2 my-2" onClick={() => handleColorChange('red')}>Red</button>
                <button className="btn btn-success mx-2 my-2" onClick={() => handleColorChange('green')}>Green</button>
                <button className="btn btn-primary mx-2 my-2" onClick={() => handleColorChange('blue')}>Blue</button>
                <button className="btn btn-dark mx-2 my-2" onClick={() => handleColorChange('black')}>Black</button>
                <br />
                <hr />
                <button className="btn btn-success mx-3 my-2" onClick={downloadTextFile}>Download as Text File</button>
                <hr />
            </div>
            <div className="container" style={{marginBottom:'20px'}}>
                <h1 className={` ${TextColor}`}>You text Summary</h1>
                <p className={` ${TextColor}`}>{text.split(' ').filter((element)=>{return element.length!==0}).length} words,{text.length} characters </p>
                <p className={` ${TextColor}`}>{slow_read_speed} {slow_read_speed_label} needed to read the above text if you are a slow reader(125wpm)</p>
                <p className={` ${TextColor}`}>{medium_read_speed} {medium_read_speed_label} needed to read the above text if you are a average reader(210wpm)</p>
                <p className={` ${TextColor}`}>{fast_read_speed} {fast_read_speed_label} needed to read the above text if you are a fast reader(300wpm)</p>
                <h2 className={` ${TextColor}`}>Preview</h2>
                <div style={{ color: textColor }}>
                    
                    <textarea className={`form-control border border-${textAreaBorder} text-${textAreaBg}`} style={{textAreaBg,color: textColor}} value={text}  id="myBox" rows="8" readOnly='true' ></textarea>
                </div>
            </div>
                {/* <p  style={{ color: textColor }}>{text}</p> */}
        </>
    )
}
