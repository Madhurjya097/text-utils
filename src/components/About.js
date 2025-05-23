import { useState, useEffect } from "react"

export default function About(props) {
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



    return (
        <>
            <div style={myStyles} className="accordion" id="accordionExample">
                <div style={myStyles} className="accordion-item">
                    <h2 className="accordion-header">
                        <button style={myStyles} className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                           Analyze Your text
                        </button>
                    </h2>
                    <div style={myStyles} id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div style={myStyles} className="accordion-body">
Textutils gives you a way to analyze your text quickly and efficiently. Be it word count, character count, or readability analysis, Textutils provides the tools you need to better understand and refine your writing
                        </div>
                    </div>
                </div>
                <div style={myStyles} className="accordion-item">
                    <h2 className="accordion-header">
                        <button style={myStyles} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Free to use
                        </button>
                    </h2>
                    <div style={myStyles} id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            TextUtils is a free character counter tool that provides instant character count & word count statistics for a given text. TextUtils reports the number of words and characters. Thus it is suitable for writing text with word/ character limit.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button style={myStyles} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                           Browser Compatible
                        </button>
                    </h2>
                    <div style={myStyles} id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            This word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in facebook, blog, books, excel document, pdf document, essays, etc.


                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
