import React, { useState } from 'react'


const Toggleable = (props) => {

    const [visible, setVisible] = useState(false);

    const hideWhenVisible = {display: visible ? 'none' : '' }
    const showWhenVisible = {display: visible ? '' : 'none' }

    const toggleVisible = () => {
        setVisible(!visible);
    }

    return (
        <div className="togglableContent">
            <div style={hideWhenVisible}>
                <button onClick={toggleVisible}>{props.buttonLabel}</button>
            </div>
            <div className="hiddenContent" style={showWhenVisible}>
                {props.children}
                <button onClick={toggleVisible}>Cancel</button>
            </div>
        </div>

    )

}

export default Toggleable