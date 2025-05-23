import { useState, useEffect } from 'react'
export default function Textarea(props) {
     const [myStyles, setmyStyles] = useState({
           backgroundColor: "white",
           color: "#000424"
       })
   
       useEffect(() => {
           if (props.mode === "light") {
               setmyStyles({
                   backgroundColor: "white",
                   color: "#000424"
               });
           }
           if(props.mode === "dark"){
                 setmyStyles({
                   backgroundColor: "#000424",
                   color: "white"
               });
           }
       }, [props.mode]);
    const [text, setText] = useState('')
    const changeToUppercase = () => {
        setText(text.toUpperCase())
    }
    const changeHandler = (event) => {
        setText(event.target.value)
    }
    const changeToLowercase = () => {
        setText(text.toLowerCase())
    }
    const makeBoldForWhatsapp = () => {
        setText("*" + text + "*")
    }
    const clearText = () => {
        setText("")
    }
    const copyText = () => {
        navigator.clipboard.writeText(text).then(() => {
            alert("Text copied to clipboard!");
        }).catch(err => {
            console.error("Failed to copy: ", err);
        });
    }
    const getTrueLength = (arr) => {
        let new_arr = []
        arr.forEach(element => {
            if (element !== "") {
                new_arr.push(element)
            }
        });
        return (new_arr.length.toString())
    }
    return (
        <div style={myStyles}>
            <h1>{props.heading} <button onClick={copyText} className='my-2 btn btn-primary' id="ctc">Copy To Clipboard</button></h1>

            <div className="form-floating">
                <textarea onChange={changeHandler} className="form-control" placeholder="Leave a comment here" id="textArea1" value={text}></textarea>
                <label htmlFor="textArea1">Type your text</label>
                <div className="f_btns">
                    <button onClick={changeToUppercase} className="btn btn-outline-primary my-2">Change to Uppercase</button>
                    <button onClick={changeToLowercase} className="btn btn-outline-primary mx-2 my-2">Change to Lowercase</button>
                    <button onClick={makeBoldForWhatsapp} className="btn btn-outline-primary mx-2 my-2">Bold for Whatsapp</button>
                    <button onClick={clearText} className="btn btn-outline-primary mx-2 my-2">Clear Text</button>
                </div>

            </div>
            <div className="container">
                <h1>Analysis</h1>
                <p>{text.length} characters entered with {text.split(/\s+/).filter((val)=>{return val.length!==0}).length }{/*" " + getTrueLength(text.split(/\s+/)) + " "*/}
                    word(s)</p>
                <h3>Preview</h3>


                <p className="preview">
                    {text}
                </p>
            </div>

        </div>
    )
}
