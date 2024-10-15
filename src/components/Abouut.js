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
            <h1 className='my-3'>About US</h1>
            <div className="accordion" id="accordionExample" style={mySTyle} >
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button" style={buttonStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Accordion Item #1
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" style={buttonStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Accordion Item #2
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" style={buttonStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Accordion Item #3
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
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
