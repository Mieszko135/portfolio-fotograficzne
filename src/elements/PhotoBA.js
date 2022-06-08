import React, {useState} from "react";

export function PhotoBA() {

    const [value, setValue] = useState(50);

    return (
        <>
        <section className="main-section">
            <div className="photo-container">
                <div className="img background-img" style={{backgroundImage: `url("./database/before-test.jpg")`}}></div>
                <div className="img foreground-img" style={{width: value+"%"}}></div>
                <input type="range" min="1" max="100" value={value} onChange={(e) => setValue(e.target.value)} className="before-after-slider" name='slider' id="slider"></input>
            </div>
        </section>
        </>  
    )
}