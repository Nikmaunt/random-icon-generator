import React, {useEffect, useState} from 'react';
import './App.css';
import * as icons from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


function App() {
    const [icon, setIcon] = useState("");
    const [trigger, setTrigger] = useState(false);
    const [rendered, setRendered] = useState(false);

    const Icon = icon ? icons[icon] : null;
    const iconsMaxNumber = Object.keys(icons).length

    function randomInteger() {
        let rand = 0 - 0.5 + Math.random() * (iconsMaxNumber - 0 + 1);
        setIcon((Object.keys(icons)[Math.round(rand)]));
    }

    useEffect(() => {
        if (rendered === true) {
            setTimeout(() => randomInteger(), 3000);
        }
        setRendered(true)
    }, [trigger]);


    return (
        <div className="App">
            <button onClick={() => {
                setTrigger(!trigger)
            }}>Get random icon
            </button>
            {icon ? (
                <div className='icon'>
                    <FontAwesomeIcon icon={Icon}/>
                </div>
            ) : (
                <span className='text'>Click the button</span>
            )}
        </div>
    );
}

export default App;
