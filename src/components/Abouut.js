import React,{useState} from 'react'


export default function Abouut() {
    const lightModeStyle = {

        color: 'black',
        backgroundColor: 'white'
        
    }
    const darkModeStyle =
    {
        color: 'white',
        backgroundColor: 'black'
    }

    const [mySTyle, setMyStyle] = useState(lightModeStyle)
    const[buttonText,setButtonText]=useState('Dark Mode')
    const[buttonStyle,setButtonStyle]=useState()

    const toggleStyle = () => {
        if (mySTyle.color === 'black') {
            setMyStyle(darkModeStyle);
            setButtonText('Light Mode');
            setButtonStyle(buttonStyle_Dark)
        } else {
            setMyStyle(lightModeStyle);
            setButtonText('Dark Mode');
            setButtonStyle(buttonStyle_Light)
        }
        
    };



    const buttonStyle_Dark = {
        color: 'white',
        backgroundColor: 'black',
        border: '1px solid white',

    };
    const buttonStyle_Light = {
        color: 'black',
        backgroundColor: 'white',
        border: '1px solid black',

    };
    return (
        <div className='container' style={mySTyle}>
            <h1 className='my-3 mx-2 pt-3'>About US</h1>
            <div className="accordion my-2 mx-2" id="accordionExample" style={mySTyle} >
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button" style={buttonStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Analyze your Text
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>TextUtils gives you a way to analyze your text quickly and efficiently. Be it word count, character count , reading speed , preview your content, save as your text file and so much text formatting</strong> 
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" style={buttonStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Free to use
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>TextUtils is a free character counter tool that provides instant character count & word count statistics for a given text. Textutils reports the number of words and characters. Thus it is suitable for writing text with word/character limit.</strong>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" style={buttonStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        Browser Compatible
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>This word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, pera. It
                            suits to count characters in facebook, blog, books, excel document, pdf document, essays, etc.</strong>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <button onClick={toggleStyle}
                    type='button' className="btn btn-dark my-2">{buttonText}</button>

            </div>
        </div>
    )
}
