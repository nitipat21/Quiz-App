import React from 'react';

export default function SubmitBtn(props) {

    return (

        <div className="sumbitBtn-container">
            <button type="submit" onClick={props.handleChange}>Submit</button>
        </div>

    )

}