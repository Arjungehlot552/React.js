import React, { useState } from 'react';

export default function TextForm(props) {
    const [isEnglish, setIsEnglish] = useState(true);
    const [text, setText] = useState('Enter Text Here');

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleToClear = () => {
        let newText = "";
        setText(newText);
    }

    const handleToggleLanguage = () => {
        setIsEnglish(!isEnglish);
        setText('');
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const handleDownload = () => {
        const element = document.createElement("a");
        const file = new Blob([text], { type: 'text/plain' });
        element.href = URL.createObjectURL(file);
        element.download = "myTextFile.txt";
        document.body.appendChild(element); // Required for this to work in FireFox
        element.click();
    }

    const languageButtonLabel = isEnglish ? 'Switch to Hindi' : 'Switch to English';

    return (
        <>
            <div className="container">
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-2" onClick={handleToClear}>Clear Text</button>
                <button className="btn btn-secondary mx-2" onClick={handleToggleLanguage}>{languageButtonLabel}</button>
                <button className="btn btn-success mx-2" onClick={handleDownload}>Download Text</button>
            </div>
            <div className="container my-3">
                <h2>Your text summary</h2>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} Minutes read</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>
    );
}
