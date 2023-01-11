import React, { useState } from 'react';

export default function TextForm(props) {
    function handleUpClick() {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert('Converted to uppercase!', 'success');
    }

    function handleLoClick() {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert('Converted to lowercase!', 'success');
    }

    function handleClearClick() {
        setText('');
        props.showAlert('Text Cleared!', 'success');
    }

    function handleOnChange(e) {
        setText(e.target.value);
    }

    function handleExtraSpace() {
        let newText = text.split(/[ ]+/);
        setText(newText.join(' '));
        props.showAlert('Extra space removed!', 'success')
    }

    function handleTCclick() {
        let newText = text.split(' ').map(e => { let newText = e.charAt(0).toUpperCase() + e.slice(1).toLowerCase(); return newText; });
        setText(newText.join(' '));
        props.showAlert('Converted to titlecase!', 'success')
    }

    const [text, setText] = useState('');
    return (
        <>
            <div className="container" style={{ color: props.mode === "dark" ? 'white' : '042743' }}>
                <h1 className='mb-3 mt-2' style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" onChange={handleOnChange} value={text} id="myBox" rows="8" style={{ backgroundColor: props.mode === 'dark' ? '#13466e' : 'white', color: props.mode === 'dark' ? 'white' : '#042743' }}></textarea>
                </div>
                <button disabled={text.length === 0} className='btn btn-primary mx-1 my-1' onClick={handleUpClick} >Uppercase</button>
                <button disabled={text.length === 0} className='btn btn-primary mx-1 my-1' onClick={handleLoClick} >Lowercase</button>
                <button disabled={text.length === 0} className='btn btn-primary mx-1 my-1' onClick={handleTCclick} >Titlecase</button>
                <button disabled={text.length === 0} className='btn btn-primary mx-1 my-1' onClick={handleExtraSpace} >Clear Extraspace</button>
                <button disabled={text.length === 0} className='btn btn-primary mx-1 my-1' onClick={handleClearClick} >Clear</button>
            </div>
            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <h2>Your text summary</h2>
                <p>{text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} words and {text.split(/[ ]+/).join('').length} characters</p>
                <p>{0.008 * text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} Minutes read</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Nothing to preview!"}</p>
            </div>
        </>
    )
}
